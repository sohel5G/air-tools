import { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { AllContext } from '../../allContext/AllContext';

const CartWidget = () => {

    const { cartItems } = useContext(AllContext);

    let sum = 0;
    if (cartItems.length > 0){    
        cartItems.forEach(item => {
            sum += parseInt(item.price);
        });
    }

    return (
        <>
            <div className='flex justify-center items-center gap-2 px-3'>
                <div className='relative'>
                    <div className='text-xl font-medium h-7 w-9 rounded-full flex justify-center items-center'>
                        <FiShoppingCart></FiShoppingCart>
                    </div>
                    <span className='text-xs font-medium absolute -top-3 -right-2 !text-white bg-primaryColor flex justify-center items-center w-5 h-5 rounded-full'>{cartItems.length || 0 }</span>
                </div>
                <div>
                    <p className='text-base font-medium'> <span>$</span>{cartItems.length <= 0 ? '00' : sum } </p>
                </div>
            </div>
        </>
    );
};

export default CartWidget;
