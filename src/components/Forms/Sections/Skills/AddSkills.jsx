import { Plus } from "lucide-react";

export default function AddSkills({ skills, handleDisplayContentSkillsForm }) {
  const handleAddSkill = () => {
    const newSkillsObject = {
      id: Date.now(),
      skill: "",
      subSkill: "",
      isVisible: true
    };
    handleDisplayContentSkillsForm(skills, newSkillsObject);
  };

  return (
    <div
      key={"AddSkills"}
      className="bg-white flex items-center justify-center p-5 rounded-b-2xl">
      <button
        onClick={handleAddSkill}
        className="border-1 border-gray-200 gap-2 flex px-10 py-2 rounded-full font-bold font-mono hover:opacity-60 cursor-pointer text-m">
        <Plus size={24} />
        Add Skill
      </button>
    </div>
  );
}
