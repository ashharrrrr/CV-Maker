export default function PreviewSkills({ skills }) {
    const visibleSkills = skills.filter(skill => skill.isVisible);

    if (visibleSkills.length === 0) return null;

    return (
        <div className="flex flex-col gap-3 w-full">
            <h1 className="text-center text-xl font-bold bg-[#F0F1F8] w-full">Skills</h1>
            <div className="text-black p-2 flex flex-wrap gap-5">
                {visibleSkills.map((skill) => (
                    <div className="flex flex-col gap-1 w-[45%]" key={skill.skill}>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <h1 className="font-bold">{skill.skill}</h1>
                                <p className="italic">{skill.subSkill}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}