function Footer() {
    return (
        <div className="w-full">
            <section className="w-full min-h-screen  flex justify-center items-center text-black">
                <a
                    href="mailto:ivanccy04@gmail.com"
                    className="text-9xl no-underline hover:text-gray-700"
                >mail
                </a>
            </section>

            <footer className="w-full py-4 text-sm" id="footer">
                <div className="flex justify-between items-center px-4">
                    <div>
                        <p className="text-gray-500">&copy; {new Date().getFullYear()} Ivan Chan</p>
                    </div>
                    <div className="flex gap-2">
                        <a
                            href="https://www.linkedin.com/in/ivanccy/"
                            className="text-gray-500 no-underline hover:text-gray-700"
                        >LinkedIn
                        </a>
                        <a
                            href="https://github.com/ivnccy"
                            className="text-gray-500 no-underline hover:text-gray-700"
                        >GitHub
                        </a>
                    </div>
                    <div>
                        <a
                            href="mailto:ivanccy04@gmail.com"
                            className="text-black no-underline"
                        > ivanccy04@gmail.com
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;