import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../authConfig/authConfig";
import axios from "axios";

export const AllContext = createContext(null)

const AllProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Cart page API States
    const [cartItems, setCartItems] = useState([])
    const [cartItemAdded, setCartItemAdded] = useState(null)
    const [handleRemoveItem, setHandleRemoveItem] = useState(null)
    // Cart page API States End






    const userSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userUpdateOnSignUp = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo)
    }
    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userSignInWithPopup = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const userLogOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('Current User Email', currentUser?.email)

            const userEmail = currentUser?.email || user?.email;
            // set a token for this user 
            if (currentUser) {
                axios.post('https://air-tools-server.vercel.app/jwt', { email: userEmail }, { withCredentials: true })
                    .then(res => {
                        console.log('Token set : ', res.data)
                    })
            }// set a token for this user end
            //remove token if user logout
            else {
                axios.post('https://air-tools-server.vercel.app/logout', { email: userEmail }, { withCredentials: true })
                    .then(res => {
                        console.log('Token removed', res.data)
                    })
            }//remove token if user logout end
        });

        return () => {
            unsubscribe();
        }

    }, []);



    // card page API call
    const userEmail = user?.email;
    useEffect(() => {

        if (userEmail) {
            fetch(`https://air-tools-server.vercel.app/carditems/${userEmail}`, { credentials: 'include' })
                .then(res => res.json())
                .then(loadedCartItems => setCartItems(loadedCartItems))
        }

    }, [cartItemAdded, handleRemoveItem, userEmail])
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
            <AllContext.Provider value={allContexts}>
                {children}
            </AllContext.Provider>
        </>
    );
};

export default AllProvider;

AllProvider.propTypes = {
    children: PropTypes.node
};

