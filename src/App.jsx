import { useState } from "react";
import PersonalDetails from "./components/forms/PersonalDetails.jsx";
import Preview from "./components/Preview/preview.jsx";
import exampleData from "./exampleData.jsx";
import Sections from "./components/Forms/Sections/Sections.jsx";
import SkillsForm from "./components/Forms/Sections/Skills/SkillsForm.jsx";
import ExperiencesForm from "./components/Forms/Sections/experiences/ExperiencesForm.jsx";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [optionalInfo, setOptionalInfo] = useState(exampleData.optionalInfo);
  const [skills, setSkills] = useState(exampleData.sections.skills);
  const [displayContent, setDisplayContent] = useState("personalDetails");
  const [experiences, setExperiences] = useState(exampleData.sections.experiences);



  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  function handleOptionalInfoChange(e) {
    const { key } = e.target.dataset;
    setOptionalInfo({ ...optionalInfo, [key]: e.target.value });
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

  function handleExperienceChange(e) {
    const { key } = e.target.dataset;
    setExperiences((prevExperiences) => {
      if (prevExperiences.length === 0) return prevExperiences; // avoid error if empty
      const updatedExperiences = [...prevExperiences];
      updatedExperiences[updatedExperiences.length - 1] = {
        ...updatedExperiences[updatedExperiences.length - 1],
        [key]: e.target.value,
      };
      return updatedExperiences;
    });
  }
  function handleImageChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({
      ...personalInfo,
      [key]: URL.createObjectURL(e.target.files[0]),
    });
  }

  function handleDisplayContentSections(e) {
    e.preventDefault();
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
  }

  function handleDisplayContentExperiencesForm(experiences, newExperiencesObject) {
    setDisplayContent("experiencesForm");
    const ExperiencesClone = experiences.slice();
    ExperiencesClone.push(newExperiencesObject);
    setExperiences(ExperiencesClone);
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
          experiences={experiences}
          skills={skills}
          handleDisplayContentSections={handleDisplayContentSections}
          handleDisplayContentPersonalDetails={
            handleDisplayContentPersonalDetails
          }
          handleDisplayContentSkillsForm={handleDisplayContentSkillsForm}
          handleDisplayContentExperiencesForm={handleDisplayContentExperiencesForm}
        />
      )}
      {displayContent === "skillsForm" && <SkillsForm handleSkillChange={handleSkillChange} handleDisplayContentSections={handleDisplayContentSections}  />}
      {displayContent === "experiencesForm" && <ExperiencesForm handleExperienceChange={handleExperienceChange} handleDisplayContentSections={handleDisplayContentSections} />}
      <Preview skills={skills} personalInfo={personalInfo} optionalInfo={optionalInfo} experiences={experiences} />
    </div>
  );
}

export default App;
