import { useState } from 'react';
import { Link } from 'react-scroll';
import BurgerMenu from '../assets/menu-image.svg'; // Your custom burger menu SVG

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-6 lg:px-40 bg-nav-color">
                <div className="logo">
                    <Link className='text-xl cursor-pointer' to='main' spy = {true} smooth = {true} offset={50} duration={500}><b className='text-custom-color'>Sam</b>K</Link>
                </div>
                {/* Custom Burger Icon */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img src={BurgerMenu} alt="Menu" className="h-6 w-6" />
                    </button>
                </div>
                {/* Menu Items */}
                <div className={`nav-items ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex lg:flex-row gap-x-8 mr-40`}>
                    <Link className="text-custom-color hover:text-light-blue px-4 py-2 font-bold cursor-pointer" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                    <Link className="text-custom-color hover:text-light-blue px-4 py-2 font-bold cursor-pointer" to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
                    <Link className="text-custom-color hover:text-light-blue px-4 py-2 font-bold cursor-pointer" to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                        <button className="bg-light-blue text-white px-4 py-2 rounded transform transition duration-25 hover:scale-105">Contact Me!</button>
                    </Link>
                </div>
            </nav>
        </>
    );
}
