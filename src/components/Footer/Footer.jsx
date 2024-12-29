import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="w-full p-20 bg-[#2A2A2A] text-white">
        <div className="w-full px-3 mx-auto flex flex-col md:flex-row mb-20">
          <div className="w-full md:w-2/5">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <h1 className="text-2xl ml-4">
                  VERY BODY TELLS A STORY. <span className="text-[#256BFE]">LET YOURS BE KNOWN WELL.</span>
                </h1>
              </div>
              <p className="text-xl text-[#6E6E73] mt-4 w-full md:max-w-[90%] xl:max-w-[78%] ml-4">
                We promise to provide comprehensive, patient-centered, and expert-led care, in which you and your whole body are treated compassionately.
              </p>
              <div className="flex flex-row mt-8">
                <div className=" flex items-center w-1/2">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Join our mailing list"
                      className="w-full p-2 bg-[#D9D9D9] text-white placeholder-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l-xl"
                    />
                  </div>
                  <button className="bg-[#256BFE] text-white py-2 px-6 rounded-r-xl">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/5 flex flex-col mt-8 md:mt-0">
            <span className="font-bold uppercase mb-3 text-white text-3xl">FOLLOW US</span>
            <ul className="flex flex-row md:flex-col">
              <li className="mb-2">
                <a href="#" className="text-2xl text-[#6E6E73]">
                  Facebook
                </a>
                <span className="text-sm md:hidden lg:hidden"> &#124; </span>
              </li>
              <li className="mb-2">
                <a href="#" className="text-xl text-[#6E6E73]">
                  Linkedin
                </a>
                <span className="text-sm md:hidden lg:hidden"> &#124; </span>
              </li>
              <li className="mb-2">
                <a href="#" className="text-xl text-[#6E6E73]">
                  Instagram
                </a>
                <span className="text-sm md:hidden lg:hidden"> &#124; </span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 flex flex-col mt-4 md:mt-0">
            <span className="font-bold uppercase mb-3 text-white text-3xl">COMPANY</span>
            <ul className="flex flex-row md:flex-col">
              <li className="mb-2">
                <a href="#" className="text-xl text-[#6E6E73]">
                  Privacy Policy
                </a>
                <span className="text-sm md:hidden lg:hidden"> &#124; </span>
              </li>
              <li className="mb-2">
                <a href="#" className="text-xl text-[#6E6E73]">
                  Terms & Conditions
                </a>
                <span className="text-sm md:hidden lg:hidden"> &#124; </span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 flex flex-col mt-4 md:mt-0">
            <span className="font-bold uppercase mb-3 text-white text-3xl">CONTACT US</span>
            <ul className="flex flex-row md:flex-col">
              <li className="mb-2">
                <a href="#" className="text-xl text-[#6E6E73]">
                  Email: info@knownwell.health
                </a>
                <span className="text-sm md:hidden lg:hidden"> &#124; </span>
              </li>
              <li className="mb-2">
                <a href="#" className="text-xl text-[#6E6E73]">
                  Phone: 339-793-8998
                </a>
                <span className="text-sm md:hidden lg:hidden"> &#124; </span>
              </li>
              <br />
              <li className="mb-2">
                <a href="#" className="text-xl text-[#6E6E73]">
                  Fax: 833-464-5350
                </a>
                <span className="text-sm md:hidden lg:hidden"> &#124; </span>
              </li>
              <li className="mb-2">
                <a href="#" className="text-xl text-[#6E6E73]">
                  Visit Us: 15 Oak St 2nd floor,
                </a>
                <span className="text-sm md:hidden lg:hidden"> &#124; </span>
              </li>
              <li className="mb-2">
                <a href="#" className="text-xl text-[#6E6E73]">
                  Needham, MA 02492
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="w-full px-4 md:px-0 md:w-3/4 mx-auto text-sm flex flex-col md:flex-row">
  <div className="w-full text-gray-500 mt-3 md:mt-5 text-center">
    &copy; 2024 Contoso.com &#183; All rights reserved.<br />
  </div>
   <div className="flex justify-center mt-3 md:justify-end space-x-4">
      <a href="#" className="text-gray-500 hover:text-gray-300">
      Terms of use
      </a>
     
      <a href="#" className="text-gray-500 hover:text-gray-300">
        Privacy Policy
      </a>
    </div>
</div>

      </footer>
    </div>
  );
};

export default Footer;
