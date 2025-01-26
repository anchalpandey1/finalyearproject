import React from 'react';
import { IoArrowBack } from 'react-icons/io5'; // Importing the back arrow icon from react-icons
import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook

const Privacy = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className=''>
            <div className="w-full h-full bg-white">
                <div className="flex items-center pb-4 pt-8 ">
                    <IoArrowBack
                        className="text-black cursor-pointer text-3xl"
                        onClick={handleBackClick}
                    />
                    <h1 className="w-full mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold text-black ml-4">
                        PRIVACY NOTICE FOR PATIENT FACING APPLICATIONS
                    </h1>
                </div>

                <div className="max-w-5xl mx-auto">
                    <p className="text-black">
                        <span className='font-bold'>Please note:</span> The below Privacy Policy applies to your use of athenahealth’s Services in your capacity as a patient. athenahealth offers such Services on behalf of our HIPAA regulated clients (i.e. your healthcare provider). For the Terms of use and Privacy Policy that apply to your use of our website, athenahealth.com, please visit athenahealth.com.
                    </p>
                </div>
            </div>
            <div className=" justify-center mt-10">
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-6 max-w-xs md:max-w-5xl mx-auto border border-white bg-[#D9D9D9]">

                    <div className="w-full p-10">
                        <h3 className="font-bold text-3xl mb-5">Table of Contents</h3>
                        <ul className="list-disc list-inside text-2xl text-gray-500 space-y-2">
                            <li className="text-blue-600">What information do we collect?</li>
                            <li className="text-blue-600">How do we use your information?</li>
                            <li className="text-blue-600">Sharing your information</li>
                            <li className="text-blue-600">Data retention</li>
                            <li className="text-blue-600">Security of information</li>
                            <li className="text-blue-600">Electronic communications</li>
                            <li className="text-blue-600">Third Party Platforms</li>
                            <li className="text-blue-600">Tracking Technologies</li>
                            <li className="text-blue-600">Changes to our Privacy Policy</li>
                            <li className="text-blue-600">Contact information</li>
                        </ul>
                        <p className="text-xl text-gray-500 mt-5">
                            We, athenahealth, Inc. and our subsidiaries and affiliates (“athenahealth”, "we", "us") power health care solutions on behalf of your healthcare provider (our “Services”). These Services which include applications, websites and mobile devices, may allow you to communicate, coordinate and manage your medical care with your healthcare provider. When you use the Services, our collection and handling of your information is regulated by the Health Insurance Portability and Accountability Act (“HIPAA”) and our agreements with your healthcare provider.
                            This Privacy Policy ("Policy") describes our practices with respect to the information we obtain about you through the Services in our role as a Business Associate to your healthcare provider.<br />
                            You may also receive a HIPAA Notice of Privacy Practices from your healthcare provider. If that HIPAA Notice of Privacy Practice conflicts with any provision in this Privacy Policy, your healthcare provider's HIPAA Notice of Privacy Practices will control. We do not control and are not responsible for your healthcare provider's privacy practices.
                            For questions on those practices, please consult your healthcare provider.<br />
                            Because the information we collect under this Privacy Notice is regulated by HIPAA, it may be exempt from certain U.S. state privacy laws. You may contact us if you have questions about these exemptions.<br />
                            Any unauthorized registration for, access or use of our Services, client accounts or Third Party Platforms is strictly prohibited.<br />
                            What information do we collect?<br />
                            In accordance with our agreements with your healthcare provider, we may collect your information in the following ways:
                            <ul className="list-disc list-inside mt-3 space-y-2">
                                <li>
                                    We collect information you provide us if you access, voluntarily enter information into, or sign up for or request our Services. The information we collect directly from you may include information related to, your name, email address, date of birth, contact information, health insurance carrier and plan, phone number(s), information related to your healthcare provider, medical information you provide to us, information related to your payment, and information related to family members and other individuals who are associated with your account.
                                </li>
                                <li>
                                    You may also have the option, in certain instances, to enter additional information in free text fields so that, for example, your healthcare provider can manage your requested services or visit.</li>
                                <li>
                                    When you visit our websites, interact with any mobile applications or use our Services, we may gather certain information about your visit/use of the Services and your device. The information we automatically collect includes data about your device (for example, device ID, browser type), language preferences, IP address, information about when you accessed or registered, modified, logged in/out of the Services information related to actions taken on the site and information related to your operating system. We may also collect information that allows us connect the devices that you use to connect to the Services (such as your cell phone and your computer or device). </li>
                                <li>

                                    We may also collect information related to your use of the Services, including any permissions you set, authorizations you provide (including authorizations and information related to any third party platforms you use or access through your accounts), your language and communication preferences, security related information (such as your account credentials, of failed login attempts, timeouts, past passwords, security questions for identity or account validation, number and frequency of username or password resets, and access attempts), and geolocation information.</li>
                            </ul>
                            <br />  In addition, we may collect other information as permitted under applicable law or our agreements with your healthcare providers.
                        </p>
                        <a
                            className='text-xl text-gray-500 underline cursor-pointer'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Return to top
                        </a>
                        <h3 className="font-bold text-2xl mt-5">How do we use your information?</h3>
                        <p className="text-xl text-gray-500 mt-5">
                            We use your information in accordance with HIPAA and our agreements with your healthcare provider. This includes, for example:
                            <ul className="list-disc list-inside mt-3 space-y-2">
                                <li>
                                    To provide, enhance, secure, support and improve the Services we provide to you and your healthcare provider. This includes to communicate with you in connection with the Services as well as communications related to new features, feedback requests, technical notices and administrative messages;  </li>
                                <li>
                                    For data analysis, our internal management/operations, audits, and compliance with all applicable laws, regulations, and law enforcement requirements;</li>
                                <li>
                                    To enable cross-device/cross-context tracking for your log in with athena (“LWA”) account; </li>
                                <li>
                                    To fulfill or meet the reason you provided the information, such as registering you for the Services; and
                                </li>
                                <li>
                                    To plan and execute security and risk control measures, like fraud and abuse detection and prevention for athenahealth or your healthcare provider.
                                </li>
                            </ul>
                            <br />  We may also de-identify and/or aggregate your data for business purposes in accordance with our agreements with your healthcare providers. We de-identify protected health information in accordance with the HIPAA expert determination method and/or the safe harbor method
                        </p>
                        <a
                            className='text-xl text-gray-500 underline cursor-pointer'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Return to top
                        </a>

                        <h3 className="font-bold text-2xl mt-5">Sharing your information</h3>
                        <p className="text-xl text-gray-500 mt-5">
                            In general, we share your information only in accordance with HIPAA and our agreements with your healthcare provider. This includes, for example:
                            <ul className="list-disc list-inside mt-3 space-y-2">
                                <li>
                                    With your healthcare provider in the context of providing the Services to your healthcare provider as well as to comply with the contractual obligations we may have to your healthcare provider;
                                </li>
                                <li>
                                    With our third-party vendors, consultants, agents, or other service providers or other third parties we use to help us provide or improve the Services;
                                </li>
                                <li>
                                    With third parties that your healthcare provider has directed us to share your information, such as in accordance with your authorization or request;
                                </li>
                                <li>
                                    That you consent to or direct us to send/receive information to/from pursuant to our agreements with your provider;
                                </li>
                                <li>
                                    When we are complying with laws or responding to lawful requests and legal processes or responding to an emergency situation
                                </li>
                                <li>
                                    When we believe it is necessary to protect our rights and the security of the Services, to protect the rights and security of our customers or partners, to avoid liability, and to avoid violations of the law; or
                                </li>
                                <li>
                                    In connection with or during negotiation or consummation of any merger, divestiture, restructuring, reorganization, financing, acquisition, or bankruptcy transaction or proceeding involving sale or transfer of all or a portion of our business or assets to another company.
                                </li>
                            </ul>
                            <br />  We may have the right under our agreements with your healthcare provider to de-identify data in accordance with HIPAA. We may sell or disclose such de-identified information to third parties.
                        </p>
                        <a
                            className='text-xl text-gray-500 underline cursor-pointer'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Return to top
                        </a>



                        <h3 className="font-bold text-2xl mt-5">Data retention</h3>
                        <p className="text-xl text-gray-500 mt-5">
                            We retain your information for as long as permitted under our contracts with your healthcare providers or as needed to comply with our legal obligations, to resolve disputes, and to enforce our legal rights, policies, terms and agreements.
                        </p>
                        <a
                            className='text-xl text-gray-500 underline cursor-pointer'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Return to top
                        </a>
                        <h3 className=" text-xl text-gray-500">Security of information</h3>
                        <p className="text-xl text-gray-500">
                            We use technical, administrative, and physical safeguards designed to protect the security of your information from unauthorized disclosure. However, security cannot be guaranteed against all threats.
                        </p>
                        <a
                            className='text-xl text-gray-500 underline cursor-pointer'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Return to top
                        </a>



                        <h3 className="font-bold text-2xl mt-5">Electronic communications</h3>
                        <p className="text-xl text-gray-500 mt-5">
                            In connection with your accounts created through your use of the Services, athenahealth may need to send business, informational, support and security related messages (whether texts, alerts or calls) to all telephone numbers, including cellular numbers or mobile devices, you choose to provide on your accounts. You agree such texts or calls may be pre-recorded messages or placed with an automatic telephone dialing system. In addition, you agree that athenahealth may send service or account related text messages to cellular phone numbers you provide to athenahealth, and you agree to accept and pay all carrier message and data rates that apply to such text messages.
                            If you choose to provide an e-mail or other electronic address on your account, you acknowledge and consent to receive business and informational messages relating to your account at the address, and you represent and warrant that such address is your correct address and is not accessible or viewable by any other person. Additionally, we will inform you promptly when there is a patient statement awaiting your review. To the extent that we inform you via email, by signing up for and/or using our patient portal, you agree that such emails may be sent between 9 PM and 8 AM and you are providing your direct prior consent to receive such emails.
                        </p>
                        <a
                            className='text-xl text-gray-500 underline cursor-pointer'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Return to top
                        </a>

                        <h3 className="font-bold text-2xl mt-5">Third Party Platforms</h3>
                        <p className="text-xl text-gray-500 mt-5">
                            The Services may include links to or information about websites, applications, products, services, and solutions  that are operated by third parties “Third-Party Platforms”). We do not control and are not responsible for Third Party Platforms or any information you may share with, or access from, any Third-Party Platforms.
                        </p>
                        <a
                            className='text-xl text-gray-500 underline cursor-pointer'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Return to top
                        </a>

                        <h3 className="font-bold text-2xl mt-5">Tracking Technologies</h3>
                        <p className="text-xl text-gray-500 mt-5">
                            Online tracking technologies (“Tracking Technologies”) are generally scripts or code on a website or mobile app used to gather information about users as they interact with the website or mobile app. After information is collected through Tracking Technologies from websites or mobile apps, it is then analyzed by owners of the website or mobile app (“website owner” or “mobile app owner”), or third parties, to create insights about users’ online activities.  are used to collect and analyze information about how users interact with websites or mobile applications.<br />
                            We use Tracking Technologies as a part of the provision of Services to our healthcare provider clients (your healthcare provider).  We use third party Tracking Technologies only in instances where: (1) disclosure of information collected by such third party Tracking Technologies is permitted by law; (2) appropriate contractual assurances are in place with such third parties, which may include a Business Associate Agreement; and (3) the use and disclosure are permitted by the contractual terms agreed upon between athena and our Client(s).</p>
                        <a
                            className='text-xl text-gray-500 underline cursor-pointer'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Return to top
                        </a>

                        <h3 className="font-bold text-2xl mt-5">Changes to our Privacy Policy</h3>
                        <p className="text-xl text-gray-500 mt-5">
                            We reserve the right to amend this Policy at our discretion and at any time. When we make changes to this Policy, we will post the updated Policy on the website and update the Policy's effective date. Your continued use of our Services following the posting of changes constitutes your acknowledgment of such changes.</p>
                        <a
                            className='text-xl text-gray-500 underline cursor-pointer'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Return to top
                        </a>

                        <h3 className="font-bold text-2xl mt-5">Contact information</h3>
                        <p className="text-xl text-gray-500 mt-5">
                            Our goal is to respect your privacy and we encourage user feedback to help us improve our privacy policies. If you have any questions or suggestions about this privacy statement, please contact us at:</p>

                        <p className="text-xl text-gray-500">athenahealth, Inc.
                        </p>
                        <p className="text-xl text-gray-500">Attn: Chief Compliance Officer
                        </p>
                        <p className="text-xl text-gray-500">Boston Landing
                        </p>
                        <p className="text-xl text-gray-500">80 Guest Street
                        </p>
                        <p className="text-xl text-gray-500">Boston, MA 02135
                        </p>
                        <p className="text-xl text-gray-500">80 Guest Street
                        </p>
                        <a
                            className='text-xl text-gray-500 underline cursor-pointer'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Return to top
                        </a>
                        <p className="text-xl text-gray-500">LAST UPDATED: April 26, 2023
                        </p>


                    </div>


                </div>
            </div>
        </div>
    );
};

export default Privacy;
