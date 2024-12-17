import logo from '/src/assets/logo.svg'

const Header = () => {
    return (
        <header className="w-full py-4 text-sm sticky top-0 z-10">
            <div className="flex justify-between items-center px-4">
                <a href="#hero" className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="w-6 h-6" />
                </a>
                <div className="ml-auto space-x-2">
                    <a
                        href="#about-me"
                        className="text-gray-500 no-underline hover:text-black"
                    >
                        about me
                    </a>
                    <a
                        href="#projects"
                        className="text-gray-500 no-underline hover:text-black"
                    >
                        projects
                    </a>
                    <a
                        href="#footer"
                        className="text-gray-500 no-underline hover:text-black"
                    >
                        contact
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;