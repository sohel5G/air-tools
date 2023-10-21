import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../authConfig/authConfig";

export const allContext = createContext(null)

const AllContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Cart page API
    const [cartItems, setCartItems] = useState([])
    const [cartItemAdded, setCartItemAdded] = useState(null)
    const [handleRemoveItem, setHandleRemoveItem] = useState(null)
    // Cart page API End








    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userUpdateOnSignUp = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userSignInWithPopup = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const userLogOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                return setLoading(false);
            }
            setUser(null)
            return setLoading(false)
        });

        return () => {
            unsubscribe();
        }

    }, []);


    // card page API call
    const userId = user?.uid;
    useEffect(() => {

        fetch(`https://aircraftengineersstore-backend.vercel.app/carditems/${userId}`)
            .then(res => res.json())
            .then(loadedCartItems => setCartItems(loadedCartItems))

    }, [cartItemAdded, userId, handleRemoveItem])
    // card page API call End




    const allContexts = {
        userSignUp,
        userUpdateOnSignUp,
        userSignIn,
        userSignInWithPopup,
        user,
        loading,
        setUser,
        userLogOut,
        cartItems,
        setCartItems,
        setCartItemAdded,
        setHandleRemoveItem
    }
    return (
        <>
            <allContext.Provider value={allContexts}>
                {children}
            </allContext.Provider>
        </>
    );
};

export default AllContext;

AllContext.propTypes = {
    children: PropTypes.node
};

