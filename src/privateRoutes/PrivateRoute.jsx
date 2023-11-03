import { useContext } from "react";
import { AllContext } from "../allContext/AllContext";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AllContext);

    if (loading) {
        return <p className="text-8xl text-center py-32">Loading...</p>
    }

    return (
        <>
            {
                user ? children : <Navigate to={'/login'}></Navigate>
            }
        </>
    )

};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}

