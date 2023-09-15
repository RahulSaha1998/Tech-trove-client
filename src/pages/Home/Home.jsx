import { Helmet } from "react-helmet-async";
import ProductCard from "../../components/ProductCard/ProductCard";
import CustomerReview from "../../components/CustomerReview";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>TECH TROVE</title>
            </Helmet>
            <div>
                <ProductCard />
            </div>
            <div>
                <CustomerReview />
            </div>
        </>
    );
};

export default Home;