import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import BrandCard from "./BrandCard";


const Home = () => {

    const brands = useLoaderData()

    console.log(brands)

    return (
        <>
            <section>
                <Slider></Slider>
            </section>
            <section>
                <div className="container mx-auto px-8 pb-24">
                    <h1 className="text-5xl text-center font-semibold py-12">Our brand</h1>
                    <div>
                        {
                            brands ? 
                            <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)}
                            </div>
                            </> :
                            <> <p>No products available</p> </>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;

