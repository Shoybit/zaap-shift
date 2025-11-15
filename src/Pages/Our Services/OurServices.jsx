import React from 'react';
import logo from '../../assets/service.png';

const Services = [
  {
    id: 1,
    icon: logo,
    title: "Booking Pick & Drop",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 2,
    icon: logo,
    title: "Cash On Delivery",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 3,
    icon: logo,
    title: "Delivery Hub",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 4,
    icon: logo,
    title: "Booking SME & Corporate",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 5,
    icon: logo,
    title: "Booking SME & Corporate",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 6,
    icon: logo,
    title: "Booking SME & Corporate",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const OurServices = () => {
  return (
    <div className="p-16 bg-secondary text-center rounded-2xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2 text-white">Our Services</h1>
        <p className="text-white">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {Services.map((servic) => (
          <div
            key={servic.id}
            className="bg-white hover:bg-[#caeb66] shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
          >
            {/* Icon with background circle */}
            <div className="mb-4 w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full shadow-lg">
              <img src={servic.icon} alt={servic.title} className="w-10 h-10" />
            </div>
            <h2 className="text-xl font-bold mb-2">{servic.title}</h2>
            <p className="text-gray-600">{servic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
