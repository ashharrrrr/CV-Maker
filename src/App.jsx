import { useState } from "react";
import PersonalDetails from "./components/forms/PersonalDetails.jsx";
import Preview from "./components/Preview/preview.jsx";
import exampleData from "./exampleData.jsx";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  return (
    <div className="bg-gray-100 min-h-screen gap-10 flex flex-row items-center justify-center">
      <PersonalDetails />
      <Preview personalInfo={personalInfo} />
    </div>
  );
}

export default App;
