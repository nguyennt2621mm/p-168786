import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-white px-[74px] py-5 max-md:p-5 max-sm:flex-col max-sm:gap-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/140bf65f43dcf1039ceef4b8c0e5c753b0df1472"
        className="w-[232px] h-[106px]"
        alt="Logo"
      />
      <nav className="flex gap-[30px] items-center max-md:hidden">
        <Link to="/" className="text-zinc-900 text-base font-bold no-underline">
          Home
        </Link>
        <Link
          to="/transaction"
          className="text-zinc-900 text-base font-bold no-underline"
        >
          Transaction
        </Link>
        <Link
          to="/offers"
          className="text-zinc-900 text-base font-bold no-underline"
        >
          Latest Offers
        </Link>
        <Link
          to="/contact"
          className="text-zinc-900 text-base font-bold no-underline"
        >
          Contact Us
        </Link>
        <div className="text-zinc-900 text-base font-bold">
          <span className="underline">ID</span>
          <span className="underline mx-[5px] my-0">|</span>
          <span className="underline">EN</span>
        </div>
      </nav>
      <button className="border-slate-900 text-slate-900 text-base font-bold cursor-pointer px-6 py-4 rounded-lg border-2 border-solid max-sm:w-full">
        Sign In
      </button>
    </header>
  );
};

export default Header;
