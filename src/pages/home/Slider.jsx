import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../../assets/img/banner1.jpg";
import banner2 from "../../assets/img/banner2.jpg";
import banner3 from "../../assets/img/banner3.jpg";


const Slider = () => {


    return (
        <>
            <Carousel showThumbs={false} useKeyboardArrows={true} showStatus={false} emulateTouch={true} autoPlay={false} infiniteLoop={true} className='homePageSlider'>
                <div>
                    <img src={banner1} alt="" />
                    <h2 className='legend !text-xl md:!text-3xl !text-white !opacity-100 !bg-[#0000004f] !bottom-1/4 md:!bottom-2/4'>High-Quality Tools for Aviation Professionals</h2>  
                </div>
                <div>
                    <img src={banner2} alt="" />
                    <h2 className='legend !text-xl md:!text-3xl !text-white !opacity-100 !bg-[#0000004f] !bottom-1/4 md:!bottom-2/4'>Elevate Your Work with Precision Engineering Tools</h2>  
                </div>
                <div>
                    <img src={banner3} alt="" />
                    <h2 className='legend !text-xl md:!text-3xl !text-white !opacity-100 !bg-[#0000004f] !bottom-1/4 md:!bottom-2/4'>Your One-Stop Shop for Aircraft Maintenance Tools</h2>  
                </div>
            </Carousel>
        </>
    );
};

export default Slider;