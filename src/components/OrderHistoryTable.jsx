const MyCartTable = ({ item, index }) => {

    //destruct item from props
    const { _id, price, product_name, image, rating, selectedItem, status } = item;


    return (
        <>
            <tbody>
                <tr key={_id} className='font-bold'>
                    <th className="text-center">{index + 1}</th>
                    <th className="text-center"><img className="w-24 mx-auto" src={image} alt="" /></th>
                    <td className="text-center">{product_name}</td>
                    <td className="text-center">${price}</td>
                    <td className="text-center">{rating}</td>
                    <td className="text-center">{selectedItem}</td>
                    <td className='text-center'>{status}</td>
                </tr>
            </tbody>
        </>
    );
};

export default MyCartTable;