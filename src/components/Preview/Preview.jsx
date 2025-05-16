export default function Preview({ personalInfo }) {
  return (
    <div className="bg-white w-3xl p-15 text-[#303F9F] h-[80vh]">
      <section className="formOne space-y-3 flex flex-row justify-between">
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row gap-x-3">
            <h1 className="font-bold text-3xl">{personalInfo.fullName}</h1>
            <span className="italic text-2xl p-1">{personalInfo.jobTitle}</span>
          </div>
          <div className="grid grid-cols-1 gap-1">
            <p>{personalInfo.email}</p>
            <p>{personalInfo.phone}</p>
            <p>{personalInfo.location}</p>
          </div>
        </div>
        <div className="rounded-full overflow-hidden w-32 h-32">
            <img className="" src={personalInfo.previewpfp} alt="preview pfp" />
        </div>
      </section>
    </div>
  );
}
