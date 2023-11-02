import { useLoaderData } from "react-router-dom";
import { Rating } from "@material-tailwind/react";
import { toast } from 'react-toastify';
import { useContext } from "react";
import { allContext } from "../../allContext/AllContext";

const SingleProduct = () => {
    const product = useLoaderData();

    const { setCartItemAdded, user } = useContext(allContext);

    const userEmail = user?.email;

    const { name, brand, type, price, ratting, productImgURL, description, _id: id } = product;
    const addedProduct = { name, brand, type, price, ratting, productImgURL, description, id, userEmail }

    const handleAddToCart = userEmail => {
        fetch(`http://localhost:5000/carditems/${userEmail}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Product added to card", {
                        position: toast.POSITION.TOP_CENTER
                    });
                    setCartItemAdded(data.insertedId)
                }
            })
    }

    return (
        <div className="container px-8 mx-auto flex justify-center pt-4 pb-24">
            <div className="shadow-md rounded-sm max-w-3xl">
                <div className="flex justify-center">
                    <img className="w-3/4" src={productImgURL} alt="" />
                </div>
                <div className="p-4 py-6">
                    <h3 className="text-xl font-medium">{name}</h3>
                    <p className="py-1"> <b>Brand</b> {brand} </p>
                    <p className="py-1"> <b>Type </b> {type} </p>
                    <p className="py-1"> <b>Price </b> {price} </p>
                    <div className="py-1">
                        <Rating value={parseInt(ratting)} readonly />
                    </div>
                    <div>
                        <button onClick={() => handleAddToCart(userEmail)} className="bg-primaryColor text-white py-1 px-4 rounded-md my-3">Add to cart</button>
                    </div>
                    <p className="py-1"> <b>Description </b> {description} </p>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
