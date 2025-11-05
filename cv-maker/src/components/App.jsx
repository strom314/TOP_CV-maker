import { useState } from "react";
import { Fragment } from "react";
import { GeneralInfo } from "./GeneralInfo";
import { Preview } from "./Preview";
import { School } from "./Education";
import { Experience } from "./Experience";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [school, setSchool] = useState({
    id: "",
    school: "",
    field: "",
    graduation: "",
  });
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    years: "",
    description: "",
  });

  return (
    <div className="section-container">
      <GeneralInfo
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      ></GeneralInfo>
      <School school={school} setSchool={setSchool}></School>
      <Experience
        experience={experience}
        setExperience={setExperience}
      ></Experience>

      <Preview
        generalInfo={generalInfo}
        school={school}
        experience={experience}
      ></Preview>
    </div>
  );
}

export default App;
