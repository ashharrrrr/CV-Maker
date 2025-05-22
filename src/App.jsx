import PersonalDetails from "./components/forms/PersonalDetails";
import Preview from "./components/Preview/Preview";
import exampleData from "./exampleData";
import Sections from "./components/Forms/Sections/Sections";
import SkillsForm from "./components/Forms/Sections/Skills/SkillsForm";
import ExperiencesForm from "./components/Forms/Sections/experiences/ExperiencesForm";
import EducationsForm from "./components/Forms/Sections/educations/EducationsForm";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [optionalInfo, setOptionalInfo] = useState(exampleData.optionalInfo);
  const [skills, setSkills] = useState(exampleData.sections.skills);
  const [displayContent, setDisplayContent] = useState("personalDetails");
  const [experiences, setExperiences] = useState(
    exampleData.sections.experiences
  );
  const [educations, setEducations] = useState(
    exampleData.sections.educations || []
  );
  const [currentSkill, setCurrentSkill] = useState("");
  const [currentSubSkill, setCurrentSubSkill] = useState("");
  const [currentEditingSkill, setCurrentEditingSkill] = useState(null);
  const [currentEditingExperience, setCurrentEditingExperience] = useState(null);
  const [currentEditingEducation, setCurrentEditingEducation] = useState(null);

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

  function handleEducationChange(e) {
    const { key } = e.target.dataset;
    setEducations((prevEducations) => {
      if (prevEducations.length === 0) return prevEducations;
      const updatedEducations = [...prevEducations];
      updatedEducations[updatedEducations.length - 1] = {
        ...updatedEducations[updatedEducations.length - 1],
        [key]: e.target.value,
      };
      return updatedEducations;
    });
  }

  function handleImageChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({
      ...personalInfo,
      [key]: URL.createObjectURL(e.target.files[0]),
    });
  }

  function handleSkillEdit(skill) {
    setCurrentEditingSkill(skill);
  }

  function handleExperienceEdit(experience) {
    setCurrentEditingExperience(experience);
  }

  function handleEducationEdit(education) {
    setCurrentEditingEducation(education);
  }

  function handleDisplayContentSections(e) {
    e.preventDefault();
    setCurrentEditingSkill(null);
    setCurrentEditingExperience(null);
    setCurrentEditingEducation(null);
    if (
      skills[skills.length - 1].skill &&
      experiences[experiences.length - 1].companyName
    ) {
      setDisplayContent("sections");
    }
  }

  function handleDisplayContentPersonalDetails() {
    setDisplayContent("personalDetails");
  }

  function handleDisplayContentSkillsForm(skills, newSkillsObject) {
    setCurrentEditingSkill(null); // Reset editing state first
    setDisplayContent("skillsForm");
    setSkills(prevSkills => [...prevSkills, newSkillsObject]);
  }

  function handleDisplayContentExperiencesForm(
    experiences,
    newExperiencesObject
  ) {
    setDisplayContent("experiencesForm");
    const ExperiencesClone = experiences.slice();
    ExperiencesClone.push(newExperiencesObject);
    setExperiences(ExperiencesClone);
  }

  function handleDisplayContentEducationsForm(
    educations,
    newEducationObject
  ) {
    setDisplayContent("educationsForm");
    const educationsClone = educations.slice();
    educationsClone.push(newEducationObject);
    setEducations(educationsClone);
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-10 flex items-start justify-center gap-8">
      <div className="w-[500px] overflow-y-auto">
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
            setExperiences={setExperiences}
            educations={educations}
            setEducations={setEducations}
            skills={skills}
            setSkills={setSkills}
            currentSkill={currentSkill}
            currentSubSkill={currentSubSkill}
            setCurrentSkill={setCurrentSkill}
            setCurrentSubSkill={setCurrentSubSkill}
            displayContent={displayContent}
            setDisplayContent={setDisplayContent}
            handleDisplayContentSections={handleDisplayContentSections}
            handleDisplayContentPersonalDetails={
              handleDisplayContentPersonalDetails
            }
            handleDisplayContentSkillsForm={handleDisplayContentSkillsForm}
            handleDisplayContentExperiencesForm={
              handleDisplayContentExperiencesForm
            }
            handleDisplayContentEducationsForm={
              handleDisplayContentEducationsForm
            }
            handleSkillEdit={handleSkillEdit}
            handleExperienceEdit={handleExperienceEdit}
            handleEducationEdit={handleEducationEdit}
            personalInfo={personalInfo}
          />
        )}
        {displayContent === "skillsForm" && (
          <SkillsForm
            skills={skills}
            setSkills={setSkills}
            currentSkill={currentSkill}
            currentSubSkill={currentSubSkill}
            setCurrentSkill={setCurrentSkill}
            setCurrentSubSkill={setCurrentSubSkill}
            handleSkillChange={handleSkillChange}
            handleDisplayContentSections={handleDisplayContentSections}
            currentEditingSkill={currentEditingSkill}
            setDisplayContent={setDisplayContent}
          />
        )}
        {displayContent === "experiencesForm" && (
          <ExperiencesForm
            handleExperienceChange={handleExperienceChange}
            handleDisplayContentSections={handleDisplayContentSections}
            currentEditingExperience={currentEditingExperience}
            setExperiences={setExperiences}
          />
        )}
        {displayContent === "educationsForm" && (
          <EducationsForm
            handleEducationChange={handleEducationChange}
            handleDisplayContentSections={handleDisplayContentSections}
            currentEditingEducation={currentEditingEducation}
            setEducations={setEducations}
          />
        )}
      </div>
      <div className="sticky top-10 h-[90vh]" style={{ width: 'calc(90vh / 1.4142)' }}>
        <Preview
          skills={skills}
          personalInfo={personalInfo}
          optionalInfo={optionalInfo}
          experiences={experiences}
          educations={educations}
        />
      </div>
    </div>
  );
}

export default App;
