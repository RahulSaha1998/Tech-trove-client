import errorPage from '../../public/errorPage.json'
import Lottie from "lottie-react";
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-96'>
                <Lottie animationData={errorPage}></Lottie>
                <div className='flex flex-col gap-5 items-center'>
                    <h2 className='text-center font-bold text-yellow-600 text-3xl'>Page Not Found!!</h2>
                    <div>
                        <Link to='/'><button className='btn btn-outline gap-2'><FaArrowLeft /> Bact To Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;