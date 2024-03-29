import SkillChartSvg from '../assets/skill-chart.svg';

export default function SectionTwo() {
    return (
        <div id= "about" className="container mx-auto p-20">
            <div className="grid grid-cols-2 gap-8">
                <div className="p-4">
                    <p className="text-4xl font-bold mb-4 text-custom-color">About Me</p>
                    <p className="text-custom-color text-lg mb-2">
                        I am a senior at the University of Houston majoring in Management Information Systems, aiming to graduate in December 2024. My previous experience includes:
                    </p>
                    <ul className='list-disc pl-8 text-custom-color'>
                        <li className='mb-2'>
                            <span className='font-bold'>Student Front-end Developer @ The University of Houston:</span> Use HTML, CSS, and JavaScript in a CMS to help enhance the university’s online presence through website improvements.
                        </li>
                        <li>
                            <span className='font-bold'>System Administrator Intern @ Spotify:</span> Worked with the SaaSquatch team with responsibilities ranging from web development to creating legal forms in DocuSign.
                        </li>
                    </ul>
                    <p className="text-custom-color text-lg mb-2">
                        I love to workout, cook new foods, and read (I recently got a Kindle!). Right now, I am looking for an internship or full-time position in Front-end development and want to break into ML.
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <img src={SkillChartSvg} alt="Skill Chart" />
                </div>
            </div>
        </div>
    )
}



