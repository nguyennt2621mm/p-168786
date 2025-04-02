import React, { useState } from "react";
import Counter from "../ui/Counter";

const BookingForm: React.FC = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [shippingLine, setShippingLine] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const handleSwapLocations = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      origin,
      destination,
      departureDate,
      shippingLine,
      adults,
      children,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute w-[688px] mix-blend-hard-light bg-slate-900 p-[30px] rounded-[7px] left-[141px] top-[100px] max-md:w-[calc(100%_-_40px)] max-md:left-5 max-sm:p-5"
    >
      <div className="text-white text-[32px] font-bold mb-5">
        <span>Find Your Trip</span>
        <div className="text-xs font-normal">
          Set Your Arrival and Departure Schedule at the Port
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label htmlFor="origin" className="text-white text-base font-normal">
            Travel Destination
          </label>
          <div className="flex items-center border bg-white p-3 rounded-lg border-solid border-[#e3e5e5]">
            <i className="ti ti-map-pin text-[#090a0a] text-2xl mr-3" />
            <input
              id="origin"
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="Enter Origin City/Port"
              className="w-full text-base text-[#72777a] border-[none]"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center border bg-white p-3 rounded-lg border-solid border-[#e3e5e5] flex-1">
            <i className="ti ti-map-pin text-[#090a0a] text-2xl mr-3" />
            <input
              id="destination"
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter Destination City/Port"
              className="w-full text-base text-[#72777a] border-[none]"
            />
          </div>
          <button
            type="button"
            onClick={handleSwapLocations}
            className="cursor-pointer"
            aria-label="Swap origin and destination"
          >
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=&quot;49:1802&quot; layer-name=&quot;Switch&quot; width=&quot;30&quot; height=&quot;28&quot; viewBox=&quot;0 0 30 28&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;> <rect width=&quot;27.7515&quot; height=&quot;28.9716&quot; rx=&quot;13.8758&quot; transform=&quot;matrix(0.00889493 0.99996 -0.999963 0.00861423 28.9706 -1.52588e-05)&quot; fill=&quot;#C8FF53&quot;></rect> <path d=&quot;M19.53 6.08946L19.5259 8.20081L9.10779 8.42447C7.9618 8.44907 7.02235 9.4193 7.02013 10.5805L7.0161 12.6919L9.09973 12.6472L9.10376 10.5358L19.5219 10.3122L19.5179 12.4235L23.6912 9.16702L19.53 6.08946ZM11.1793 14.7138L7.00602 17.9703L11.1672 21.0478L11.1713 18.9365L21.5894 18.7128C22.7354 18.6882 23.6748 17.718 23.677 16.5567L23.6811 14.4454L21.5974 14.4901L21.5934 16.6015L11.1753 16.8251L11.1793 14.7138Z&quot; fill=&quot;#0F172A&quot;></path> </svg>",
              }}
            />
          </button>
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="departureDate"
              className="text-white text-base font-normal"
            >
              Departure Date
            </label>
            <div className="flex items-center border bg-white p-3 rounded-lg border-solid border-[#e3e5e5]">
              <i className="ti ti-calendar text-[#090a0a] text-2xl mr-3" />
              <input
                id="departureDate"
                type="text"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                placeholder="Select Date"
                className="w-full text-base text-[#72777a] border-[none]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <label
              htmlFor="shippingLine"
              className="text-white text-base font-normal"
            >
              Select Shipping Lines
            </label>
            <div className="flex items-center border bg-white p-3 rounded-lg border-solid border-[#e3e5e5]">
              <input
                id="shippingLine"
                type="text"
                value={shippingLine}
                onChange={(e) => setShippingLine(e.target.value)}
                placeholder="Blue Star Ferries"
                className="w-full text-base text-[#72777a] border-[none]"
              />
              <i className="ti ti-chevron-down text-[#090a0a] text-2xl mr-3" />
            </div>
          </div>
        </div>
        <div className="flex gap-10 max-sm:flex-col max-sm:gap-5">
          <Counter
            label="Adults"
            subLabel="Ages 6 and over"
            icon={<i className="ti ti-users" />}
            onChange={setAdults}
          />
          <Counter
            label="Children"
            subLabel="2-5 years old"
            icon={<i className="ti ti-user" />}
            onChange={setChildren}
          />
        </div>
        <div className="flex gap-5 mt-5 max-sm:flex-col">
          <button
            type="submit"
            className="text-slate-900 text-base font-medium cursor-pointer bg-[#c8ff53] px-8 py-4 rounded-[48px] border-[none]"
          >
            Find Your Ticket
          </button>
          <button
            type="button"
            className="border text-white text-base font-medium cursor-pointer px-8 py-4 rounded-[48px] border-solid border-[#c8ff53]"
          >
            Manage My Bookings
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
