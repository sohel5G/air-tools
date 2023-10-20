import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import BrandCard from "./BrandCard";
import one from "../../assets/img/1.jpg";
import two from "../../assets/img/2.jpg";
import three from "../../assets/img/3.jpg";
import four from "../../assets/img/4.jpg";
// import Slider_old_file from "./Slider_old_file";

const Home = () => {

    const brands = useLoaderData()

    return (
        <>
            <section>
                <Slider></Slider>
            </section>
            {/* <section>
                <Slider_old_file></Slider_old_file>
            </section> */}
            <section>
                <div className="container mx-auto px-8 py-14">
                    <h1 className="text-3xl text-center font-semibold py-12 titleColor">Our Brand</h1>
                    <div>
                        {
                            brands.length > 0 ?
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)}
                                    </div>
                                </> :
                                <> <p>No Brand available</p> </>
                        }
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto px-8 pb-24">
                    <h1 className="text-3xl text-center font-semibold py-12 titleColor">Tooling Catalogues</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-2 shadow-sm hover:shadow-md pb-4 divBorder">
                            <a href="#"> <img className="w-full" src={one} alt="" /> </a>
                            <h2 className="text-xl font-semibold py-3 text-center">Sioux Air Tools</h2>
                            <p className="text-center"> Aviation Air Drills </p>
                        </div>
                        <div className="p-2 shadow-sm hover:shadow-md pb-4 divBorder">
                            <a href="#"> <img className="w-full" src={two} alt="" /> </a>
                            <h2 className="text-xl font-semibold py-3 text-center">Williams Tools</h2>
                            <p className="text-center"> Quality Hand Tools and Storage Solutions</p>
                        </div>
                        <div className="p-2 shadow-sm hover:shadow-md pb-4 divBorder">
                            <a href="#"> <img className="w-full" src={three} alt="" /> </a>
                            <h2 className="text-xl font-semibold py-3 text-center">Air Tools</h2>
                            <p className="text-center">Chicago Pneumatic Industrial Tools</p>
                        </div>
                        <div className="p-2 shadow-sm hover:shadow-md pb-4 divBorder">
                            <a href="#"> <img className="w-full" src={four} alt="" /> </a>
                            <h2 className="text-xl font-semibold py-3 text-center">Macnaught</h2>
                            <p className="text-center">Aerospace Grease and Lubrication Equipment</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="frontPageBottomBg bg-center bg-no-repeat bg-cover">
                    <div className=" pb-32">
                        <div className=" container mx-auto px-8 flex-1 flex justify-center max-w-2xl">
                            <div className="text-center">
                                <h1 className="text-4xl font-medium text-white"> SIGN UP FOR NEWSLETTER </h1>
                                <p className="text-lg py-7 text-white"> Signup for our newsletter to get notified about sales and new products. </p>
                                <form >
                                    <div>
                                        <input className="border w-full py-2 px-4 rounded-md text-center" type="text" placeholder="Enter your email address" />
                                    </div>
                                    <div>
                                        <input className="bg-primaryColor !text-white font-medium py-2 px-5 rounded text-sm cursor-pointer mt-5" type="submit" value="Subscribe" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;

