import { Link } from "react-router-dom";


const MyCartTable = ({ item, index, handleDelete }) => {

    const { _id, price, quantity, product_name, image, rating } = item;


    return (
        <>
            <tbody>
                <tr key={_id} className='font-bold'>
                    <th className="text-center">{index + 1}</th>
                    <th className="text-center"><img className="w-24 mx-auto" src={image} alt="" /></th>
                    <td className="text-center">{product_name}</td>
                    <td className="text-center">${price}</td>
                    <td className="text-center">{quantity}</td>
                    <td className="text-center">{rating}</td>
                    <td className='text-center'>
                        <Link to={`/cart/checkout/${_id}`} >
                            <button className='btn btn-outline'>Pay</button>
                        </Link>
                    </td>
                    <td className='text-center'><button onClick={() => handleDelete(_id)} className='btn btn-error'>Delete</button></td>
                </tr>
            </tbody>
        </>
    );
};

export default MyCartTable;