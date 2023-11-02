import PropTypes from 'prop-types';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { allContext } from '../../allContext/AllContext';

const CartPageCard = ({ product, cartItems }) => {
    const { setCartItems, user, setHandleRemoveItem } = useContext(allContext);

    const userId = user?.uid;

    const handleRemoveItem = (userId, productid) => {
        fetch(`http://localhost:5000/carditems/${userId}?productid=${productid}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {
                    const remainingItem = cartItems.filter(item => item._id !== userId);
                    setCartItems(remainingItem)
                    toast.success(" Product removed from cart ", {
                        position: toast.POSITION.TOP_CENTER
                    });
                    setHandleRemoveItem(productid)
                }
            })
    }

    return (
        <>
            <div className="flex border px-3">
                <div className="text-center px-2 py-3 flex justify-center items-center">
                    <img className="w-20" src={product.productImgURL} alt="" />
                </div>
                <div className="flex-1 text-center px-2 py-3 flex justify-center items-center">
                    <h1>{product.name}</h1>
                </div>
                <div className="flex-1 text-center px-2 py-3 flex justify-center items-center">
                    <h1>{product.brand}</h1>
                </div>
                <div className="flex-1 text-center px-2 py-3 flex justify-center items-center">
                    <h1>{product.price}</h1>
                </div>
                <div className="text-center px-2 py-3 flex justify-center items-center">
                    <h1><button onClick={() => handleRemoveItem(userId, product._id)} className="py-2 px-5 rounded-full text-primaryColor">X</button></h1>
                </div>
            </div>
        </>
    )
};

export default CartPageCard;

CartPageCard.propTypes = {
    product: PropTypes.object,
    cartItems: PropTypes.array
};

