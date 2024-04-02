import CMPImage from '../assets/cmp-project.png'
import ComingSoon from '../assets/coming-soon.jpg'
import {useState} from 'react'

export default function SectionThree() {
    return(
        <>
            <div id='projects' className="container mx-auto p-20">
                <p className="text-4xl font-bold mb-4 text-custom-color p-4">Projects</p>
                    <Carousel />
            </div>
        </>

    )
}

function Carousel() {
    const data = [
        {
            name: "Spotify CMP Project",
            img: CMPImage,
            snip: "Created a React web application to test cookie banners before they are pushed to production. Solved the problem of having no way to test before submitting changes.",
            skills: "React, Typescript, Next.js, OneTrust",
            link: "cmp-test-website.spotify.com"
        },
        {
            name: "Gym Tracker Project",
            img: ComingSoon,
            snip: "In the works of creating an application to track, measure, and analyze my gym progress. Aims to enforce the principle of 'progressive overload' for continued progress",
            skills: "Coming Soon!",
            link: "#"
        }
    ];

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleClick = (link, event) => {
        if (link === "#") {
            event.preventDefault(); // Prevents default action.
            setShowErrorMessage(true); // Shows the error message.
            setTimeout(() => setShowErrorMessage(false), 3000); // Hides the error message after 3 seconds.
            return;
        }
        window.open(`https://${link}`, "_blank");
    };

    return (
        <div className="flex justify-center items-center py-4">
            <div className="flex flex-nowrap">
                {data.map((d, index) => (
                    <div className="snap-center shrink-0 first:ml-8 last:mr-8 bg-white w-[500px] h-[500px] rounded-xl shadow-xl m-4" key={index}> 
                        <div className="h-3/5 w-full rounded-t-xl overflow-hidden"> 
                            <div style={{ backgroundImage: `url(${d.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                 className="h-full w-full"></div>
                        </div>
                        <div className="flex flex-col items-center gap-4 p-6 h-2/5 text-custom-color"> 
                            <p className="text-xl font-semibold">{d.name}</p>
                            <p className="text-center text-sm">{d.snip}</p>
                            <p className="text-center text-sm"><span className='font-bold'>Skills used:</span> {d.skills}</p>
                            {/* Update or remove the <a> tag based on the link. */}
                            <button onClick={(e) => handleClick(d.link, e)} className="px-6 py-3 bg-light-blue text-white rounded transform transition duration-25 hover:scale-105">
                                Click to view!
                            </button>
                            {d.name === "Gym Tracker Project" && showErrorMessage && (
                                <p className="text-custom-color text-xs mt-2 fade-in-out">
                                    This project is still in the works. Please check back later!
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
}
