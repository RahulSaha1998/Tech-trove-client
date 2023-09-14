import { Toaster } from "react-hot-toast";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home = () => {
    return (
        <div>
            <ProductCard/>
            <Toaster />
        </div>
    );
};

export default Home;