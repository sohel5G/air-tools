import { useLoaderData } from "react-router-dom";
import BrandProductCard from "./BrandProductCard";
import { Carousel, IconButton } from "@material-tailwind/react";
import brandBanner1 from "../../assets/img/brandBanner1.png"
import brandBanner2 from "../../assets/img/brandBanner2.jpg"
import brandBanner3 from "../../assets/img/brandBanner3.jpeg"

const BrandProducts = () => {
    const brandProducts = useLoaderData()

    return (
        <>
            <div>
                <div className="container mx-auto px-8 mt-8">
                    <Carousel
                        className="rounded-xl"
                        prevArrow={({ handlePrev }) => (
                            <IconButton
                                variant="text"
                                color="white"
                                size="lg"
                                onClick={handlePrev}
                                className="!absolute top-2/4 left-4 -translate-y-2/4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                    />
                                </svg>
                            </IconButton>
                        )}
                        nextArrow={({ handleNext }) => (
                            <IconButton
                                variant="text"
                                color="white"
                                size="lg"
                                onClick={handleNext}
                                className="!absolute top-2/4 !right-4 -translate-y-2/4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </IconButton>
                        )}
                    >
                        <img
                            src={brandBanner1}
                            alt="image 1"
                            className="w-full object-cover"
                        />
                        <img
                            src={brandBanner2}
                            alt="image 2"
                            className="w-full object-cover"
                        />
                        <img
                            src={brandBanner3}
                            alt="image 3"
                            className="w-full object-cover"
                        />
                    </Carousel>

                </div>
                <div className="container mx-auto px-8 py-16 pb-40">
                    {
                        brandProducts.length > 0 ?
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                                    {brandProducts.map(brandProduct => <BrandProductCard key={brandProduct._id} brandProduct={brandProduct}></BrandProductCard>)}
                                </div>
                            </> :
                            <> 
                                <div className="flex justify-center items-center h-56">
                                    <p>No products available for this brand</p>
                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    );
};

export default BrandProducts;

