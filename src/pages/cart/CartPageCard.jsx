import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const CartPageCard = ({ product, setCartItems, cartItems }) => {

    const handleRemoveItem = id => {
        fetch(`http://localhost:5000/carditems/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.deletedCount > 0) {
                    const remainingItem = cartItems.filter(item => item._id !== id);
                    setCartItems(remainingItem)
                    toast.success(" Product removed from cart ", {
                        position: toast.POSITION.TOP_CENTER
                    });
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
                    <h1><button onClick={() => handleRemoveItem(product._id)} className="py-2 px-5 rounded-full text-primaryColor">X</button></h1>
                </div>
           </div>
        </>
    )
};

export default CartPageCard;

CartPageCard.propTypes = {
    product: PropTypes.object,
    setCartItems: PropTypes.func,
    cartItems: PropTypes.array
};

