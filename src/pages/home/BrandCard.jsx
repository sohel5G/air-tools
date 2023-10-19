import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {

    const { brandImgURL, brand:brandName } = brand;

    return (
        <>
            <div className="shadow-md hover:shadow-lg rounded-sm">
                <Link to={`/brand/${brandName}`}>
                    <img className="w-full" src={brandImgURL} alt="" />
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

