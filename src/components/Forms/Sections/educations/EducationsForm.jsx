export default function EducationsForm({
    handleEducationChange,
    handleDisplayContentSections,
}) {
    return (
        <div className="flex flex-col space-y-5">
            <form className="bg-white w-full h-auto rounded-2xl shadow-md space-y-6 p-8 flex flex-col">
                <h1 className="font-bold text-3xl md:text-4xl">Create Education</h1>
                <div className="flex flex-col">
                    <label
                        htmlFor="degree"
                        className="text-medium font-bold text-gray-700 p-1">
                        Degree
                        <span className="px-1 font-semibold text-red-400">*</span>
                    </label>
                    <input
                        type="text"
                        className="mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none"
                        id="degree"
                        placeholder="Enter Degree"
                        data-key="degree"
                        onChange={handleEducationChange}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        className="text-medium font-bold text-gray-700 p-1"
                        htmlFor="schoolName">
                        School Name
                        <span className="px-2 font-semibold text-gray-400">optional</span>
                    </label>
                    <input
                        type="text"
                        className="mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none"
                        id="schoolName"
                        placeholder="Enter School Name"
                        data-key="schoolName"
                        onChange={handleEducationChange}
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
                        onChange={handleEducationChange}
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
                            onChange={handleEducationChange}
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
                            onChange={handleEducationChange}
                        />
                    </div>
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
