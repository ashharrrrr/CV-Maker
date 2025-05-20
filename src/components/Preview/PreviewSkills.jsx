export default function PreviewSkills({ skills }){
    return(
        <div className="flex flex-col gap-3 w-full">
            <h1 className="text-center text-xl font-bold bg-[#F0F1F8] w-full">Skills</h1>
            <div className="text-black p-2 flex flex-wrap gap-5">
                {skills.map((skill)=> (
                    <div className="w-[45%]" key={skill.skill}>
                        <h1 className="font-bold">{skill.skill}</h1>
                        <p className="text-start">{skill.subSkill}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}