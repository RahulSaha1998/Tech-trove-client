import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import toast from 'react-hot-toast';


const MyCart = () => {

    // State for storing cart products
    const [cartProduct, setCartProduct] = useState([]);
    const API = useAxios();

    // Fetch carted products
    useEffect(()=>{
        API('cartProducts')
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

    //   calculating total price of cart products
    const total = cartProduct.reduce((sum, item) => item.price + sum, 0);


    return (
        <div>
            <Helmet>
                <title>REPLIQ | Cart</title>
            </Helmet>
            <div className="flex items-center gap-5 justify-end mb-5">
                <p className="text-lg font-semibold">Total: ${total}</p>
                <Link to="/cart/checkout" state={total}> 
                    <button className='btn btn-outline'>Checkout</button>
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
                                    <th className='text-center'>Email</th>
                                    <th className='text-center'>Price</th>
                                    <th className='text-center'>Quantity</th>
                                    <th className='text-center'>rating</th>
                                    <th className='text-center'>Delete</th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartProduct.map((product, index) =>
                                        <tr key={product._id} className='font-bold'>
                                            <th className="text-center">{index + 1}</th>
                                            <th className="text-center"><img className="w-24 mx-auto" src={product?.image} alt="" /></th>
                                            <td className="text-center">{product.product_name}</td>
                                            <td className="text-center">{product.email}</td>
                                            <td className="text-center">${product.price}</td>
                                            <td className="text-center">{product.quantity}</td>
                                            <td className="text-center">{product.rating}</td>
                                            <td className='text-center'><button onClick={() => handleDelete(product._id)} className='btn btn-error'>Delete</button></td>

                                        </tr>)
                                }

                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;