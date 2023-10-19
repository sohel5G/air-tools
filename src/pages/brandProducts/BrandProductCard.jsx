import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BrandProductCard = ({ brandProduct }) => {

    const { name, brand, type, price, ratting, brandImgURL, productImgURL, description, _id } = brandProduct;

    console.log(brandProduct);
    return (
        <>
            <div className="shadow-md hover:shadow-lg rounded-sm">
                <Link to={`/brand/${_id}`}>
                    <div className="flex justify-center">
                        <img className="w-3/4" src={productImgURL} alt="" />
                    </div>
                    <div className="p-4 py-6">
                        <h3 className="text-xl font-medium">{name}</h3>
                        <p> <b>Brand</b> {brand} </p>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default BrandProductCard;

BrandProductCard.propTypes = {
    brandProduct: PropTypes.object
};


