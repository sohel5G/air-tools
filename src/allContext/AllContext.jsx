import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../authConfig/authConfig";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const allContext = createContext(null)

const AllContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const axiosSecure = useAxiosSecure()

    // Cart page API States
    const [cartItems, setCartItems] = useState([])
    const [cartItemAdded, setCartItemAdded] = useState(null)
    const [handleRemoveItem, setHandleRemoveItem] = useState(null)
    // Cart page API States End






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
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('Current User Email', currentUser?.email)

            const userEmail = currentUser?.email || user?.email;
            // set a token for this user 
            if (currentUser) {
                axiosSecure.post('/jwt', { email: userEmail })
                    .then(res => {
                        console.log('Token set : ', res.data)
                    })
            }// set a token for this user end
            //remove token if user logout
            else {
                axiosSecure.post('/logout', { email: userEmail })
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

        // fetch(`http://localhost:5000/carditems/${userEmail}`, { credentials: 'include' })
        //     .then(res => res.json())
        //     .then(loadedCartItems => setCartItems(loadedCartItems))

        axiosSecure.get(`/carditems/${userEmail}`)
            .then(res => {
                setCartItems(res.data)
            })

    }, [cartItemAdded, handleRemoveItem, userEmail, axiosSecure])
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

