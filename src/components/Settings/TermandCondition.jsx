

import React from 'react'
import { IoArrowBack } from 'react-icons/io5'; // Importing the back arrow icon from react-icons
import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";
import c7 from "../../assets/c7.png";
const TermandCondition = () => {
  const navigate = useNavigate();
     const handleBackClick = () => {
         navigate(-1);
     };
   const cardData = [
         {
             id: 1,
             image: c1,
             imageFirst: true,
             text: (
                 <>
                 <h1 className="text-3xl font-bold mb-10 text-black">1. Acceptance of Terms</h1>
                   By accessing or using the EyeCare website, mobile application, or services (hereinafter referred to as "the Service"), you agree to comply with and be bound by these Terms and Conditions.
                    </>
             ),
         },
         {
             id: 2,
             image: c2,
             imageFirst: false,
             text: (
                 <>
                  <h1 className="text-3xl font-bold mb-10 text-black">2. Privacy Policy:</h1>
                  Our Privacy Policy, available separately on our app &website, outlines how we collect, use, and protect your  personal information. By using our services, you consent to the practices described in the Privacy Policy.
                   </>
             ),
         },
         {
             id: 3,
             image: c3,
             imageFirst: true,
             text: (
                 <>
                 <h1 className="text-3xl font-bold mb-10 text-black">3. Order Placement:</h1>
                    All orders placed through the EyeCare platform are subject to acceptance and availability. EyeCare reserves the right to refuse, cancel, or limit any order without liability. You agree to provide accurate and complete information when placing an order.
                      </>
             ),
         },
         {
             id: 4,
             image: c4,
             imageFirst: false,
             text: (
                 <>
                 <h1 className="text-3xl font-bold mb-10 text-black">4. Pricing and Payments:</h1>
                  Prices for eyewear products and services are subject to change without notice. Payment is required at the time of purchase. We accept various payment methods, which are specified on our platform. Any additional fees, such as taxes or shipping charges, will be clearly indicated during the checkout process..
                   </>
             ),
         },
         {
             id: 5,
             image: c5,
             imageFirst: true,
             text: (
                 <>
                 <h1 className="text-3xl font-bold mb-10 text-black">5. Shipping and Delivery: </h1>
                    We make every effort to ensure prompt delivery; however, delivery times may vary based on location, product availability, and other factors. Risk of loss and title for items purchased pass to you upon delivery to the carrier.
                    </>
             ),
         },
         {
             id: 6,
             image: c6,
             imageFirst: false,
             text: (
                 <>
                 <h1 className="text-3xl font-bold mb-10 text-black">6. Returns and Exchanges: </h1>
                  Please refer to our Returns and Exchanges Policy, available on our website, for information on returns, exchanges, and warranty claims.
                   </>
             ),
         },
         {
            id: 7,
            image: c7,
            imageFirst: true,
            text: (
                <>
                <h1 className="text-3xl font-bold mb-10 text-black">7. Intellectual Property:</h1>
                 All content and materials on the EyeCare platform, including but not limited to logos, text, graphics, images, and software, are protected by intellectual property laws and are the property of EyeCare or its licensors.
                  </>
            ),
        },
     ];
 
     return (
         <div className=''>
         
             <div className="w-full h-full bg-white">
                 <div className="flex items-center pb-4 pt-8 ">
                     <IoArrowBack
                         className="text-black cursor-pointer text-2xl"
                         onClick={handleBackClick}
                     />
                     <h1 className="w-full mt-10 mx-auto lg:text-5xl md:text-3xl xs:text-2xl text-center font-serif font-semibold text-black ml-4">
                     Connecting You with Technology
                     </h1>
                 </div>
 
                   <div className="justify-center mt-10 mb-20">
                                 <div className="relative   md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-6 max-w-xs md:max-w-6xl mx-auto border border-white bg-bg-white">
                                     
                                     <div className="w-full  flex flex-col space-y-2 p- text-[#263238] ">
                                         <h3 className="font-bold text-3xl">Terms and Conditions Applied</h3>
                                         <p className="text-2xl ">
                                         At infonexus, we're all about fueling your tech obsession, offering a vibrant space to connect with the latest innovations and passionate enthusiasts. By accessing and using our platform, you agree to abide by these Terms and Conditions. So, grab your digital compass and let's explore!
                                          </p>
                                     </div>
                                 </div>
                             </div>

             </div>
             <div>
                {cardData.map((card) => (
                    <div
                        key={card.id}
                        className="flex flex-col justify-center mb-10"
                    >
                        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-6 max-w-xs md:max-w-6xl mx-auto border border-[#D9D9D9] bg-[#D9D9D9]">
                            {card.imageFirst && (
                                <div className="w-full md:w-1/4 grid place-items-center">
                                    <img
                                        src={card.image}
                                        className="rounded-xl h-full object-cover"
                                    />
                                </div>
                            )}
                            <div className="w-full md:w-3/4 flex flex-col space-y-2 p-3">
                                <p className="text-2xl text-[#00000080]">
                                    {card.text}
                                </p>
                            </div>
                            {!card.imageFirst && (
                                <div className="w-full md:w-1/4 grid place-items-center">
                                    <img
                                        src={card.image}
                                        className="rounded-xl h-full object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
         </div>
     );
 };

export default TermandCondition