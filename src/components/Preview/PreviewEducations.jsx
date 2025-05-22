export default function PreviewEducations({ educations }) {
    const visibleEducations = educations.filter(education => !education.isHidden);

    if (visibleEducations.length === 0) return null;

    return (
        <div className="flex flex-col gap-3 w-full">
            <h1 className="text-center text-xl font-bold bg-[#F0F1F8] w-full">Education</h1>
            <div className="text-black p-2 flex flex-wrap gap-5">
                {visibleEducations.map((education) => (
                    <div className="flex flex-col gap-1 w-full" key={education.degree}>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <h1 className="font-bold">{education.degree}</h1>
                                <p className="italic">{education.schoolName}</p>
                            </div>
                            <div>
                                <div className="flex gap-1">
                                    <span>{education.startDate}</span>
                                    <span>-</span>
                                    <span>{education.endDate}</span>
                                </div>
                                <p>{education.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
