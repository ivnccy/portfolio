const ProjectCard = ({ name, description, image }) => {
    return (
        <div className="flex flex-col justify-start items-stretch p-4">
            <div className="w-full aspect-[2/3] md:aspect-[16/9] overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
            </div>
            <div className="flex flex-row gap-4 mt-4 px-2 items-center">
                <p className="font-light text-lg">{name}</p>
                <p className="text-gray-500 font-light text-sm">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;