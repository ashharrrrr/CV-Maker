import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function RenderExperiences({ experience, setExperiences }) {
  function toggleIsVisible() {
    setExperiences(prevExperiences => prevExperiences.map(exp =>
      exp.companyName === experience.companyName ? { ...exp, isHidden: !exp.isHidden } : exp
    ));
  }

  return (
    <button className="flex w-full bg-white cursor-pointer p-6 flex-row justify-between items-center">
      <div className="flex flex-col items-baseline gap-1 hover:opacity-60">
        <h1 className="font-bold text-2xl">{experience.companyName}</h1>
        <p>{experience.positionTitle}</p>
      </div>
      <div onClick={(e) => {
        e.stopPropagation();
        toggleIsVisible();
      }} className="hover:opacity-60">
        {!experience.isHidden ? <EyeIcon size={24} /> : <EyeOffIcon size={24} />}
      </div>
    </button>
  );
}