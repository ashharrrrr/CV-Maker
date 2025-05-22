import { useState, useEffect } from "react";

export default function SkillsForm({
  skills,
  setSkills,
  handleSkillChange,
  handleDisplayContentSections,
  currentEditingSkill
}) {
  const [formData, setFormData] = useState({
    skill: "",
    subSkill: ""
  });

  useEffect(() => {
    if (currentEditingSkill) {
      setFormData({
        skill: currentEditingSkill.skill,
        subSkill: currentEditingSkill.subSkill
      });
    }
  }, [currentEditingSkill]);

  const handleChange = (e) => {
    const { key } = e.target.dataset;
    setFormData(prev => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentEditingSkill) {
      // Edit existing skill
      setSkills(prevSkills => prevSkills.map(skill =>
        skill.id === currentEditingSkill.id
          ? { ...skill, ...formData }
          : skill
      ));
    } else {
      // Add new skill
      const newSkill = {
        id: Date.now(),
        ...formData,
        isVisible: true
      };
      setSkills(prev => [...prev, newSkill]);
    }
    handleDisplayContentSections(e);
  };

  return (
    <div className="flex flex-col space-y-5">
      <form className="bg-white w-full h-auto rounded-2xl shadow-md space-y-6 p-8 flex flex-col">
        <h1 className="font-bold text-3xl md:text-4xl">
          {currentEditingSkill ? "Edit Skill" : "Create Skills"}
        </h1>
        <div className="flex flex-col">
          <label
            htmlFor="skill"
            className="text-medium font-bold text-gray-700 p-1">
            Skill
            <span className="px-1 font-semibold text-red-400">*</span>
          </label>
          <input
            type="text"
            className="mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none"
            id="skill"
            placeholder="Enter Skill"
            data-key="skill"
            value={formData.skill}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-medium font-bold text-gray-700 p-1"
            htmlFor="subSkill">
            Information / Sub-skills
            <span className="px-2 font-semibold text-gray-400">optional</span>
          </label>
          <input
            type="text"
            className="mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none"
            id="subSkill"
            placeholder="Enter information or sub-skills"
            data-key="subSkill"
            value={formData.subSkill}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full relative mt-auto bg-gradient-to-r from-pink-500 to-orange-300 text-white cursor-pointer rounded-full py-3 shadow font-bold text-2xl hover:opacity-80">
          {currentEditingSkill ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
}
