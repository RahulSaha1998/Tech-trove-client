import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import toast from 'react-hot-toast';
import MyCartTable from '../../components/MyCartTable';
import SectionTitle from '../../components/SectionTitle';


const MyCart = () => {

    // State for storing cart products
    const [cartProduct, setCartProduct] = useState([]);
    const API = useAxios();

    // Fetch carted products
    useEffect(() => {
        API.get('cartProducts')
            .then((res) => {
                setCartProduct(res.data);
            })
            .catch((err) => console.error(err));
    }, []);


    // Function to handle product deletion
    const handleDelete = _id => {

        API.delete(`/cartProducts/${_id}`)
            .then(data => {
                if (data?.data?.deletedCount > 0) {
                    toast.success("Product Deleted successfully!");

                    const remaining = cartProduct.filter(product => product._id !== _id);
                    setCartProduct(remaining);
                }
            })
    }

    //calculating total price of cart products
    const totalAmount = cartProduct.reduce((sum, item) => item.price + sum, 0);


    return (
        <div>
            <Helmet>
                <title>TECH TROVE | Cart</title>
            </Helmet>
            <SectionTitle heading='Welcome To MY Cart'></SectionTitle>
            <div className="flex items-center gap-5 justify-end mt-2 mb-2">
                <p className="text-lg font-semibold">Total: ${totalAmount}</p>
                <Link to="/cart/orderHistory">
                    <button className='btn btn-outline'>Order History</button>
                </Link>
            </div>
            <div className="overflow-x-auto">
                <div className="overflow-x-auto card shadow-lg">

                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr className='bg-slate-400 text-slate-800'>
                                <th className='text-center'>Serial</th>
                                <th className='text-center'>Photo</th>
                                <th className='text-center'>Name</th>
                                <th className='text-center'>Price</th>
                                <th className='text-center'>Rating</th>
                                <th className='text-center'>Quantity</th>
                                <th className='text-center'>Payment</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        {
                            cartProduct.map((item, index) => <MyCartTable
                                index={index}
                                key={item._id}
                                item={item}
                                handleDelete={handleDelete}
                            ></MyCartTable>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;