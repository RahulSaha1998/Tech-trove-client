import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import { useState } from "react";
import AllProductTable from "../../components/AllProductTable";

const AllProducts = () => {
    const loadedProduct = useLoaderData();

    const [products, setProducts] = useState(loadedProduct);


    const handleDelete = _id => {
        console.log(_id);
        fetch(`https://repliq-ecommerce-server-gamma.vercel.app/products/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Deleted Successful!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    const remaining = products.filter(product => product._id !== _id);
                    setProducts(remaining);
                }
            })
    }


    return (
        <div className='w-full h-full'>
            <Helmet>
                <title>TECH TROVE | Product List</title>
            </Helmet>
            <div className="overflow-x-auto">
                <SectionTitle heading='Product List' />
                <div className="overflow-x-auto m-8 card shadow-2xl">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className='bg-slate-400 text-slate-800'>
                                <th className='text-center'>Serial</th>
                                <th className='text-center'>Photo</th>
                                <th className='text-center'>Name</th>
                                <th className='text-center'>Price</th>
                                <th className='text-center'>Quantity</th>
                                <th className='text-center'>Rating</th>
                                <th className='text-center'>Update</th>
                                <th className='text-center'>Delete</th>
                            </tr>
                        </thead>
                        {
                            products.map((item, index) => <AllProductTable
                                key={item._id}
                                item={item}
                                index={index}
                            ></AllProductTable>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;