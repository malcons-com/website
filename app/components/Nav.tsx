import Logo from '../../public/static/images/malcons-no-bg.png';

const Nav = () => {
    return (
        <header className="w-full text-white backdrop-filter backdrop-blur-md sticky top-0 z-10 px-8 lg:px-24 xl:px-48">
            <div className="grid grid-cols-2 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3 flex items-center justify-between">
                    <img src={Logo} alt="Malcons" />
                </div>
                <div className="md:col-span-9 items-center flex justify-end flex-row">
                    <a href="/" className="mx-4 text-md">Home</a>
                    <a href="/#about" className="mx-4 text-md">About</a>
                    <a href="/#services" className="mx-4 text-md">Services</a>
                    <a href="/#team" className="mx-4 text-md">Team</a>
                    <a href="/#contact" className="ml-4 text-md">Contact</a>
                </div>
            </div>
        </header>
    );
};

export default Nav;