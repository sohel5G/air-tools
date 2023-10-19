import { useLoaderData } from "react-router-dom";
import BrandProductCard from "./BrandProductCard";


const BrandProducts = () => {
    const brandProducts = useLoaderData()

    return (
        <>
            <div>
                <div>
                    <h1 className="text-5xl text-center py-11">brand products banner here</h1>
                </div>
                <div className="container mx-auto px-8 py-16 pb-40">
                    {
                        brandProducts.length > 0 ?
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {brandProducts.map(brandProduct => <BrandProductCard key={brandProduct._id} brandProduct={brandProduct}></BrandProductCard>)}
                                </div>
                            </> :
                            <> <p>No products available for this brand</p> </>
                    }
                </div>
            </div>
        </>
    );
};

export default BrandProducts;

