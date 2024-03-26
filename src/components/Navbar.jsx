export default function Navbar() {
    return(
        <>
            <nav className="flex justify-between items-center py-4 px-40">
                <div className="logo">
                    <a href="#" className="text-xl"><b className="text-custom-color">Sam</b>K</a>
                </div>
                <div className="nav-items flex gap-x-8 mr-40">
                    <a href="#about" className="text-custom-color hover:text-light-blue hover-effect hover: px-4 py-2 font-bold">About</a>
                    <a href="#projects" className="text-custom-color hover-effect hover:text-light-blue px-4 py-2 font-bold">Projects</a>
                    <a href="#skills" className="text-custom-color hover-effect  hover:text-light-blue px-4 py-2 font-bold">Skills</a>
                    <button className="bg-light-blue text-white px-4 py-2 rounded transform transition duration-25 hover:scale-105">Contact Me!</button>
                </div>
            </nav>
        </>
    )

}