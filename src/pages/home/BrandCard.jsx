import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {

    const { brandImgURL, brand:brandName } = brand;

    return (
        <>
            <div className="shadow-md hover:shadow-lg rounded-sm p-4 divBorder">
                <Link to={`/brand/${brandName}`}>
                    <img className="w-full transition-transform ease-in-out transform hover:scale-105 hover:duration-500" src={brandImgURL} alt="" />
                    <div>
                        <h3 className="text-center text-xl font-medium p-4 py-6">{brandName}</h3>
                    </div>
                </Link>
            </div>  
        </>
    );
};

export default BrandCard;

BrandCard.propTypes = {
    brand: PropTypes.object
};

