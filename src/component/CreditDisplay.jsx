import React from "react";
import "./utility.css";
import "./CreditDisplay.css";
import creditBack from "/images/bg-card-back.png";
import creditFront from "/images/bg-card-front.png";
import cardLogo from "/images/card-logo.svg";
const CreditDisplay = ({ formData }) => {
  const { cardHolderName, cardNumber, CVNumber, expMonth, expYear } = formData;

  return (
    <div className="container flex-dir-col">
      <div className="cardHolder flex-dir-col">
        <img src={creditBack} alt="" className="creditBack" />
        <p className="cvNumber letter-space-15">
          {CVNumber == "" ? "000" : CVNumber}
        </p>
        <img src={creditFront} alt="" className="creditFront" />
        <img src={cardLogo} alt="" className="cardLogo" />
        <p className="cardNumber letter-space-15">
          {cardNumber == ""
            ? "0000000000000000".replace(/(\d{4})/g, "$1 ").trim()
            : cardNumber.replace(/(\d{4})/g, "$1 ").trim()}
        </p>
        <div className="userDetailGroup flex-dir-row">
          <p className="cardHolderName letter-space-15">
            {cardHolderName == ""
              ? "your name".toUpperCase()
              : cardHolderName.toUpperCase()}
          </p>
          <p className="cardExpDate letter-space-15">
            {expMonth === "" ? "00" : expMonth}/{expYear == "" ? "00" : expYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreditDisplay;
