
import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import PaymentMethodSelection from './PaymentMethodSelection';
import OtpInput from './OtpInput';
import { SiGooglepay } from 'react-icons/si';
import g from "../../assets/g.png";
import ph from "../../assets/ph.png";
import py from "../../assets/py.png";
const Payment = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };

    const [paymentMethod, setPaymentMethod] = useState("card");
    const [isPayClicked, setIsPayClicked] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '']);
    const [upiId, setUpiId] = useState("");
    const handleOtpChange = (e, index) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);
    };

    const handlePay = () => {
        setIsPayClicked(true);
    };

    const handleConfirmPay = (isSuccess = true) => {
        if (isSuccess) {
            Swal.fire({
                title: "Congratulations",
                text: "Appointment successfully booked. You will receive a notification and the doctor you selected will contact you.",
                icon: "success",
                showCancelButton: true,
                confirmButtonText: "View Appointment",
                cancelButtonText: "Go Home",
                confirmButtonColor: "#256BFE", 
                cancelButtonColor: "#ffffff", 
                background: "#ffffff", 
                buttonsStyling: false, 
                customClass: {
                    confirmButton: 'bg-blue-600 text-white border-2 border-blue-600 rounded-lg py-2 px-6 text-lg font-semibold',
                    cancelButton: 'bg-white text-blue-600 border-2 border-blue-600 rounded-lg py-2 px-6 text-lg font-semibold',
                    actions: 'flex flex-col space-y-4 mt-4' 
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/doctorprofile');
                } else {
                    navigate('/');
                }
            });
        } else {
            Swal.fire({
                title: "Oops, Failed",
                text: "Please make sure that your internet connection is active and stable, then press “Try Again",
                icon: "error",
                showCancelButton: true,
                confirmButtonText: "Try Again",
                cancelButtonText: "Go Home",
                confirmButtonColor: "#d33", 
                cancelButtonColor: "#ffffff", 
                background: "#ffffff", 
                buttonsStyling: false, 
                customClass: {
                    confirmButton: 'bg-red-600 text-white border-2 border-red-600 rounded-lg py-2 px-6 text-lg font-semibold',
                    cancelButton: 'bg-white text-red-600 border-2 border-red-600 rounded-lg py-2 px-6 text-lg font-semibold',
                    actions: 'flex flex-col space-y-4 mt-4' 
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    setIsPayClicked(false); // Payment process wapas start karne ke liye
                } else {
                    navigate('/');
                }
            });
        }
    };
    
    const handleUpiChange = (e) => {
        setUpiId(e.target.value);
    };
    const [selectedPayment, setSelectedPayment] = useState(null);

    const handlePaymentSelect = (paymentMethod) => {
        setSelectedPayment(paymentMethod);
    };
    return (
        <div>
            <div className="flex items-center pb-4 pt-8">
                <IoArrowBack
                    className="text-black cursor-pointer text-3xl ml-10"
                    onClick={handleBackClick}
                />
            </div>

            <div className="justify-center">
                <div className="relative md:space-x-5 space-y-3 md:space-y-0 max-w-xs md:max-w-4xl mx-auto">
                    <h1 className="w-full mx-auto lg:text-5xl md:text-3xl xs:text-2xl font-serif font-bold text-black ml-5 mb-4">
                        Payment
                    </h1>
                    <hr className="border-t-2 border-black mt-2" />
                    <h1 className="w-full mx-auto lg:text-4xl md:text-3xl xs:text-2xl font-serif text-black pt-6">
                        Pay With :
                    </h1>

                    {/* PaymentMethodSelection Component */}
                    <PaymentMethodSelection
                        paymentMethod={paymentMethod}
                        setPaymentMethod={setPaymentMethod}
                    />

                    {/* Show Card Details Form if "Card" is selected and Pay is not clicked */}
                    {!isPayClicked && paymentMethod === "card" && (
                        <>
                            <h1 className="w-full mx-auto lg:text-4xl md:text-3xl xs:text-2xl font-serif text-black pt-6 pb-4">
                                Cards Number :
                            </h1>
                            <input
                                type="text"
                                placeholder="3599 0000 0000 0000"
                                className="w-full text-2xl p-2 border border-gray-400 bg-gray-200 rounded-md mb-4"
                            />
                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <h1 className="w-full mx-auto lg:text-3xl md:text-3xl xs:text-2xl font-serif text-black pt-6 pb-4">
                                        Expiration date
                                    </h1>
                                    <input
                                        type="text"
                                        placeholder="MM/YY"
                                        className="w-full text-2xl p-2 border border-gray-400 bg-gray-200  rounded-md"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <h1 className="w-full mx-auto lg:text-3xl md:text-3xl xs:text-2xl font-serif text-black pt-6 pb-4">
                                        CVV
                                    </h1>
                                    <input
                                        type="password"
                                        placeholder="***"
                                        className="w-full p-2  text-2xl border border-gray-400 bg-gray-200  rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="pt-6 pb-6">
                                <label className="flex items-center text-2xl gap-2">
                                    <input type="checkbox" className='w-6 h-6 ' />
                                    <span>Save card details</span>
                                </label>
                            </div>
                            <button
                                className="mt-6 w-full bg-[#256BFE] text-white px-6 py-3 rounded-lg font-bold text-2xl"
                                onClick={handlePay}
                            >
                                Pay
                            </button>
                        </>
                    )}

                    {/* Show OTP Input and Confirm Pay Button if Pay is clicked */}
                    {isPayClicked && paymentMethod === "card" && (
                        <OtpInput
                            otp={otp}
                            handleOtpChange={handleOtpChange}
                            handleConfirmPay={handleConfirmPay}
                        />
                    )}
                    {paymentMethod === "upi" && (
                        <div className="pt-8">
                            <h3 className="text-2xl font-bold ">Enter your UPI ID</h3>
                            <div className="flex gap-4 pt-4">
                                <img
                                    src={py}  // replace with your actual Paytm image path
                                    alt="Paytm"
                                    className={`w-15 h-15 cursor-pointer ${selectedPayment === 'paytm' ? 'border-4 border-blue-500' : ''}`}
                                    onClick={() => handlePaymentSelect('paytm')}
                                />
                                <img
                                    src={ph}  // replace with your actual PhonePe image path
                                    alt="PhonePe"
                                    className={`w-15 h-15 cursor-pointer ${selectedPayment === 'phonepe' ? 'border-4 border-blue-500' : ''}`}
                                    onClick={() => handlePaymentSelect('phonepe')}
                                />
                                <img
                                    src={g}  // replace with your actual GooglePay image path
                                    alt="GooglePay"
                                    className={`w-15 h-15 cursor-pointer ${selectedPayment === 'googlepay' ? 'border-4 border-blue-500' : ''}`}
                                    onClick={() => handlePaymentSelect('googlepay')}
                                />
                            </div>

                            <div className="mt-8 p-10 border border-gray-200 rounded-lg shadow-lg bg-white">
                                <h3 className="text-2xl pt-8 pb-8 font-bold mb-4">Enter your UPI ID</h3>
                                <input
                                    type="text"
                                    placeholder="example@upi"
                                    value={upiId}
                                    onChange={handleUpiChange}
                                    className="w-full text-2xl p-2 border border-gray-400 bg-gray-200 rounded-md mb-4"
                                />
                                <button
                                    className="w-full mt-10 bg-[#256BFE] text-white px-6 py-3 rounded-lg font-bold text-2xl"
                                    onClick={handleConfirmPay}
                                >
                                    Verify and Pay
                                </button>
                            </div>
                        </div>
                    )}

                    <p className='text-xl text-gray-600 pt-2'>
                        Your personal data will be used to process your order, support your experience throughout this website, and other purposes described in our privacy policy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Payment;






