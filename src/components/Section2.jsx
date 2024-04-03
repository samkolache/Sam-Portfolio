import SkillChartSvg from '../assets/skill-chart.svg';

export default function SectionTwo() {
    return (
        <>
            <div id="about" style={{ height: "80px", marginTop: "-80px" }} aria-hidden="true"></div>

            <div className="container mx-auto px-4 sm:px-10 md:px-20 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <p className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4 text-custom-color">About Me</p>
                    <p className="text-custom-color text-md md:text-lg lg:text-lg mb-2">
                        I am a senior at the University of Houston majoring in Management Information Systems, aiming to graduate in December 2024. My previous experience includes:
                    </p>
                    <ul className='list-disc pl-4 md:pl-8 lg:pl-8 text-custom-color mb-2'>
                        <li className='mb-2'>
                            <span className='font-bold'>Student Front-end Developer @ The University of Houston(Current):</span> Use HTML, CSS, and JavaScript in a CMS to help enhance the university’s online presence through website improvements.
                        </li>
                        <li>
                            <span className='font-bold'>System Administrator Intern @ Spotify(Summer 2023):</span> Worked with the SaaSquatch team with responsibilities ranging from web development to creating legal forms in DocuSign.
                        </li>
                    </ul>
                    <p className="text-custom-color text-md md:text-lg lg:text-lg mb-2">
                        I love to workout, cook new foods, and read (I recently got a Kindle!). Right now, I am looking for an internship or full-time position in Front-end development.
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <img src={SkillChartSvg} alt="Skill Chart" className="max-w-full h-auto"/>
                </div>
            </div>
        </div>
        </>
    );
}
