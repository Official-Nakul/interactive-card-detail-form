import React from "react";
import "./utility.css";
import "./CardDetailForm.css";

const CardDetailForm = ({ formData, onFormChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFormChange(name, value);
  };

  return (
    <div className="formContainer">
      <form action="" className="flex-dir-col gap-1 wrapper">
        <div className="CardholderNameGroup flex-dir-col gap-1 letter-space-15">
          <label htmlFor="cardHolderName">CARDHOLDER NAME</label>
          <div className="flex-dir-col">
            <input
              name="cardHolderName"
              type="text"
              value={formData.cardHolderName}
              placeholder="e.g. Nakul Visavadia"
              onChange={handleInputChange}
            />
            {/* <span>Can't be blank</span> */}
          </div>
        </div>
        <div className="CardholderNumberGroup flex-dir-col gap-1 letter-space-15">
          <label htmlFor="cardHolderNumber">CARD NUMBER</label>
          <input
            name="cardNumber"
            type="text"
            value={formData.cardNumber}
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={16}
            onChange={handleInputChange}
          />
        </div>

        <div className="groupLabel flex-dir-row">
          <label className="letter-space-15" htmlFor="expDate">
            EXP. DATE (MM/YY)
          </label>
          <label className="letter-space-15" htmlFor="cv">
            CVC
          </label>
        </div>
        <div className="groupInputField flex-dir-row">
          <input
            name="expMonth"
            type="text"
            value={formData.expMonth}
            placeholder="MM"
            maxLength={2}
            onChange={handleInputChange}
          />
          <input
            name="expYear"
            type="text"
            value={formData.expYear}
            placeholder="YY"
            maxLength={2}
            onChange={handleInputChange}
          />
          <input
            name="CVNumber"
            type="text"
            value={formData.CVNumber}
            placeholder="e.g. 123"
            maxLength={3}
            onChange={handleInputChange}
          />
        </div>
        <button className="letter-space-15">Confirm</button>
      </form>
    </div>
  );
};

export default CardDetailForm;
