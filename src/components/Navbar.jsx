export default function Navbar() {
    return(
        <>
            <nav className="flex justify-between items-center py-4 px-40 bg-white shadow-md">
                <div className="logo">
                    <a href="#" className="text-xl"><b className="text-custom-color">Sam</b>K</a>
                </div>
                <div className="nav-items flex gap-x-8 mr-40">
                    <a href="#about" className="text-custom-color px-4 py-2">About</a>
                    <a href="#projects" className="text-custom-color px-4 py-2">Projects</a>
                    <a href="#skills" className="text-custom-color px-4 py-2">Skills</a>
                    <button className="bg-light-blue text-white px-4 py-2 rounded">Contact Me!</button>
                </div>
            </nav>
        </>
    )

}