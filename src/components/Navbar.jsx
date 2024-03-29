import {Link} from 'react-scroll'

export default function Navbar() {
    return(
        <>
            <nav className="flex justify-between items-center py-4 px-40">
                <div className="logo">
                    <a href="#" className="text-xl"><b className="text-custom-color">Sam</b>K</a>
                </div>
                <div className="nav-items flex gap-x-8 mr-40">
                    <Link className="text-custom-color hover:text-light-blue hover-effect hover: px-4 py-2 font-bold cursor-pointer" to = "about" spy = {true} smooth = {true} offset = {50} duration={500}>About</Link>
                    <Link className="text-custom-color hover:text-light-blue hover-effect hover: px-4 py-2 font-bold cursor-pointer" to = "projects" spy = {true} smooth = {true} offset = {50} duration={500}>Projects</Link>
                    <Link className="text-custom-color hover:text-light-blue hover-effect hover: px-4 py-2 font-bold cursor-pointer" to = "skills" spy = {true} smooth = {true} offset = {50} duration={500}>Skills</Link>
                    <Link to = "contact" spy = {true} smooth = {true} offset = {50} duration={500}>
                        <button className="bg-light-blue text-white px-4 py-2 rounded transform transition duration-25 hover:scale-105">Contact Me!</button>
                    </Link>
                </div>
            </nav>
        </>
    )

}