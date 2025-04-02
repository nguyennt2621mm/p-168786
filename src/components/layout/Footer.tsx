import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-[#193354] bg-white p-[50px]">
      <div className="grid grid-cols-[repeat(3,1fr)] gap-[50px] mb-[30px] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        <div>
          <h3 className="text-[25px] font-semibold mb-5">
            PT SEAVENTURES (Persero) HQ
          </h3>
          <p className="text-xl font-semibold leading-normal">
            <span>Jl. Gajah Mada No. 14,Jakarta Pusat,</span>
            <br />
            <span>10130DKI Jakarta, Indonesia</span>
          </p>
        </div>
        <div>
          <h3 className="text-[25px] font-semibold mb-5">
            PT SEAVENTURES (Persero) HQ
          </h3>
          <p className="text-xl font-semibold leading-normal">
            <span>T. 162 (Jabodetabek)</span>
            <br />
            <span>F. +62 21 6385 4130</span>
            <br />
            <span>E. infosea162@seaventures.co.id</span>
          </p>
        </div>
        <div>
          <h3 className="text-[25px] font-semibold mb-5">Media Sosial</h3>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-[#193354] hover:opacity-80 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-[#193354] hover:opacity-80 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-[#193354] hover:opacity-80 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-[#193354] hover:opacity-80 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xl text-[#193354]">
        2018-2023 PT. Seaventures Indonesia. All Rights Reserved
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/140bf65f43dcf1039ceef4b8c0e5c753b0df1472"
        className="w-[232px] h-[106px] block mx-auto my-5"
        alt="Logo"
      />
    </footer>
  );
};

export default Footer;
