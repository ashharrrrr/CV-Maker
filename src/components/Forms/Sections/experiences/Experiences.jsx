import { GraduationCap, MoveDownIcon } from "lucide-react";
import { useState } from "react";
import RenderExperiences from "./RenderExperiences";
import AddExperiences from "./AddExperiences";

export default function Experiences({ experiences, setExperiences, handleDisplayContentSections, handleDisplayContentExperiencesForm, addNewExperience }) {
  const [expandExperiences, setExpandExperiences] = useState(false);

  function handleExpandExperiences() {
    setExpandExperiences(!expandExperiences);
  }

  return (
    <div className="flex flex-col space-y-2">
      <button onClick={handleExpandExperiences} className={`${expandExperiences ? "rounded-t-2xl" : "rounded-2xl"} bg-white p-10 flex flex-row cursor-pointer hover:opacity-60 justify-between items-center`}>
        <div className="flex flex-row gap-5 items-center">
          <GraduationCap size={24} />
          <h2 className="text-2xl font-bold">Experiences</h2>
        </div>
        <div>
          <MoveDownIcon size={24} />
        </div>
      </button>
      {expandExperiences && <div className="flex flex-col space-y-2">
        {experiences.map((experience) => (
          <div key={experience.companyName}>
            <RenderExperiences experience={experience} setExperiences={setExperiences} />
          </div>
        ))} 
        <AddExperiences experiences={experiences} addNewExperience={addNewExperience} handleDisplayContentExperiencesForm={handleDisplayContentExperiencesForm} />
      </div>}
    </div>
  );
}
