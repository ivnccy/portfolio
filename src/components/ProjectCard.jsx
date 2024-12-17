const ProjectCard = ({ name, description, image }) => {
    return (
        <div
            className="flex flex-col justify-start items-stretch p-8 bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
        >
            <img
                src={image}
                alt={name}
                className="w-full max-w-[95vw] rounded-lg"
            />
            <div className="flex items-center gap-4 mt-4 px-0 max-w-full justify-start">
                <p className="text-black text-lg">{name}</p>
                <p className="text-gray-500 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;