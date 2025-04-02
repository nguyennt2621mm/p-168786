import React from "react";

interface OfferCardProps {
  image: string;
  title: string;
  altText: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ image, title, altText }) => {
  return (
    <div className="relative overflow-hidden rounded-[14px]">
      <img src={image} className="w-full h-auto" alt={altText} />
      <div className="absolute text-white bg-[#193354] p-5 bottom-0 inset-x-0">
        <div className="flex items-center gap-2.5 text-xl font-semibold mb-2.5">
          <i className="ti ti-tag" />
          <span>Offers and Promotions</span>
        </div>
        <h3 className="text-2xl font-semibold m-0">{title}</h3>
      </div>
    </div>
  );
};

export default OfferCard;
