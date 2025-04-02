import React from "react";
import BookingForm from "./BookingForm";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[678px] bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/f33081e1830869bd2aafdd4bfba141ad4d9dbf65')] bg-cover bg-center">
      <BookingForm />
      <div className="absolute w-[364px] h-[472px] border flex items-center bg-[rgba(19,31,58,0.76)] p-[30px] rounded-[7px] border-solid border-[rgba(200,255,83,0.27)] right-[141px] top-[100px] max-md:relative max-md:w-full max-md:mt-5 max-md:right-0">
        <div className="text-white">
          <h2 className="text-[32px] mb-5">EARN MORE</h2>
          <h1 className="text-[40px] mb-5">
            MileagePlus® Cardmembers : sign in to earn up to 45,000 miles
          </h1>
          <a href="#" className="text-white text-2xl no-underline">
            Learn more &gt;
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
