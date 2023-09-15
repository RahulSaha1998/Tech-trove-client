import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import OrderHistoryTable from '../../components/OrderHistoryTable';
import SectionTitle from '../../components/SectionTitle';


const OrderHistory = () => {

    // State for storing cart products
    const [paidProducts, setCartProduct] = useState([]);
    const API = useAxios();

    // Fetch carted products
    useEffect(() => {
        API('/paidProducts')
            .then((res) => {
                setCartProduct(res.data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <Helmet>
                <title>TECH TROVE | Order History</title>
            </Helmet>
            <SectionTitle heading='Order History'></SectionTitle>
            <div className="flex items-center gap-5 justify-end mb-5">
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
                                <th className='text-center'>Status</th>
                            </tr>
                        </thead>
            

                        {
                            paidProducts.map((item, index) => <OrderHistoryTable
                                index={index}
                                key={item._id}
                                item={item}
                            ></OrderHistoryTable>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderHistory;