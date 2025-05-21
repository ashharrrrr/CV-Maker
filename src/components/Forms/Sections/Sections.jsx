import CollapsedPersonalDetails from "./CollapsedPersonalDetails";
import Skills from "./Skills/Skills";
import Experiences from "./experiences/Experiences";

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
  skills,
  setSkills,
  experiences,
  personalInfo,
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
      />
      <Experiences
        experiences={experiences}
        handleDisplayContentSections={handleDisplayContentSections}
        handleDisplayContentExperiencesForm={
          handleDisplayContentExperiencesForm
        }
      />
    </div>
  );
}
