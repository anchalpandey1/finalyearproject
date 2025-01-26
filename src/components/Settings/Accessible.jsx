
import React from 'react';
import { IoArrowBack } from 'react-icons/io5'; 
import { useNavigate } from 'react-router-dom'; 

const Accessible = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className=''>
            <div className="w-full h-full bg-white">
                <div className="flex items-center pb-4 pt-8 ">
                    <IoArrowBack
                        className="text-black cursor-pointer text-4xl "
                        onClick={handleBackClick}
                    />
                                        <h1 className="w-full mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold text-black ml-4">
                        Accessibility Statement for Patient-facing Applications
                    </h1>
                </div>

                <div className="max-w-5xl mx-auto">
                    <p className="text-black">
                        <span className='font-bold'>Athenahealth, Inc.’s (“athena”) vision is to “create a thriving ecosystem that delivers accessible, high quality, and sustainable healthcare for all.” We believe that providing an accessible digital experience for patients and their support networks is a key part of delivering on that vision. athena integrates patient accessibility into our product development lifecycle through employee training, design reviews, formal conformance testing, and user testing. We are continually improving the user experience, and we apply relevant accessibility standards to our products.</span>
                    </p>
                </div>
            </div>
            <div className=" justify-center mt-10">
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-6 max-w-xs md:max-w-5xl mx-auto border border-white bg-[#F5F5F7]">

                    <div className="w-full p-10">
                        <h3 className="font-bold text-3xl mb-5">Table of Contents</h3>
                        <ul className=" text-2xl text-gray-500 space-y-2">
                            <li className="text-blue-600">1. Conformance Status</li>
                            <li className="text-blue-600">2. Compatibility with Browsers and Assistive Technology</li>
                            <li className="text-blue-600">3. Assessment Approach</li>
                            <li className="text-blue-600">4. Feedback</li>

                        </ul>
                       

                        <h3 className="font-bold text-2xl mt-5">I.Conformance Status</h3>
                        <p className="text-xl text-gray-500 mt-5">
                            The Web Content Accessibility Guidelines (WCAG) define standards for designers and developers to improve accessibility for people with disabilities. We strive for conformance with WCAG 2.1 Level AA.<br />
                            As part of the ongoing improvements to our patient-facing application, we are addressing identified accessibility issues. We welcome feedback on any area of concern.
                        </p>
                        <a
                            className='text-xl text-gray-500 underline cursor-pointer'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Return to top
                        </a>

                        <h3 className="font-bold text-2xl mt-5">II.Compatibility with Browsers and Assistive Technology</h3>
                        <p className="text-xl text-gray-500 mt-5">
                            The athenahealth patient-facing applications are tested with the latest versions of the following browsers and assistive technologies:
                            <ul className="list-disc list-inside mt-3 space-y-2">
                                <li>
                                    Chrome with NVDA on Windows
                                </li>
                                <li>Safari with VoiceOver on MacOS and iOS</li>
                                <li>Chrome with TalkBack on Android </li>                               
                            </ul>
                            <br />  They are also tested with keyboard alone, a color contrast analyzer, and automated tools.
                            The following resources provide information for different operating systems, browsers, and devices:
                        </p>
                        <a
                            className='text-xl text-gray-500 underline cursor-pointer'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Return to top
                        </a>



                        <h3 className="font-bold text-2xl mt-5">Operating Systems</h3>
                        <ul className="list-disc list-inside mt-3 space-y-2 text-xl text-gray-500">
                                <li>
                                Windows
                                </li>
                                <li>MacOS</li>
                                <li>Chrome OS</li>                               
                            </ul>
                       
                            <h3 className="font-bold text-2xl mt-5">Browsers</h3>
                        <ul className="list-disc list-inside mt-2 space-y-2 text-xl text-gray-500">
                                <li>
                                Google Chrome
                                </li>
                                <li>Safari</li>
                                <li>Microsoft Edge</li> 
                                <li>Firefox</li>                               
                            </ul>

                            <h3 className="font-bold text-2xl mt-5">Mobile Devices</h3>
                        <ul className="list-disc list-inside mt-3 space-y-2 text-xl text-gray-500">
                                <li>
                                iPhone
                                </li>
                                <li>iPad</li>
                                <li>Android</li> 
                                <li>Chromebook</li>                               
                            </ul>
                            <a
                            className='text-xl text-gray-500 underline cursor-pointer'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Return to top
                        </a>

                        <h3 className="font-bold text-2xl mt-5">III.Assessment Approach</h3>
                        <p className="text-xl text-gray-500 mt-5">
                        athena assesses the accessibility of patient-facing applications through the following approaches:
                            <ul className="list-disc list-inside mt-3 space-y-2">
                                <li>
                                Voluntary Product Accessibility Templates (VPATs)
                                </li>
                                <li>Design Testing</li>
                                <li>Automated Quality Assurance Testing</li>       
                                <li>External Evaluation</li>       
                                <li>Usability Testing with Users of Assistive Technology</li>                               
                            </ul>
                             </p>
                        <a
                            className='text-xl text-gray-500 underline cursor-pointer'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Return to top
                        </a>


                        <h3 className="font-bold text-2xl mt-5">IV.Feedback</h3>
                        <p className="text-xl text-gray-500 mt-5">
                        Let us know if you encounter accessibility barriers while using patient-facing applications.
                          <ul className="list-disc list-inside mt-3 space-y-2">
                                <li>
                                Phone: (800) 489-8159
                                </li>
                                <li>Online Form</li>
                                                        
                            </ul>
                             </p>
                             <p className="text-xl text-gray-500 mt-5">
                             Please include or have ready the following information:
                              <ul className="list-disc list-inside mt-3 space-y-2">
                                <li>
                                Assistive technology
                                </li>
                                <li>Device type (desktop/laptop, tablet, or mobile phone)</li>
                                <li>Browser</li>
                                <li>Operating system</li>                  
                            </ul>
                            We aim to review accessibility feedback within seven (7) business days.
                             </p>
                        <a
                            className='text-xl text-gray-500 underline cursor-pointer'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Return to top
                        </a>
                       

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Accessible;
