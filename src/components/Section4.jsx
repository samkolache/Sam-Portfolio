import HtmlLogo from '../assets/html-logo.svg'
import JsLogo from '../assets/javascript-logo.svg'
import SqlLogo from '../assets/sql-logo.svg'
import PythonLogo from '../assets/python-logo.svg'
import DartLogo from '../assets/dart-logo.svg'
import ReactLogo from '../assets/react-logo.svg'
import PostgreLogo from '../assets/postgre-sql.svg'
import FigmaLogo from '../assets/figma-logo.svg'
import TailwindLogo from '../assets/tailwind-logo.svg'
import DjangoLogo from '../assets/django-logo.svg'
import FlutterLogo from '../assets/flutter-logo.svg'

export default function SectionFour() {
    return(
        <div className="container mx-auto p-20">
            <div className="grid grid-cols-2 gap-8">
                <div className="p-4">
                <p className="text-4xl font-bold mb-4 text-custom-color">Skills</p>
                <p className="text-2xl font-bold text-custom-color mb-2">Programming Languages:</p>
                <div className="flex flex-wrap justify-start space-x-4">
                    <div className="flex items-center space-x-1">
                         <img className="w-5" src={HtmlLogo} alt="HTML logo"/>
                        <p className='text-custom-color'>HTML/CSS</p>
                    </div>
                    <div className="flex items-center space-x-1">
                         <img className="w-5" src={JsLogo} alt="HTML logo"/>
                         <p className='text-custom-color'>Javascript/Typescript</p>
                    </div>
                    <div className="flex items-center space-x-1">
                         <img className="w-5" src={SqlLogo} alt="HTML logo"/>
                         <p className='text-custom-color'>SQL</p>
                    </div>
                    <div className="flex items-center space-x-1">
                         <img className="w-5" src={PythonLogo} alt="HTML logo"/>
                         <p className='text-custom-color'>Python</p>
                    </div>
                </div>
                <div className="flex items-center space-x-1 mb-4">
                         <img className="w-5" src={DartLogo} alt="HTML logo"/>
                         <p className='text-custom-color'>Dart</p>
                    </div>
                <p className="text-2xl font-bold text-custom-color mb-2">Framework & Tools:</p>
                <div className="flex flex-wrap justify-start space-x-4">
                    <div className="flex items-center space-x-1">
                            <img className="w-5" src={ReactLogo} alt="HTML logo"/>
                            <p className='text-custom-color'>React</p>
                    </div>
                    <div className="flex items-center space-x-1">
                         <img className="w-5" src={PostgreLogo} alt="HTML logo"/>
                         <p className='text-custom-color'>PostgreSQL</p>
                    </div>
                    <div className="flex items-center space-x-1">
                         <img className="w-5" src={FigmaLogo} alt="HTML logo"/>
                         <p className='text-custom-color'>Figma</p>
                    </div>
                    <div className="flex items-center space-x-1">
                         <img className="w-5" src={TailwindLogo} alt="HTML logo"/>
                         <p className='text-custom-color'>Tailwind</p>
                    </div>
                    <div className="flex items-center space-x-1">
                         <img className="w-5" src={DjangoLogo} alt="HTML logo"/>
                         <p className='text-custom-color'>Django</p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-start space-x-4">
                    <div className="flex items-center space-x-1">
                         <img className="w-5" src={FlutterLogo} alt="HTML logo"/>
                         <p className='text-custom-color'>Flutter</p>
                    </div>
                </div>
                </div>
                <div className='flex justify-center items-center'>
                <button className="bg-light-blue text-white px-6 py-3 text-lg rounded-lg transform transition duration-25 hover:scale-105">Check out my Resume!</button>
                </div>
            </div>
        </div>
    )
}