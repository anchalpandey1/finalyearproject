import React from 'react'
import { IoArrowBack } from 'react-icons/io5'; // Importing the back arrow icon from react-icons
import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
const Patient = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };
    const cardData = [
        {
            id: 1,
            image: p1,
            imageFirst: true,
            text: (
                <>
                    <h1 className="text-2xl font-bold  text-black">FOR ALL MEDICAL EMERGENCIES, IMMEDIATELY CALL 911</h1>
                    Patient portal is designed as a secure Internet-based environment through which you may receive confidential medical information about yourself. When you initially enroll to use the Patient Portal, you will need to confirm your identity via two unique workflows, as well as establish an email and a confidential password for login credentials. Please DO NOT SHARE YOUR PASSWORD with anyone. Anyone with access to your password will be able to view your medical and financial information and communicate with your health care team as if that person were you. 
                     </>
            ),
        },
        {
            id: 2,
            image: p2,
            imageFirst: false,
            text: (
                <>
                    <h1 className="text-2xl font-bold  text-black">How We Protect Your Personal Health Information</h1>
                    We consider the privacy of your health information to be one of the most important elements in our relationship with you and one we take very seriously. By accessing or using Patient Portal, you acknowledge that you have received and read a copy of our Notice of Privacy Practices, which can be found in paper copy at our office locations or through your Patient Portal account under the "Forms" link.  
                 <br/>   We are committed to protecting the privacy of the information you send and receive through Patient Portal, and will only collect and use such information as permitted under the Patient Portal Privacy Statement, which can be found online within Patient Portal. By using Patient Portal, you also consent to all of the terms and conditions described in the Privacy Statement
                    </>
            ),
        },
        {
            id: 3,
            image: p3,
            imageFirst: true,
            text: (
                <>
                    <h1 className="text-2xl font-bold  text-black">FOR ALL MEDICAL EMERGENCIES, IMMEDIATELY CALL 911 </h1>
                    Patient portal is designed as a secure Internet-based environment through which you may receive confidential medical information about yourself. When you initially enroll to use the Patient Portal, you will need to confirm your identity via two unique workflows, as well as establish an email and a confidential password for login credentials. Please DO NOT SHARE YOUR PASSWORD with anyone. Anyone with access to your password will be able to view your medical and financial information and communicate with your health care team as if that person were you. 
                  </>
            ),
        },
        {
            id: 4,
            image: p4,
            imageFirst: false,
            text: (
                <>
                    <h1 className="text-2xl font-bold  text-black">Patient Portal Messaging</h1>
                    By using Patient Portal, you acknowledge and agree that this messaging service is intended to facilitate dialogue regarding personal health matters. You agree not to use Patient Portal to post or send or post any illicit or offensive material.  
                    <br/>You understand that messages will be routed to the appropriate department as necessary for handling, and therefore our employees other than your physician, nurse practitioner, or physician's assistant may be involved in addressing your request. If your physician is out of the office or unavailable to respond, messages sent via Patient Portal may be routed to other authorized healthcare providers within our practice to facilitate a timely response to your request. Therefore, use of Patient Portal may not be appropriate if there is sensitive information that you want to discuss directly with your healthcare provider.
                     </>
            ),
        },
        {
            id: 5,
            image: p5,
            imageFirst: true,
            text: (
                <>
                    <h1 className="text-2xl font-bold  text-black"></h1>
                    You may discontinue your use of Patient Portal at any time by sending a secure message to your primary care provider's office requesting this change. We reserve the right, in our sole discretion, to limit or discontinue your use of Patient Portal at any time and for any reason, including, but not limited to, your use of Patient Portal on behalf of another person. Your Patient Portal service will be discontinued if you no longer have a primary care provider who participates in Patient Portal at your practice. You will be notified if your Patient Portal service is discontinued. 
                      </>
            ),
        },
        {
            id: 6,
            image: p6,
            imageFirst: false,
            text: (
                <>
                    <h1 className="text-2xl font-bold  text-black">Your Clinical Information </h1>
                    As we provide your health care, we are required to maintain documentation of your medical history, current conditions, treatment plan, and all treatments given, including the results of all tests, procedures, and therapies. Patient Portal is an Internet application that enables a patient to have secure web-based access to personal clinical information, as released by the treating physician, and allows secure electronic messaging with our participating physicians. By using Patient Portal, you understand that not all of your medical record with us will be accessible through your Patient Portal account. Posting of information to your Patient Portal account is at the sole discretion of your individual physician(s).  
                  <br/>  Messages you send or receive via Patient Portal may become part of your permanent medical record at the sole discretion of your physician. If such messages are made part of your permanent medical record, they will be accessible to our current and future staff members who are involved with your care.
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
                        Patient Portal
                    </h1>
                </div>

                <div className="justify-center mt-10 mb-20">
                    <div className="relative   md:space-x-5 space-y-3 md:space-y-0  p-6 max-w-xs md:max-w-6xl mx-auto  ">

                        <div className="w-full  flex flex-col space-y-2 p- text-[#263238] ">
                            <h3 className="font-bold text-3xl">Minimum Requirements and Security</h3>
                            <p className="text-2xl ">
                                This website uses encryption software. In order to use Patient Portal, you must have:
                                <ul className="list-disc list-inside mt-2 space-y-2">
                                    <li>

                                        a personal computer equipped with an Internet browser that has 128-bit encryption enabled and configured to accept cookies (e.g., Internet Explorer 7 or 8, Safari, or Firefox; Internet Explorer 6 may not allow you to view some materials, such as test results);  
                                </li>
                                <li>
                                        Internet access, a valid email account, software to receive and read email messages, and spam filters set to accept email from our domain; and</li>

                                </ul>
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


export default Patient