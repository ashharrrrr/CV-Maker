import CollapsedPersonalDetails from "./CollapsedPersonalDetails";
import Skills from "./Skills/Skills";
import Experiences from "./experiences/Experiences";
import Educations from "./educations/Educations";

export default function Sections({
  currentSkill,
  currentSubSkill,
  setCurrentSkill,
  setCurrentSubSkill,
  displayContent,
  setDisplayContent,
  handleDisplayContentSections,
  handleDisplayContentPersonalDetails,
  handleDisplayContentSkillsForm,
  handleDisplayContentExperiencesForm,
  handleDisplayContentEducationsForm,
  skills,
  setSkills,
  experiences,
  setExperiences,
  educations,
  setEducations,
  personalInfo,
  handleSkillEdit,
  handleExperienceEdit,
  handleEducationEdit,
}) {
  return (
    <div className="w-full flex flex-col gap-2">
      <CollapsedPersonalDetails
        handleDisplayContentPersonalDetails={
          handleDisplayContentPersonalDetails
        }
        personalInfo={personalInfo}
      />
      <Skills
        setDisplayContent={setDisplayContent}
        displayContent={displayContent}
        currentSkill={currentSkill}
        currentSubSkill={currentSubSkill}
        setCurrentSkill={setCurrentSkill}
        setCurrentSubSkill={setCurrentSubSkill}
        skills={skills}
        setSkills={setSkills}
        handleDisplayContentSkillsForm={handleDisplayContentSkillsForm}
        handleDisplayContentSections={handleDisplayContentSections}
        handleSkillEdit={handleSkillEdit}
      />
      <Experiences
        experiences={experiences}
        setExperiences={setExperiences}
        handleDisplayContentSections={handleDisplayContentSections}
        handleDisplayContentExperiencesForm={
          handleDisplayContentExperiencesForm
        }
        handleExperienceEdit={handleExperienceEdit}
        setDisplayContent={setDisplayContent}
      />
      <Educations
        educations={educations}
        setEducations={setEducations}
        handleDisplayContentSections={handleDisplayContentSections}
        handleDisplayContentEducationsForm={
          handleDisplayContentEducationsForm
        }
        handleEducationEdit={handleEducationEdit}
        setDisplayContent={setDisplayContent}
      />
    </div>
  );
}
