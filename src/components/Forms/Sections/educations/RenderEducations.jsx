import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function RenderEducations({ education, setEducations }) {
  function toggleIsVisible() {
    setEducations(prevEducations => prevEducations.map(edu =>
      edu.degree === education.degree ? { ...edu, isHidden: !edu.isHidden } : edu
    ));
  }

  return (
    <button className="flex w-full bg-white cursor-pointer p-6 flex-row justify-between items-center">
      <div className="flex flex-col items-baseline gap-1 hover:opacity-60">
        <h1 className="font-bold text-2xl">{education.degree}</h1>
        <p>{education.schoolName}</p>
      </div>
      <div onClick={(e) => {
        e.stopPropagation();
        toggleIsVisible();
      }} className="hover:opacity-60">
        {!education.isHidden ? <EyeIcon size={24} /> : <EyeOffIcon size={24} />}
      </div>
    </button>
  );
}
