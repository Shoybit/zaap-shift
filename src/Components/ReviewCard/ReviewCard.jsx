import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  const { review:testimonial,userName,user_photoURL } = review;

  return (
  <div className="card bg-base-100 shadow-md p-6 max-w-md">
      <div className="flex flex-col gap-4">
        
        {/* Quote Icon */}
        <div className="text-primary text-3xl">“</div>

        {/* Main Text */}
        <p className="text-gray-600">
          {testimonial}
        </p>

        {/* Divider */}
        <div className="border-t border-dashed my-2"></div>

        {/* Bottom section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-700 rounded-full">
            <img src={user_photoURL} alt="" />
          </div>

          <div>
            <h3 className="font-semibold text-teal-800">{userName}</h3>
            <p className="text-sm text-gray-500">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
