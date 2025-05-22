export default function PreviewExperiences({ experiences }) {
    const visibleExperiences = experiences.filter(experience => !experience.isHidden);

    if (visibleExperiences.length === 0) return null;

    return (
        <div className="flex flex-col gap-3 w-full">
            <h1 className="text-center text-xl font-bold bg-[#F0F1F8] w-full">Experiences</h1>
            <div className="text-black p-2 flex flex-wrap gap-5">
                {visibleExperiences.map((experience) => (
                    <div className="flex flex-col gap-1 w-full" key={experience.companyName}>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <h1 className="font-bold">{experience.positionTitle}</h1>
                                <p className="italic">{experience.companyName}</p>
                            </div>
                            <div>
                                <div className="flex gap-1">
                                    <span>{experience.startDate}</span>
                                    <span>-</span>
                                    <span>{experience.endDate}</span>
                                </div>
                                <p>{experience.location}</p>
                            </div>
                        </div>
                        <div>
                            <span>{experience.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}