export default function SkillsForm({
  handleSkillChange,
  handleDisplayContentSections,
  handleSkillsPreview,
}) {
  return (
    <div className="flex flex-col space-y-5">
      <form className="bg-white w-2xl h-[30vh] p-8 rounded-2xl shadow-md space-y-8 flex flex-col">
        <h1 className="font-bold text-4xl">Create Skills</h1>
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
            onChange={handleSkillChange}
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
            onChange={handleSkillChange}
          />
        </div>
        <button
          onClick={handleDisplayContentSections}
          className="w-full relative mt-auto bg-gradient-to-r from-pink-500 to-orange-300 text-white cursor-pointer rounded-full py-3 shadow font-bold text-2xl hover:opacity-80">
          Save
        </button>
      </form>
    </div>
  );
}
