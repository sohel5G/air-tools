import { useLoaderData } from "react-router-dom";
import BrandProductCard from "../brandProducts/BrandProductCard";

const Products = () => {

    const products = useLoaderData()

    return (
        <>
            <div>
                <div>
                    <h1 className="text-5xl text-center py-11"> All Products  </h1>
                </div>
                <div className="container mx-auto px-8 py-16 pb-40">
                    {
                        products.length > 0 ?
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {products.map(brandProduct => <BrandProductCard key={brandProduct._id} brandProduct={brandProduct}></BrandProductCard>)}
                                </div>
                            </> :
                            <>
                                <div className="flex justify-center items-center h-56">
                                    <p> No products found </p>
                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    );
};

export default Products;