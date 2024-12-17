import ProjectCard from "./ProjectCard.jsx";
import chunPreview from "../assets/chun-preview.jpg";
import logo from "../assets/logo.svg";

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "Chun Amsterdam",
            description: "design, development",
            image: chunPreview,
        },
        {
            id: 2,
            name: "portfolio website",
            description: "design, development",
            image: logo,
        },
    ];

    return (
        <section className="w-full min-h-screen bg-white py-16" id="projects">
            <div className="flex flex-col gap-16 ">
                {projects.map((project) => (
                    <div key={project.id} className="mx-auto">
                        <ProjectCard
                            image={project.image}
                            name={project.name}
                            description={project.description}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;