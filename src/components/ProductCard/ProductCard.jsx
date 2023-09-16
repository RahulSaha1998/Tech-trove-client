import { useEffect, useState } from 'react';
import CardBody from './CardBody';
import useAxios from '../../hooks/useAxios';

const ProductCard = () => {
    
    const [products, setProduct] = useState([]);
    const API = useAxios();

    // Fetch products when the component mounts
    useEffect(() => {
        API.get("/products")
          .then((res) => {
            setProduct(res.data);
          })
          .catch((err) => console.error(err));
      }, []);



    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-3 lg:gap-5 p-5'>
                {
                    products.map(item => <CardBody
                        key={item._id}
                        item={item}
                    ></CardBody>)
                }
            </div>
        </div>

    );
};

export default ProductCard;