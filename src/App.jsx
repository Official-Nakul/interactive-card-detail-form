import "./App.css";
import CreditDisplay from "./component/CreditDisplay";
import CardDetailForm from "./component/CardDetailForm";
import CompletePage from "./component/CompletePage";
import { useState } from "react";
function App() {
  const [cardDetail, setCardDetail] = useState({
    cardHolderName: "",
    cardNumber: "",
    CVNumber: "",
    expMonth: "",
    expYear: "",
  });
  const handleFormChange = (field, value) => {
    setCardDetail({
      ...cardDetail,
      [field]: value,
    });
  };
  return (
    <>
      <div className="mainContainer flex-dir-col">
        <CreditDisplay formData={cardDetail} />
        <CardDetailForm formData={FormData} onFormChange={handleFormChange} />
      </div>
    </>
  );
}

export default App;
