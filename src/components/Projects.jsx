import ProjectCard from "./ProjectCard.jsx";
import chunPreview from "../assets/chun-preview.jpg";
import logo from "../assets/logo.png";

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "Chun Amsterdam",
            description: "Design, Development",
            image: chunPreview,
        },
        {
            id: 2,
            name: "Portfolio Website",
            description: "Design, Development",
            image: logo,
        },
    ];

    return (
        <section
            className="w-full flex flex-col items-center"
            id="projects"
        >
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="w-full h-screen flex justify-center items-center my-16"
                >
                    <div
                        className="w-4/5 h-[80vh] flex items-center justify-center"
                    >
                        <ProjectCard
                            image={project.image}
                            name={project.name}
                            description={project.description}
                        />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Projects;