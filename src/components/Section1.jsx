import { Link } from 'react-scroll';

import MilkCartonSvg from '../assets/milk-carton.svg';
import EggSvg from '../assets/egg.svg';
import BreadSvg from '../assets/bread.svg'
import PeanutSvg from '../assets/peanut.svg'
import ShrimpSvg from '../assets/shrimp.svg'
import SamBitmoji from '../assets/sam-bitmoji.png'


export default function SectionOne() {
    return (
        <>
            {/* Spacer Element */}
            <div id="main" style={{ height: "80px", marginTop: "-80px" }} aria-hidden="true"></div>

            <div className="container mx-auto p-4 sm:p-10 md:p-20" id='section-main'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-4">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-custom-color">Hey! My name is Sam Kotecha.</h2>
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 text-custom-color">Front-End Developer & Aspiring ML Engineer.</p>
                        <Link to="projects" spy={true} smooth={true} offset={50} duration={500}> 
                            <button className="bg-light-blue text-white px-3 py-2 sm:px-4 sm:py-2 rounded transform transition duration-25 hover:scale-105 mb-4 sm:mb-12 text-lg sm:text-xl">Check out my Projects!</button>
                        </Link>
                        <p className="text-xl sm:text-2xl text-custom-color mb-4"><span className="font-bold">Fun Fact:</span> I used to be allergic to the following when I was younger:</p>
                        <div className="flex justify-between flex-wrap">
                            <img className='w-8 md:w-12' src={MilkCartonSvg} alt="Milk Carton"/>
                            <img className='w-8 md:w-12' src={EggSvg} alt="Egg"/>
                            <img className='w-8 md:w-12' src={BreadSvg} alt="Bread"/>
                            <img className='w-8 md:w-12' src={PeanutSvg} alt="Peanut"/>
                            <img className='w-8 md:w-12' src={ShrimpSvg} alt="Shrimp"/>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={SamBitmoji} alt="Sam Kotecha" className="max-w-full h-auto rounded-lg"/>
                    </div>
                </div>
            </div>
        </>
    );
}
