function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16" id="hero">
            <div className="text-4xl sm:text-5xl text-left sm:max-w-3xl w-full">
                <p>hi, i’m ivan.</p>
                <p>
                    a <span className="text-red-500 font-semibold">software engineering</span> student.
                </p>
            </div>
        </section>
    );
}

export default Hero;
