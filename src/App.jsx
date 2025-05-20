import { useState } from "react";
import PersonalDetails from "./components/forms/PersonalDetails.jsx";
import Preview from "./components/Preview/preview.jsx";
import exampleData from "./exampleData.jsx";
import Sections from "./components/Forms/Sections/Sections.jsx";
import SkillsForm from "./components/Forms/Sections/Skills/SkillsForm.jsx";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [optionalInfo, setOptionalInfo] = useState(exampleData.optionalInfo);
  const [skills, setSkills] = useState(exampleData.sections.skills);
  const [displayContent, setDisplayContent] = useState("personalDetails");



  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  function handleOptionalInfoChange(e) {
    const { key } = e.target.dataset;
    setOptionalInfo({ ...optionalInfo, [key]: e.target.value });
  }

  function handleSkillChange(e){
    const { key } = e.target.dataset;
    const newSkill = skills[skills.length-1].skill;
    setSkills({...skills, [newSkill]: e.target.value})
  }

  function handleSkillChange(e) {
    const { key } = e.target.dataset;
    setSkills((prevSkills) => {
      if (prevSkills.length === 0) return prevSkills; // avoid error if empty
      const updatedSkills = [...prevSkills];
      updatedSkills[updatedSkills.length - 1] = {
        ...updatedSkills[updatedSkills.length - 1],
        [key]: e.target.value,
      };
      return updatedSkills;
    });
  }

  function handleImageChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({
      ...personalInfo,
      [key]: URL.createObjectURL(e.target.files[0]),
    });
  }

  // function addNewSkill(skills, newSkillsObject){
  //   const skillsClone = structuredClone(skills);
  //   skillsClone.push(newSkillsObject);
  //   setSkills(skillsClone);
  // }

  function handleSkillsPreview(e){
    const { key } = e.target.dataset;
    const form = e.target.closest("form") 
  }

  function handleDisplayContentSections() {
    if(skills[skills.length-1].skill){
    setDisplayContent("sections");
    }
  }

  function handleDisplayContentPersonalDetails() {
    setDisplayContent("personalDetails");
  }

  function handleDisplayContentSkillsForm(skills, newSkillsObject) {
    setDisplayContent("skillsForm");
    const skillsClone = skills.slice();
    skillsClone.push(newSkillsObject);
    setSkills(skillsClone);
    console.log(skills)
  }


  return (
    <div className="bg-gray-100 min-h-screen gap-10 flex flex-row items-center justify-center">
      {displayContent === "personalDetails" && (
        <PersonalDetails
          handleDisplayContentSections={handleDisplayContentSections}
          onChange={handlePersonalInfoChange}
          onOptionalInfoChange={handleOptionalInfoChange}
          onImageChange={handleImageChange}
          personalInfo={personalInfo}
          optionalInfo={optionalInfo}
          setOptionalInfo={setOptionalInfo}
        />
      )}
      {displayContent === "sections" && (
        <Sections
          skills={skills}
          handleDisplayContentSections={handleDisplayContentSections}
          handleDisplayContentPersonalDetails={
            handleDisplayContentPersonalDetails
          }
          handleDisplayContentSkillsForm={handleDisplayContentSkillsForm}
        />
      )}
      {displayContent === "skillsForm" && <SkillsForm handleSkillChange={handleSkillChange} handleDisplayContentSections={handleDisplayContentSections} handleSkillsPreview={handleSkillsPreview} />}
      <Preview skills={skills} personalInfo={personalInfo} optionalInfo={optionalInfo} />
    </div>
  );
}

export default App;
