import { useContext } from "react";
import { allContext } from "../allContext/AllContext";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PrivateRouteLogin = ({ children }) => {
    const { user, loading } = useContext(allContext);

    if (loading) {
        return ' '
    }

    return (
        <>
            {
                !user ? children : <Navigate to={'/'}></Navigate>
            }
        </>
    )

};

export default PrivateRouteLogin;

PrivateRouteLogin.propTypes = {
    children: PropTypes.node
}

