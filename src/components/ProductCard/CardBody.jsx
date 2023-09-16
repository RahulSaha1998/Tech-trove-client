import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAxios from '../../hooks/useAxios';

const CardBody = ({ item }) => {


    //destructure the item from the props
    const { _id, price, quantity, product_name, image, rating, description } = item;

    const API = useAxios();

    const handelAddToCart = item => {
        console.log(item);

        // Do not proceed if the quantity is 0 or less
        if (quantity <= 0) {
            toast.error("Product is out of stock!");
            return; 
        }

        const cartItem = {
            product_name,
            price: parseFloat(price),
            quantity: parseInt(quantity),
            rating: parseFloat(rating),
            description,
            selectedItem: 1,
            p_id: _id,
            image
        }


        //post the product to the server
        API.post("/cartProducts", cartItem)
            .then((data) => {
                if (data?.data?.insertedId) {
                    toast.success("Product added to the Cart!");
                }
            })
            .catch((err) => console.log(err));

    }



    return (
        <div className="card w-full h-full bg-slate-200 shadow-xl">
            <figure><img className="rounded-xl my-5 lg:h-52" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"><span className='text-red-600 font-bold'>Product:</span>
                    {product_name}</h2>

                <h2><span className='text-red-600 font-bold'>Price:</span> <span className='font-bold'>{'$' + price}</span></h2>
                <h2><span className='text-red-600 font-bold'>Quantity:</span> <span className='font-bold'>{quantity}</span></h2>

                <div className='flex justify-between'>
                    <h2><span className='text-red-600 font-bold'>Ratings: </span> <span className="font-bold">{rating}</span> </h2>
                    <div className=''>
                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                    </div>
                </div>


                <div className="flex justify-between">
                    <button
                        onClick={() => handelAddToCart(item)}
                        className='btn btn-outline gap-2'
                    >Add to Cart
                    </button>

                    <button
                        className='btn btn-outline gap-2'
                    ><Link
                        to={`/details/${_id}`}
                    >View Details </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardBody;