import { useState } from "react";
import { Fragment } from "react";
import { GeneralInfo } from "./GeneralInfo";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  return (
    <div className="section-container">
      <GeneralInfo
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      ></GeneralInfo>
    </div>
  );
}

export default App;
