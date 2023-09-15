import { Helmet } from "react-helmet-async";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>TECH TROVE</title>
            </Helmet>

            <div>
                <ProductCard />
            </div>
        </>
    );
};

export default Home;