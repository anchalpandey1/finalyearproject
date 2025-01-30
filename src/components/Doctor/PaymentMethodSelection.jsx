import React from 'react';
import cards from '../../assets/cards.png';
import upi from '../../assets/upi.png';

const PaymentMethodSelection = ({ paymentMethod, setPaymentMethod }) => {
    return (
        <div className="flex items-center text-4xl gap-8 pt-8">
            <label className="flex items-center gap-2">
                <input
                    type="radio"
                    name="payment"
                    className="w-6 h-6"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                />
                <span>Card</span>
                <img src={cards} alt="Card" className="w-8 h-8" />
            </label>
            <label className="flex items-center gap-2">
                <input
                    type="radio"
                    name="payment"
                    className="w-6 h-6"
                    checked={paymentMethod === "upi"}
                    onChange={() => setPaymentMethod("upi")}
                />
                <span>UPI</span>
                <img src={upi} alt="Card" className="w-10 h-10" />
            </label>
        </div>
    );
};

export default PaymentMethodSelection;
