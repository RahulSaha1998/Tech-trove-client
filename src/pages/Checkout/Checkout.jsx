import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import CheckoutForm from '../../components/CheckoutForm';
import useAxios from '../../hooks/useAxios';

const Checkout = () => {

    const navigate = useNavigate()
    const API = useAxios();

    const loaderData = useLoaderData();

    //destruct data from loaderData
    const { _id, p_id, price, product_name, image, rating, description } = loaderData;


    const handlePayment = (event) => {
        event.preventDefault();

        const paymentItem = {
            product_name,
            price: parseFloat(price),
            rating: parseFloat(rating),
            description,
            status: 'Paid',
            selectedItem: 1,
            p_id,
            image
        }


        //post the product to the server
        API.post("/payments", paymentItem)
            .then((data) => {
                if (data?.data?.insertedId) {
                    toast.success('Payment Successful!')
                    navigate('/cart/orderHistory');
                }
            })
            .catch((err) => console.log(err));




    }

    return (
        <div className="max-w-sm mx-auto">
            <Helmet>
                <title>TECH TROVE | Checkout</title>
            </Helmet>
            <p className="text-center font-bold text-2xl mb-5"><u>Please Pay: ${price}</u></p>

            <CheckoutForm
                key={_id}
                handlePayment={handlePayment}
            >
            </CheckoutForm>
        </div>
    );
};

export default Checkout;