import React from "react";
import OfferCard from "./OfferCard";

const LatestOffers: React.FC = () => {
  const offers = [
    {
      id: 1,
      image: "https://placehold.co/425x317/193354/193354",
      title: "Greek Island: 30% OFF the return of Golden Star Ferries",
      altText: "Greek Island",
    },
    {
      id: 2,
      image: "https://placehold.co/472x354/193354/193354",
      title: "Up to 25% OFF with Golden Queen Fast Boat",
      altText: "Golden Queen",
    },
    {
      id: 3,
      image: "https://placehold.co/472x354/193354/193354",
      title: "Baltic Sea: up to 40% OFF with Tallink Silja",
      altText: "Baltic Sea",
    },
    {
      id: 4,
      image: "https://placehold.co/472x354/193354/193354",
      title: "High Season: up to 30% OFF sailing",
      altText: "High Season",
    },
  ];

  return (
    <section className="bg-white px-[60px] py-[50px]">
      <div className="flex justify-between items-center mb-[30px]">
        <h2 className="text-[#193354] text-[40px] font-bold">Latest Offers</h2>
        <button className="text-slate-900 text-xl font-semibold cursor-pointer bg-[#e9e9f1] px-6 py-3 rounded-3xl border-[none]">
          View All Special Offers
        </button>
      </div>
      <div className="grid grid-cols-[repeat(4,1fr)] gap-6 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            image={offer.image}
            title={offer.title}
            altText={offer.altText}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestOffers;
