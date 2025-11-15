import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../../assets/banner/banner1.png';
import banner2 from '../../assets/banner/banner2.png';
import banner3 from '../../assets/banner/banner3.png';
import { HiArrowCircleRight } from 'react-icons/hi';

const Banner = () => {
    return (
        <Carousel autoPlay={false} 
        infiniteLoop = {true} >
            
<div className="relative">
    <img src={banner1} alt="" />

    <div className="absolute bottom-5 left-14 text-left flex items-center gap-3">
        <p className="text-black text-[16px] font-semibold drop-shadow-md bg-amber-500 px-4 py-1 rounded-2xl">
            Track Your Parcel
        </p>

        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
            Track Now
        </button>
    </div>
</div>

<div className="relative">
    <img src={banner2} alt="" />

    <div className="absolute bottom-5 left-14 text-left flex items-center gap-3">
        <p className="text-black text-[16px] font-semibold drop-shadow-md bg-amber-500 px-4 py-1 rounded-2xl">
            Track Your Parcel
        </p>

        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
            Track Now
        </button>
    </div>
</div>


<div className="relative">
    <img src={banner3} alt="" />
<div className="absolute bottom-5 left-14 text-left flex items-center ">
    <p className="text-black text-[16px] font-semibold drop-shadow-md bg-amber-500 px-4 py-1 rounded-2xl">
        Track Your Parcel
    </p>

<span className="relative -rotate-40 w-11 h-7 flex justify-center items-center text-black -ml-[6px]">
    <HiArrowCircleRight size={40} />  
</span>


    <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md ml-4">
        Be A Rider
    </button>
</div>
</div>


        </Carousel>
    );
};

export default Banner;
