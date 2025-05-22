import { MailIcon, Phone, LocationEdit, Calendar, FlagIcon, Link, GitGraph } from "lucide-react";
import PreviewSkills from "./PreviewSkills";
import PreviewExperiences from "./PreviewExperiences";
import PreviewEducations from "./PreviewEducations";


export default function Preview({ personalInfo, optionalInfo, skills, experiences, educations }) {
  return (
    <div className="bg-white w-[595px] h-[842px] p-8 text-[#303F9F] overflow-y-auto shadow-lg">
      <section className="formOne space-y-3 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-y-2 w-full md:w-2/3">
          <div className="flex flex-col md:flex-row gap-x-3 gap-y-2">
            <h1 className="font-bold text-2xl md:text-3xl">{personalInfo.fullName}</h1>
            <span className="italic text-xl md:text-2xl p-1">{personalInfo.jobTitle}</span>
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
        <div className="rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0">
            <img className="" src={personalInfo.previewpfp} alt="preview pfp" />
        </div>
      </section>
      <section>
        {skills.length > 0 && <PreviewSkills skills={skills} />}
        {educations.length > 0 && <PreviewEducations educations={educations} />}
        {experiences.length > 0 && <PreviewExperiences experiences={experiences} />}
      </section>
    </div>
  );
}
