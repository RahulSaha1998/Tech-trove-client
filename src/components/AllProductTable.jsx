import { Link } from "react-router-dom";

const AllProductTable = ({ item, index }) => {

    const { _id, price, quantity, product_name, image, rating } = item;

    return (
        <>
            <tbody>
                <tr className='font-bold'>
                    <th className="text-center">{index + 1}</th>
                    <th className="text-center"><img className="w-24 mx-auto" src={image} alt="" /></th>
                    <td className="text-center">{product_name}</td>
                    <td className="text-center">${price}</td>
                    <td className="text-center">{quantity}</td>
                    <td className="text-center">{rating}</td>
                    <td className='text-center'><Link to={`/dashboard/updateProduct/${_id}`}>
                        <button className='btn btn-info'>Update</button>
                    </Link></td>
                    <td className='text-center'><button onClick={() => handleDelete(product._id)} className='btn btn-error'>Delete</button></td>
                </tr>
            </tbody>
        </>
    );
};

export default AllProductTable;