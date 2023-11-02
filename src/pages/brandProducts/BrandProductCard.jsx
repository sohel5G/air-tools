import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Rating } from "@material-tailwind/react";

const BrandProductCard = ({ brandProduct }) => {

    const { name, price, ratting, productImgURL, _id } = brandProduct;

    return (
        <>
            <div className="shadow-md hover:shadow-lg rounded-sm divBorder">
                <div className="flex justify-center">
                    <Link to={`/product/${_id}`}>
                        <img className="transition-transform ease-in-out transform hover:scale-105 hover:duration-500 w-full p-4" src={productImgURL} alt="" />
                    </Link>
                </div>
                <div className="p-4 py-6">
                    <Link to={`/product/${_id}`}>
                        <h3 className="text-base font-medium hover:text-primaryColor">{name}</h3>
                    </Link>
                    <p className="py-1"> <b>Price </b><span>$</span>{price} </p>
                    <div className="py-1">  <Rating value={parseInt(ratting)} readonly /> </div>

                    <Link to={`/product/${_id}`}> <button className="bg-primaryColor text-white py-1 px-4 rounded-md my-3">View details</button> </Link>
                    <Link to={`/product/update/${_id}`}> <button className="bg-primaryColor text-white py-1 px-4 rounded-md my-3">Update</button> </Link>
                </div>
            </div>
        </>
    );
};

export default BrandProductCard;

BrandProductCard.propTypes = {
    brandProduct: PropTypes.object
};


