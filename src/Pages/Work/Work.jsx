import React from 'react';
import { MdOutlineLocalShipping } from 'react-icons/md';

const cardData = [
  {
    id: 1,
    icon: <MdOutlineLocalShipping size={30}  />,
    title: "Booking Pick & Drop",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 2,
    icon: <MdOutlineLocalShipping size={30}  />,
    title: "Cash On Delivery",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 3,
    icon: <MdOutlineLocalShipping size={30} />,
    title: "Delivery Hub",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 4,
    icon: <MdOutlineLocalShipping size={30} />,
    title: "Booking SME & Corporate",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
];


const Work = () => {
    return (
   <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className='text-3xl font-bold'>How it Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start hover:shadow-xl transition-shadow"
          >
            <div className="mb-4">{card.icon}</div>
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;