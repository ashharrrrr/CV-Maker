import { Plus } from "lucide-react";

export default function AddEducations({
  educations,
  handleDisplayContentEducationsForm,
  addNewEducation,
}) {
  const newEducationObject = {
    degree: "",
    schoolName: "",
    location: "",
    startDate: "",
    endDate: "",
  };

  return (
    <div
      key={"AddEducations"}
      className="bg-white flex items-center justify-center p-5 rounded-b-2xl">
      <button
        onClick={(e) => handleDisplayContentEducationsForm(educations, newEducationObject)}
        className="border-1 border-gray-200 gap-2 flex px-10 py-2 rounded-full font-bold font-mono hover:opacity-60 cursor-pointer text-m">
        <Plus size={24} />
        Education
      </button>
    </div>
  );
}
