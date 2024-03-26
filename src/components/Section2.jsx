import SkillChartSvg from '../assets/skill-chart.svg'


export default function SectionTwo() {
    return(
        <div className="container mx-auto p-20">
            <div class="grid grid-cols-2 gap-8">
                <div class="p-4">
                <p class="text-4xl font-bold mb-4 text-custom-color">About Me</p>
                <p className="text-custom-color">I am a Senior at the University of Houston planning to graduate in December 2024. I work as a student front-end developer for my university, helping
                    enhcance its reputation through online improvements. I was a System Administrator intern at Spotify in Summer 2023, where I created a React web application
                    to test cookie banners. I love to workout, cook, and read (I recently got a Kindle!). I am looking for a internship or full-time position in Front-end developement
                    and want to break into ML.
                </p>
                </div>
            <div class="flex justify-center items-center">
                <img src = {SkillChartSvg} />
            </div>
        </div>
            
        </div>
    )
}