import EmailIcon from '../assets/email-logo.svg'
import LinkedinLogo from '../assets/linkedin-logo.svg'

export default function SectionFive() {
    return(
        <div className="container mx-auto p-20">
            <div className="grid grid-cols-2 gap-8">
                <div className="p-4">
                    <p className="text-4xl font-bold mb-4 text-custom-color">Get in Touch</p>
                    <p className="mb-4 text-custom-color">Thank you for showing interest! If you would like to contact me, fill out the form! You can 
                    also contact me via Linkedin or email too. I look forward to hearing from you! - Sam
                    </p>
                    <div className="flex items-center space-x-1 mb-2">
                        <img className="w-7" src={EmailIcon}/>
                        <a href = "mailto: abc@example.com" className="underline text-custom-color">sameerzkotecha@gmail.com</a>
                    </div>
                    <div className="flex items-center space-x-1">
                        <img className="w-7" src={LinkedinLogo}/>
                        <a href = "https://www.linkedin.com/in/sameer-z-kotecha/" className="underline text-custom-color" target="_blank">linkedin.com/in/sameer-z-kotecha</a>
                    </div>
                </div>
                <div className='p-4'>
                <p className="text-4xl font-bold mb-4 text-custom-color">Say Hi :)</p>
                <form className="space-y-4 max-w-lg mx-auto">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-custom-color">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-custom-color">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="you@example.com" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-custom-color">Message</label>
                        <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Write something..."></textarea>
                    </div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-light-blue transform transition duration-25 hover:scale-105 ">
                        Send Message
                    </button>
                </form>
                </div>
            </div>
        </div>
    )
}