import React from 'react';
import { useNavigate } from 'react-router-dom';
const OtpInput = ({ otp, handleOtpChange, handleConfirmPay }) => {
    const navigate = useNavigate();

    // Handle cancel payment and navigate back
    const handleCancelPay = () => {
        navigate(-1); // Navigate back to the previous page
    };
    return (
        <div className="pt-6 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4">
                Enter your 4-digit card pin to confirm this payment
            </h2>
            <div className="flex gap-6 justify-center pt-4">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        value={digit}
                        onChange={(e) => handleOtpChange(e, index)}
                        maxLength="1"
                        className="w-14 h-14 text-2xl text-center border border-gray-400 rounded-md"
                    />
                ))}
            </div>
            <button
                className="mt-6 w-full  bg-[#256BFE] text-white px-6 py-3 rounded-lg font-bold text-2xl"
                onClick={handleConfirmPay}
            >
                Confirm Pay
            </button>
            <button
                className="mt-6 w-full  bg-gray-400 text-white px-6 py-3 rounded-lg font-bold text-2xl"
                onClick={handleCancelPay}
            >
                Cancel Payment
            </button>
        </div>
    );
};

export default OtpInput;
