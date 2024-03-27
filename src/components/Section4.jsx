import HtmlLogo from '../assets/html-logo.svg'
import JsLogo from '../assets/javascript-logo.svg'
import SqlLogo from '../assets/sql-logo.svg'
import PythonLogo from '../assets/python-logo.svg'
import DartLogo from '../assets/dart-logo.svg'

export default function SectionFour() {
    return(
        <div className="container mx-auto p-20">
            <div className="grid grid-cols-2 gap-8">
                <div className="p-4">
                <p className="text-4xl font-bold mb-4 text-custom-color">Skills</p>
                <p className="text-2xl font-bold text-custom-color mb-2">Programming Languages:</p>
                <div className="flex justify-between space-x-.05">
                    <div className="flex items-center space-x-1">
                         <img className="w-5" src={HtmlLogo} alt="HTML logo"/>
                        <p>HTML/CSS</p>
                    </div>
                    <div className="flex items-center space-x-1">
                         <img className="w-5" src={JsLogo} alt="HTML logo"/>
                         <p>Javascript/Typescript</p>
                    </div>
                    <div className="flex items-center space-x-1">
                         <img className="w-5" src={SqlLogo} alt="HTML logo"/>
                         <p>SQL</p>
                    </div>
                    <div className="flex items-center space-x-1">
                         <img className="w-5" src={PythonLogo} alt="HTML logo"/>
                         <p>Python</p>
                    </div>
                </div>
                <div className="flex items-center space-x-1 mb-4">
                         <img className="w-5" src={DartLogo} alt="HTML logo"/>
                         <p>Dart</p>
                    </div>
                <p className="text-2xl font-bold text-custom-color">Framework & Tools:</p>
                <div className="flex justify-between space-x-.05">
                    <p>React</p>
                    <p>PostgreSQL</p>
                    <p>Figma</p>
                </div>
                <div className="flex justify-between space-x-.05">
                    <p>Tailwind</p>
                    <p>Django</p>
                    <p>Flutter</p>
                </div>

                </div>
            <div className="flex justify-center items-center">
                
            </div>
            </div>
        </div>
    )
}