export default function PreviewExperiences({ experiences }){
    return(
        <div className="flex flex-col gap-3 w-full">
            <h1 className="text-center text-xl font-bold bg-[#F0F1F8] w-full">Experiences</h1>
            <div className="text-black p-2 flex flex-wrap gap-5">
                {experiences.map((experience)=> (
                    <div className="w-[45%]" key={experience.companyName}>
                        <h1 className="font-bold">{experience.companyName}</h1>
                        <p className="text-start">{experience.positionTitle}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}