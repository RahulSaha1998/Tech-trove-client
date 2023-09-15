import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import CheckoutForm from '../../components/CheckoutForm';

const Checkout = () => {

    const loaderData = useLoaderData();
    const navigate = useNavigate()
    const {price, _id} = loaderData;

    const handlePayment = (event) => {
        event.preventDefault();
        toast.success('Payment Successful!')
        navigate('/cart')
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