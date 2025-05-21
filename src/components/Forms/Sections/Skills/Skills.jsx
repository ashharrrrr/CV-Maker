import { GraduationCap, MoveDownIcon } from "lucide-react";
import { useState } from "react";
import RenderSkills from "./RenderSkills";
import AddSkills from "./AddSkills";

export default function Skills({
  currentSkill,
  currentSubSkill,
  setCurrentSkill,
  setCurrentSubSkill,
  displayContent,
  setDisplayContent,
  skills,
  setSkills,
  handleDisplayContentSections,
  handleDisplayContentSkillsForm,
  addNewSkill,
}) {
  const [expandSkills, setExpandSkills] = useState(false);

  function handleExpandSkills() {
    setExpandSkills(!expandSkills);
  }

  return (
    <div className="flex flex-col space-y-2">
      <button
        onClick={handleExpandSkills}
        className={`${expandSkills ? "rounded-t-2xl" : "rounded-2xl"
          } bg-white p-10 flex flex-row cursor-pointer hover:opacity-60 justify-between items-center`}>
        <div className="flex flex-row gap-5 items-center">
          <GraduationCap size={24} />
          <h2 className="text-2xl font-bold">Skills</h2>
        </div>
        <div>
          <MoveDownIcon size={24} />
        </div>
      </button>
      {expandSkills && (
        <div className="flex flex-col space-y-2">
          {skills.map((skill) => (
            <div key={skill.skill}>
              <RenderSkills
                currentSkill={currentSkill}
                currentSubSkill={currentSubSkill}
                setCurrentSkill={setCurrentSkill}
                setCurrentSubSkill={setCurrentSubSkill}
                skill={skill}
                setSkills={setSkills}
                displayContent={displayContent}
                setDisplayContent={setDisplayContent}
              />
            </div>
          ))}
          <AddSkills
            skills={skills}
            addNewSkill={addNewSkill}
            handleDisplayContentSkillsForm={handleDisplayContentSkillsForm}
          />
        </div>
      )}
    </div>
  );
}
