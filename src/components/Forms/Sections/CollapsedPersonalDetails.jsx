import { Edit, Mail, Phone, MapPin } from "lucide-react";

export default function CollapsedPersonalDetails({ handleDisplayContentPersonalDetails, personalInfo }) {
  return (
    <button onClick={handleDisplayContentPersonalDetails} className="bg-white p-10 rounded-3xl flex flex-col cursor-pointer hover:opacity-80">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-medium">{personalInfo.fullName}</h1>
          <span className="text-xl text-gray-400 font-light">{personalInfo.jobTitle}</span>
        </div>
        <div className="-m-4 mb-auto bg-pink-400 p-1 rounded-full">
          <Edit size={18} color="white" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center gap-4">
        <div className="flex flex-col gap-y-2 flex-1">
          <p className="flex items-center gap-2 w-full">
            <Mail size={18} />
            <span className="truncate">{personalInfo.email}</span>
          </p>
          <p className="flex items-center gap-2 w-full">
            <Phone size={18} />
            <span className="truncate">{personalInfo.phone}</span>
          </p>
          <p className="flex items-center gap-2 w-full">
            <MapPin size={18} />
            <span className="truncate">{personalInfo.location}</span>
          </p>
        </div>
        <div className="flex-shrink-0">
          <img src={personalInfo.previewpfp} className="w-32 h-32 rounded-full" alt="preview pfp" />
        </div>
      </div>
    </button>
  );
}
