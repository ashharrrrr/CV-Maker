import CollapsedPersonalDetails from "./CollapsedPersonalDetails";
import Skills from "./Skills/Skills";
import Experiences from "./experiences/Experiences"

export default function Sections({
  handleDisplayContentSections,
  handleDisplayContentPersonalDetails,
  handleDisplayContentSkillsForm,
  handleDisplayContentExperiencesForm,
  skills,
  experiences,
}) {
  return (
    <div className="w-2xl h-[100vh] flex flex-col gap-2 justify-center">
      <CollapsedPersonalDetails
        handleDisplayContentPersonalDetails={
          handleDisplayContentPersonalDetails
        }
      />
      <Skills
        skills={skills}
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
