import { Link, useLoaderData } from "react-router-dom";
import CartPageCard from "./cartPageCard";
import { useState } from "react";


const CartPage = () => {
    const loadedCartItems = useLoaderData()
    const [cartItems, setCartItems] = useState(loadedCartItems)

    return (
        <>
            <div>
                <h1 className="text-4xl text-center py-12">Total Cart Item {cartItems.length}</h1>
            </div>

            <div className="container px-8 mx-auto pb-28">
                <div className="flex border px-3">
                    <div className="text-center px-2 py-3 flex justify-center items-center">
                        <h1 className="font-semibold"> Image </h1>
                    </div>
                    <div className="flex-1 text-center px-2 py-3 flex justify-center items-center">
                        <h1 className="font-semibold"> Product name </h1>
                    </div>
                    <div className="flex-1 text-center px-2 py-3 flex justify-center items-center">
                        <h1 className="font-semibold"> Brand </h1>
                    </div>
                    <div className="flex-1 text-center px-2 py-3 flex justify-center items-center">
                        <h1 className="font-semibold"> Price </h1>
                    </div>
                    <div className="text-center px-2 py-3 flex justify-center items-center">
                        <h1 className="font-semibold"> Remove </h1>
                    </div>
                </div>
                <div>
                    {
                        cartItems.length > 0 ? 
                        <>
                            {
                                cartItems.map(product => <CartPageCard key={product._id} product={product} setCartItems={setCartItems} cartItems={cartItems}></CartPageCard>)
                            }
                        </> :
                        <>
                            <div className="flex justify-center items-center h-44 text-center">
                                <div>
                                    <h1 className="py-7 text-3xl"> Your cart is empty  </h1>
                                    <Link to={'/'}> <button className="py-2 px-4 bg-primaryColor text-white rounded-md"> Continue Shopping </button> </Link>
                                </div>
                            </div>
                        </>
                    }
                </div>
           </div>

        </>
    );
};

export default CartPage;