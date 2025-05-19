import CollapsedPersonalDetails from "./CollapsedPersonalDetails";
import Skills from "./Skills/Skills";

export default function Sections({
  handleDisplayContentSections,
  handleDisplayContentPersonalDetails,
  handleDisplayContentSkillsForm,
  skills,
  addNewSkill
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
        addNewSkill={addNewSkill}
      />
    </div>
  );
}
