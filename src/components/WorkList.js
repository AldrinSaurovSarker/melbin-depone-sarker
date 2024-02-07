import WorkCard from "./WorkCard"

export default function WorkList({ projects, flag }) {
    return (
        <div className="row">
            {projects.map((project, index) => (
                <WorkCard
                    key={index}
                    project={project}
                    order={index}
                    flag={flag}
                />
            ))}
        </div>
    )
}