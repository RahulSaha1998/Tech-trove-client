import { useLoaderData, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle';
import useAxios from '../../hooks/useAxios';
import toast from 'react-hot-toast';
import UpdateProductForm from '../../components/UpdateProductForm';


const Update = () => {

    const API = useAxios();
    const navigate = useNavigate();

    // Get the loaded product data using useLoaderData
    const loadedProduct = useLoaderData()

    // Function to handle updating the product
    const handelUpdateTask = async (event) => {
        event.preventDefault();
        const form = event.target;
        const product_name = form.product_name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const description = form.description.value;


        // Construct the updatedProduct object
        const updatedProduct = {
            product_name,
            price: parseFloat(price),
            quantity: parseInt(quantity),
            rating: parseFloat(rating),
            description,
        };

        API.put(`/products/${loadedProduct._id}`, updatedProduct)
            .then(data => {
                if (data?.data?.modifiedCount > 0) {
                    toast.success("Product Updated Successfully!");
                    navigate('/allProducts')
                }
            })
    }


    return (
        <div className='h-full'>
            <Helmet>
                <title>TECH TROVE | Update Product</title>
            </Helmet>
            <div >
                <SectionTitle heading='Update Product' />
            </div>
            <div className="bg-zinc-400 rounded-lg shadow-xl mt-5 md:w-[50%] mx-auto">

                <UpdateProductForm
                    key={loadedProduct._id}
                    loadedProduct={loadedProduct}
                    handelUpdateTask={handelUpdateTask}
                ></UpdateProductForm>

            </div>
        </div>
    );
};

export default Update;