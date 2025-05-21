export default function ExperiencesForm({
  handleExperienceChange,
  handleDisplayContentSections,
}) {
  return (
    <div className="flex flex-col space-y-5">
      <form className="bg-white w-full h-auto rounded-2xl shadow-md space-y-6 p-8 flex flex-col">
        <h1 className="font-bold text-3xl md:text-4xl">Create Experiences</h1>
        <div className="flex flex-col">
          <label
            htmlFor="jobProfile"
            className="text-medium font-bold text-gray-700 p-1">
            Job Title
            <span className="px-1 font-semibold text-red-400">*</span>
          </label>
          <input
            type="text"
            className="mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none"
            id="jobProfile"
            placeholder="Enter Job Title"
            data-key="positionTitle"
            onChange={handleExperienceChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-medium font-bold text-gray-700 p-1"
            htmlFor="companyName">
            Company Name
            <span className="px-2 font-semibold text-gray-400">optional</span>
          </label>
          <input
            type="text"
            className="mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none"
            id="companyName"
            placeholder="Enter information or sub-skills"
            data-key="companyName"
            onChange={handleExperienceChange}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-medium font-bold text-gray-700 p-1"
            htmlFor="location">
            Location
            <span className="px-2 font-semibold text-gray-400">optional</span>
          </label>
          <input
            type="text"
            className="mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none"
            id="location"
            placeholder="Enter Location"
            data-key="location"
            onChange={handleExperienceChange}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6">
          <div className="flex flex-col">
            <label
              className="text-medium font-bold text-gray-700 p-1"
              htmlFor="startDate">
              Start Date
              <span className="px-2 font-semibold text-gray-400">optional</span>
            </label>
            <input
              type="text"
              className="mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none"
              id="startDate"
              placeholder="Enter Start Date"
              data-key="startDate"
              onChange={handleExperienceChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-medium font-bold text-gray-700 p-1"
              htmlFor="endDate">
              End Date
              <span className="px-2 font-semibold text-gray-400">optional</span>
            </label>
            <input
              type="text"
              className="mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none"
              id="endDate"
              placeholder="Enter End Date"
              data-key="endDate"
              onChange={handleExperienceChange}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label
            className="text-medium font-bold text-gray-700 p-1"
            htmlFor="description">
            Description
            <span className="px-2 font-semibold text-gray-400">optional</span>
          </label>
          <textarea
            className="mt-1 p-2 h-[10vh] bg-gray-100 border-0 rounded-lg focus:outline-none"
            id="description"
            placeholder="Enter Description"
            data-key="description"
            onChange={handleExperienceChange}
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
