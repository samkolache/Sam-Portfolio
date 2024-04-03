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
        <>
          <div id="skills" style={{ height: "80px", marginTop: "-80px" }} aria-hidden="true"></div>

        <div className="container mx-auto px-5 py-10 md:px-20 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <p className="text-3xl md:text-4xl font-bold mb-4 text-custom-color">Skills</p>
                    <p className="text-xl md:text-2xl font-bold text-custom-color mb-2">Programming Languages:</p>
                <div className="flex flex-wrap justify-start gap-2 mb-4">
                    <div className="flex items-center gap-1">
                         <img className="w-5" src={HtmlLogo} alt="HTML logo"/>
                        <p className='text-custom-color text-lg'>HTML/CSS</p>
                    </div>
                    <div className="flex items-center gap-1">
                         <img className="w-5" src={JsLogo} alt="HTML logo"/>
                         <p className='text-custom-color text-lg'>Javascript/Typescript</p>
                    </div>
                    <div className="flex items-center gap-1">
                         <img className="w-5" src={SqlLogo} alt="HTML logo"/>
                         <p className='text-custom-color text-lg'>SQL</p>
                    </div>
                    <div className="flex items-center gap-1">
                         <img className="w-5" src={PythonLogo} alt="HTML logo"/>
                         <p className='text-custom-color text-lg'>Python</p>
                    </div>
                    <div className="flex items-center gap-1">
                         <img className="w-5" src={DartLogo} alt="HTML logo"/>
                         <p className='text-custom-color text-lg'>Dart</p>
                    </div>
                </div>
                <p className="text-xl md:text-2xl font-bold text-custom-color mb-2">Framework & Tools:</p>
                <div className="flex flex-wrap justify-start gap-2">
                    <div className="flex items-center gap-1">
                            <img className="w-5" src={ReactLogo} alt="HTML logo"/>
                            <p className='text-custom-color text-lg'>React</p>
                    </div>
                    <div className="flex items-center gap-1">
                         <img className="w-6" src={PostgreLogo} alt="HTML logo"/>
                         <p className='text-custom-color text-lg'>PostgreSQL</p>
                    </div>
                    <div className="flex items-center gap-1">
                         <img className="w-5" src={FigmaLogo} alt="HTML logo"/>
                         <p className='text-custom-color text-lg'>Figma</p>
                    </div>
                    <div className="flex items-center gap-1">
                         <img className="w-5" src={TailwindLogo} alt="HTML logo"/>
                         <p className='text-custom-color text-lg'>Tailwind</p>
                    </div>
                    <div className="flex items-center gap-1">
                         <img className="w-5" src={DjangoLogo} alt="HTML logo"/>
                         <p className='text-custom-color text-lg'>Django</p>
                    </div>
                    <div className="flex items-center gap-1">
                         <img className="w-5" src={FlutterLogo} alt="HTML logo"/>
                         <p className='text-custom-color text-lg'>Flutter</p>
                    </div>
                </div>
                </div>
                <div className='flex justify-center items-center'>
                    <a href='https://sameer-kotecha-resume.tiiny.site/' target='_blank'>
                         <button className="bg-light-blue text-white px-4 md:px-6 py-2 md:py-3 text-md md:text-lg rounded-lg transform transition duration-300 hover:scale-105">Check out my Resume!</button>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}