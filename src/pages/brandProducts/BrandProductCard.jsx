import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Rating } from "@material-tailwind/react";

const BrandProductCard = ({ brandProduct }) => {

    const { name, brand, type, price, ratting, productImgURL, _id } = brandProduct;

    return (
        <>
            <div className="shadow-md hover:shadow-lg rounded-sm divBorder">
                    <div className="flex justify-center">
                        <img className="w-full p-4" src={productImgURL} alt="" />
                    </div>
                    <div className="p-4 py-6">
                        <Link to={`/product/${_id}`}> 
                            <h3 className="text-xl font-medium hover:text-primaryColor">{name}</h3> 
                        </Link>
                        <p className="py-1"> <b>Brand</b> {brand} </p>
                        <p className="py-1"> <b>Type </b> {type} </p>
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


