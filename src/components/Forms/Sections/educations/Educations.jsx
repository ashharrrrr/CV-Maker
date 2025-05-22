import { GraduationCap, MoveDownIcon } from "lucide-react";
import { useState } from "react";
import RenderEducations from "./RenderEducations";
import AddEducations from "./AddEducations";

export default function Educations({ educations, setEducations, handleDisplayContentSections, handleDisplayContentEducationsForm, addNewEducation }) {
  const [expandEducations, setExpandEducations] = useState(false);

  function handleExpandEducations() {
    setExpandEducations(!expandEducations);
  }

  return (
    <div className="flex flex-col space-y-2">
      <button onClick={handleExpandEducations} className={`${expandEducations ? "rounded-t-2xl" : "rounded-2xl"} bg-white p-10 flex flex-row cursor-pointer hover:opacity-60 justify-between items-center`}>
        <div className="flex flex-row gap-5 items-center">
          <GraduationCap size={24} />
          <h2 className="text-2xl font-bold">Education</h2>
        </div>
        <div>
          <MoveDownIcon size={24} />
        </div>
      </button>
      {expandEducations && <div className="flex flex-col space-y-2">
        {educations.map((education) => (
          <div key={education.degree}>
            <RenderEducations education={education} setEducations={setEducations} />
          </div>
        ))} 
        <AddEducations educations={educations} addNewEducation={addNewEducation} handleDisplayContentEducationsForm={handleDisplayContentEducationsForm} />
      </div>}
    </div>
  );
}
