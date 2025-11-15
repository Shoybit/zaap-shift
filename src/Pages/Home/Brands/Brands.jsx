import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import amazon from '../../../assets/brands/amazon.png'
import vector from '../../../assets/brands/amazon_vector.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import starpeople from '../../../assets/brands/star-people.png'
import { Autoplay } from 'swiper/modules';

const brandlogos = [amazon,vector,casio,moonstar,randstad,star,starpeople]

const Brands = () => {
    return (
        <Swiper 
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        loop={true}
                autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        >
            {
                brandlogos.map((logo,index) => <SwiperSlide key={index}> 
                    <img src={logo} alt="" />
                </SwiperSlide>)
            }
        
        </Swiper>
    );
};

export default Brands;