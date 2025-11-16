import livetra from '../../assets/live-tracking.png';
import  safe from '../../assets/safe-delivery.png'

const ParcelData = [
  {
    id: 1,
    icon: livetra,
    hi: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    id: 2,
    icon: safe,
    hi: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    id: 3,
    icon: safe ,
    hi: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const Parcel = () => {
  return (
    <div className="mt-20 px-10">

      <div className="flex flex-col gap-6">
        {ParcelData.map((item) => (
          <div
            key={item.id}
            className="bg-amber-50 flex items-start p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <div className="shrink-0">
              <img
                src={item.icon}
                alt="tracking"
                className="w-30 h-30"
              />
            </div>

            <div className="border-l-2 border-dotted border-gray-400 mx-4 self-stretch"></div>

            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-bold mb-2">{item.hi}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parcel;
