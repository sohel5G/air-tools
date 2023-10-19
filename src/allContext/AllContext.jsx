import { createContext } from "react";
import PropTypes from 'prop-types';

export const allContext = createContext(null)

const AllContext = ({children}) => {
    


    
    const allContexts = {    }
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

