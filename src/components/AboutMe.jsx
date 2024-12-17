import animoji from "../assets/animoji.jpeg";

const AboutMe = () => {
    return (
        <section
            className="w-full min-h-screen bg-gray-50 px-6 md:px-12 py-16 flex items-center justify-center"
            id="about-me"
        >
            <div className="max-w-4xl mx-auto flex flex-col items-center space-y-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                    About Me
                </h1>

                <div className="text-center space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        I like experimenting with stuff, especially with tech.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Fun fact: I solved a Rubik's cube in 16,94 seconds at a competition.
                    </p>
                </div>

                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg">
                    <img
                        src={animoji}
                        alt="Your Name"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;