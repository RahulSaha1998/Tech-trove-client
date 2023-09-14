import { FaArrowLeft, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';



const ViewDetails = () => {

    // Get data using useLoaderData hook
    const loadedProduct = useLoaderData();

    // Destructure product data
    const { price, quantity, product_name, image, rating, description } = loadedProduct;

    // Show a toast message when favorite button is clicked
    const handleFavoriteButton = () => {
        toast('Good Job!', {
            icon: '👏',
          });
    };

    return (

        <div className="card hero-content flex-col lg:flex-row w-full bg-slate-200 shadow-xl">
            <Helmet>
                <title>REPLIQ | Product Details</title>
            </Helmet>
            <img className='sm:w-full md:w-[50%] rounded-lg' src={image} />
            <div className="card-body">
                <h2 className="card-title"><span className='text-red-600 font-bold'>Product:</span>{product_name}</h2>

                <h2><span className='text-red-600 font-bold'>Available Quantity:</span> <span className='font-bold'>{quantity}</span></h2>
                <h2><span className='text-red-600 font-bold'>Price:</span> <span className='font-bold'>{'$' + price}</span></h2>
                <h2><span className='text-red-600 font-bold'>Details:</span> <span className='font-bold'>{description}</span></h2>

                <div className='flex gap-5'>
                    <h2><span className='text-red-600 font-bold'>Ratings: </span> <span className="font-bold">{rating}</span> </h2>
                    <div className='mt-1'>
                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                    <button onClick={handleFavoriteButton} className="btn btn-outline btn-error gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        Make Favourite
                    </button>
                    <Link to='/'>
                        <button className="btn btn-info gap-2"><FaArrowLeft />Back To Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;