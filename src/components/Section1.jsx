import MilkCartonSvg from '../assets/milk-carton.svg';
import EggSvg from '../assets/egg.svg';
import BreadSvg from '../assets/bread.svg'
import PeanutSvg from '../assets/peanut.svg'
import ShrimpSvg from '../assets/shrimp.svg'
import SamBitmoji from '../assets/sam-bitmoji.png'


export default function SectionOne() {
    return(
        <div className="container mx-auto p-20">
            <div className="grid grid-cols-2 gap-8">
                <div className="p-4">
                    <h2 className="text-7xl font-bold mb-4 text-custom-color">Hey! My name is Sam Kotecha</h2>
                    <p className="text-4xl font-bold mb-4 text-custom-color">Front-End Developer & Aspiring ML Engineer</p>
                    <button className="bg-light-blue text-white px-4 py-2 rounded transform transition duration-25 hover:scale-105 mb-12">Check out my Projects!</button>
                    <p className="text-2xl  text-custom-color mb-4"><span className="font-bold">Fun Fact:</span> I used to be allergic to the following when I was younger: </p>
                    <div className="flex justify-between space-x-.4">
                        <img className='w-12' src={MilkCartonSvg}/>
                        <img className='w-12' src={EggSvg}/>
                        <img className='w-12' src={BreadSvg}/>
                        <img className='w-12' src={PeanutSvg}/>
                        <img className='w-12' src={ShrimpSvg}/>
                    </div>
                </div>
            <div className="flex justify-center items-center">
                <img src={SamBitmoji} alt="Your Name" className="max-w-full h-auto rounded-lg"/>
            </div>
        </div>
        </div>
    )
}