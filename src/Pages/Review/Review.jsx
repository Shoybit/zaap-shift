import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from '../../Components/ReviewCard/ReviewCard';

const Review = ({reviewPromise}) => {
    const reviews = use(reviewPromise)
    console.log(reviews);
    return (
    <>
      <Swiper
        loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
          
        }}
         autoplay={{
          delay: 2000,
          disableOnInteraction: false,}}

        pagination={true}
        modules={[EffectCoverflow, Pagination , Autoplay]}
        className="mySwiper"
      >
        {
            reviews.map(review =>  <SwiperSlide key={review.id}>
          <ReviewCard review={review}></ReviewCard>
        </SwiperSlide>)
        }
      </Swiper>
    </>
    );
};

export default Review;