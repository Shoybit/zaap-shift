import React from "react";

const About = () => {
  return (
    <div className="min-h-screen  py-12 px-4 rounded-2xl ">
      <div className="bg-white rounded-2xl p-14 w-full h-full">

        
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-gray-600 mt-4 text-lg">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle —
          from personal packages to business shipments, we deliver on time, every time.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="max-w-4xl mx-auto flex flex-wrap  gap-4 mb-12">
        <button className="px-6 py-2  text-[#647925] font-bold text-2xl ">
          Story
        </button>
        <button className="px-6 py-2 rounded-full  text-[#00000080] font-semibold text-2xl ">
          Mission
        </button>
        <button className="px-6 py-2 rounded-full  text-[#00000080]  font-semibold text-2xl">
          Success
        </button>
        <button className="px-6 py-2 rounded-full text-[#00000080] font-semibold text-2xl ">
          Team & Others
        </button>
      </div>

    <div className="max-w-4xl mx-auto flex flex-col gap-5">
        <p className="text-[18px]">We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
        <p className="text-[18px]">We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
        <p className="text-[18px]">We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
    </div>
      </div>

    </div>
  );
};

export default About;
