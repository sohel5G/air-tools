import { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { allContext } from '../../allContext/AllContext';

const CartWidget = () => {

    const { cartItems } = useContext(allContext);

    return (
        <>
            <div className='flex justify-center items-center gap-2 px-3'>
                <div className='relative'>
                    <div className='text-xl font-medium h-7 w-9 rounded-full flex justify-center items-center'>
                        <FiShoppingCart></FiShoppingCart>
                    </div>
                    <span className='text-lg font-medium absolute -top-4 right-0 text-primaryColor'>{cartItems.length}</span>
                </div>
                <div>
                    <p className='text-base font-medium'> <span>$</span>230</p>
                </div>
            </div>
        </>
    );
};

export default CartWidget;
