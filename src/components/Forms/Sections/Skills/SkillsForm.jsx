import { useState, useEffect } from "react";

export default function SkillsForm({
  skills,
  setSkills,
  handleSkillChange,
  currentEditingSkill,
  setDisplayContent
}) {
  const [formData, setFormData] = useState({
    skill: "",
    subSkill: "",
    isVisible: true
  });

  useEffect(() => {
    if (currentEditingSkill) {
      setFormData({
        skill: currentEditingSkill.skill,
        subSkill: currentEditingSkill.subSkill,
        isVisible: currentEditingSkill.isVisible
      });
    } else {
      // Reset form when not editing
      setFormData({
        skill: "",
        subSkill: "",
        isVisible: true
      });
    }
  }, [currentEditingSkill]);

  // Effect to update skills when formData changes
  useEffect(() => {
    if (!formData.skill && !formData.subSkill) return; // Don't update if form is empty

    if (currentEditingSkill) {
      setSkills(prevSkills => prevSkills.map(skill =>
        skill.id === currentEditingSkill.id
          ? { ...skill, ...formData }
          : skill
      ));
    } else {
      // Update the last skill in the list
      setSkills(prevSkills => {
        const lastSkill = prevSkills[prevSkills.length - 1];
        if (!lastSkill) return prevSkills;

        return prevSkills.map((skill, index) =>
          index === prevSkills.length - 1 ? { ...skill, ...formData } : skill
        );
      });
    }
  }, [formData, currentEditingSkill, setSkills]);

  const handleChange = (e) => {
    const { key } = e.target.dataset;
    const newValue = e.target.value;
    setFormData(prev => ({ ...prev, [key]: newValue }));
  };

  const handleReturn = (e) => {
    e.preventDefault();
    // Only return to sections if we have some content
    if (formData.skill || formData.subSkill) {
      setDisplayContent("sections");
    }
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
          onClick={handleReturn}
          className="w-full relative mt-auto bg-gradient-to-r from-pink-500 to-orange-300 text-white cursor-pointer rounded-full py-3 shadow font-bold text-2xl hover:opacity-80">
          Done
        </button>
      </form>
    </div>
  );
}
