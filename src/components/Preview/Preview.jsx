import { MailIcon, Phone, LocationEdit, Calendar, FlagIcon, Link, GitGraph } from "lucide-react";
import PreviewSkills from "./PreviewSkills";


export default function Preview({ personalInfo, optionalInfo, skills }) {
  return (
    <div className="bg-white w-3xl p-15 text-[#303F9F] h-[80vh]">
      <section className="formOne space-y-3 flex flex-row justify-between">
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row gap-x-3">
            <h1 className="font-bold text-3xl">{personalInfo.fullName}</h1>
            <span className="italic text-2xl p-1">{personalInfo.jobTitle}</span>
          </div>
          <div className="grid grid-cols-1 gap-1">
            <p className="flex flex-row gap-2 items-center"><MailIcon size={18} />{personalInfo.email}</p>
            <p className="flex flex-row gap-2 items-center"><Phone size={18}/>{personalInfo.phone}</p>
            <p className="flex flex-row gap-2 items-center"><LocationEdit size={18}/>{personalInfo.location}</p>
            {optionalInfo.dateOfBirth && <p className="flex flex-row gap-2 items-center"><Calendar size={18}/>{optionalInfo.dateOfBirth}</p>}
            {optionalInfo.nationality && <p className="flex flex-row gap-2 items-center"><FlagIcon size={18}/>{optionalInfo.nationality}</p>}
            {optionalInfo.website && <p className="flex flex-row gap-2 items-center"><Link size={18}/>{optionalInfo.website}</p>}
            {optionalInfo.github && <p className="flex flex-row gap-2 items-center"><GitGraph size={18}/>{optionalInfo.github}</p>}
          </div>
        </div>
        <div className="rounded-full overflow-hidden w-32 h-32">
            <img className="" src={personalInfo.previewpfp} alt="preview pfp" />
        </div>
      </section>
      <section>
        {skills.length > 0 && <PreviewSkills skills={skills} />}
      </section>
    </div>
  );
}
