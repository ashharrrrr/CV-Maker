import { useState } from "react";
import PersonalDetails from "./components/forms/PersonalDetails.jsx";
import Preview from "./components/Preview/preview.jsx";
import exampleData from "./exampleData.jsx";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [optionalInfo, setOptionalInfo] = useState(exampleData.optionalInfo);

  function handlePersonalInfoChange(e){
    const { key } = e.target.dataset;
    setPersonalInfo({...personalInfo, [key]: e.target.value})
  }

  function handleOptionalInfoChange(e){
    const { key } = e.target.dataset;
    setOptionalInfo({...optionalInfo, [key]: e.target.value})
  }

  function handleImageChange(e){
    const { key } = e.target.dataset;
    setPersonalInfo({...personalInfo, [key]: URL.createObjectURL(e.target.files[0])})
  }

  return (
    <div className="bg-gray-100 min-h-screen gap-10 flex flex-row items-center justify-center">
      <PersonalDetails onChange={handlePersonalInfoChange} onOptionalInfoChange={handleOptionalInfoChange} onImageChange={handleImageChange} personalInfo={personalInfo} optionalInfo={optionalInfo} setOptionalInfo={setOptionalInfo}/>
      <Preview personalInfo={personalInfo} optionalInfo={optionalInfo}/>
    </div>
  );
}

export default App;
