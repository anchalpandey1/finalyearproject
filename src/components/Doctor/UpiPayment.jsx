import React, { useState } from 'react';
import { SiGooglepay } from 'react-icons/si';

const UpiPayment = ({ handleConfirmPay, upiId, handleUpiChange }) => {
    return (
        <div className="pt-8">
            <h3 className="text-2xl font-bold text-center">Enter your UPI ID</h3>
            <div className="flex justify-center gap-4 pt-4">
                <img src="/path/to/phonepe-icon.png" alt="PhonePe" className="w-12 h-12" />
                <img src="/path/to/paytm-icon.png" alt="Paytm" className="w-12 h-12" />
                <SiGooglepay className="w-12 h-12" />
            </div>

            <div className="mt-8 p-4 border border-gray-400 rounded-md shadow-lg bg-white">
                <h3 className="text-2xl font-bold mb-4">Enter your UPI ID</h3>
                <input
                    type="text"
                    placeholder="example@upi"
                    value={upiId}
                    onChange={handleUpiChange}
                    className="w-full text-2xl p-2 border border-gray-400 bg-gray-200 rounded-md mb-4"
                />
                <button
                    className="w-full bg-[#256BFE] text-white px-6 py-3 rounded-lg font-bold text-2xl"
                    onClick={handleConfirmPay}
                >
                    Verify and Pay
                </button>
            </div>
        </div>
    );
};

export default UpiPayment;
