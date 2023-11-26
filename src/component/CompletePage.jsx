import React from "react";
import "./CompletePage.css";
import "./utility.css";
import completeIconx from "/images/icon-complete.svg";
const CompletePage = () => {
  return (
    <div className="containerCompletePage flex-dir-col ">
      <img src={completeIconx} alt="" />
      <div className="txt flex-dir-col">
        <p className="letter-space-15">THANK YOU!</p>
        <p className="letter-space-15">We've added your card details</p>
      </div>
      <button className="letter-space-15">Continue</button>
    </div>
  );
};

export default CompletePage;
