import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function RenderSkills({ skill }) {
  return (
    <button className="flex w-full bg-white cursor-pointer  p-6 flex-row justify-between items-center">
      <div className="flex flex-col items-baseline gap-1 hover:opacity-60">
        <h1 className="font-bold text-2xl">{skill.skill}</h1>
        <p>{skill.subSkill}</p>
      </div>
      <div className="hover:opacity-60">
          <EyeIcon size={24} />
      </div>
    </button>
  );
}
