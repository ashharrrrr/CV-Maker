import { MailIcon, Phone, LocationEdit, Calendar, FlagIcon, Link, GitGraph, Download } from "lucide-react";
import PreviewSkills from "./PreviewSkills";
import PreviewExperiences from "./PreviewExperiences";
import PreviewEducations from "./PreviewEducations";
import PreviewModal from "./PreviewModal";
import { useState, useRef } from "react";
import { usePDF } from 'react-to-pdf';
import { DownloadPdfButton } from "../downloadPdf";

export default function Preview({ personalInfo, optionalInfo, skills, experiences, educations }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mainPreviewRef = useRef(null);

  const PreviewContent = () => (
    <div className="h-full" >
      <section className="formOne space-y-3 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-y-2 w-full md:w-2/3">
          <div className="flex flex-row items-baseline gap-x-2">
            <h1 className="font-bold text-2xl">{personalInfo.fullName}</h1>
            <span className="italic text-lg text-gray-600">{personalInfo.jobTitle}</span>
          </div>
          <div className="grid grid-cols-1 gap-1">
            <p className="flex flex-row gap-2 items-center"><MailIcon size={18} />{personalInfo.email}</p>
            <p className="flex flex-row gap-2 items-center"><Phone size={18} />{personalInfo.phone}</p>
            <p className="flex flex-row gap-2 items-center"><LocationEdit size={18} />{personalInfo.location}</p>
            {optionalInfo.dateOfBirth && <p className="flex flex-row gap-2 items-center"><Calendar size={18} />{optionalInfo.dateOfBirth}</p>}
            {optionalInfo.nationality && <p className="flex flex-row gap-2 items-center"><FlagIcon size={18} />{optionalInfo.nationality}</p>}
            {optionalInfo.website && <p className="flex flex-row gap-2 items-center"><Link size={18} />{optionalInfo.website}</p>}
            {optionalInfo.github && <p className="flex flex-row gap-2 items-center"><GitGraph size={18} />{optionalInfo.github}</p>}
          </div>
        </div>
        <div className="rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0">
          <img className="" src={personalInfo.previewpfp} alt="preview pfp" />
        </div>
      </section>
      <section>
        {skills.length > 0 && <PreviewSkills skills={skills} />}
        {experiences.length > 0 && <PreviewExperiences experiences={experiences} />}
        {educations.length > 0 && <PreviewEducations educations={educations} />}
      </section>
    </div>
  );

  return (
    <>
      <div
        ref={mainPreviewRef}
        onClick={() => setIsModalOpen(true)}
        className="bg-white w-full h-full p-8 text-[#303F9F] overflow-y-auto shadow-lg rounded-xl cursor-pointer hover:shadow-xl transition-shadow">
        <PreviewContent />
      </div>
      <div className="flex flex-col items-center mt-4">
        <DownloadPdfButton previewRef={mainPreviewRef} />
      </div>
      <PreviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}>
        <div className="p-8 h-full overflow-y-auto relative">
          <div>
            <PreviewContent />
          </div>
          <div className="fixed right-8 bottom-8 z-50">
            <DownloadPdfButton previewRef={mainPreviewRef} iconOnly />
          </div>
        </div>
      </PreviewModal>
    </>
  );
}
