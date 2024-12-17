import ProjectCard from "./ProjectCard.jsx";
import chunPreview from "../assets/chun-preview.jpg";
import logo from "../assets/logo.svg";

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
        <section className="w-full min-h-screen bg-white py-16" id="projects">
            <div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 lg:px-8"
            >
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`${
                            index === 0
                                ? "col-span-2 row-span-2"
                                : "col-span-1 row-span-1"
                        } bg-white rounded-lg shadow-md`}
                    >
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