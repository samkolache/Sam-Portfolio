import { useState } from 'react';
import emailjs from '@emailjs/browser'
import EmailIcon from '../assets/email-logo.svg';
import LinkedinLogo from '../assets/linkedin-logo.svg';

export default function SectionFive() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/
            );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = {};

        if (!formData.name) {
            errors.name = "Name is required.";
        }

        if (!formData.email) {
            errors.email = "Email is required.";
        } else if (!validateEmail(formData.email)) {
            errors.email = "Email is not valid.";
        }

        if (!formData.message) {
            errors.message = "Message is required.";
        } else if (formData.message.length > 300) {
            errors.message = "Message cannot exceed 300 characters.";
        }

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            emailjs.sendForm('service_st5k7ks', 'template_8q6fngr', e.target, 'Om_iyl_xu9XLYwusi')
                .then((result) => {
                    console.log(result.text);
                    setSubmitSuccess(true);
                    setTimeout(() => setSubmitSuccess(false), 5000);
                }, (error) => {
                    console.log(error.text);
                });
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }
    };

    return(
        <div id='contact' className="container mx-auto p-20">
            <div className="grid grid-cols-2 gap-8">
                <div className="p-4">
                    <p className="text-4xl font-bold mb-4 text-custom-color">Get in Touch</p>
                    <p className="mb-10 text-custom-color text-lg">
                        Hey! Thanks for viewing my portfolio website. If you would like to contact me, fill out the form below. 
                        You can also reach out via Linkedin or email if you prefer. I look forward to hearing from you! - <span className='font-bold'>Sam</span>K
                    </p>
                    <div className="flex items-center space-x-1 mb-2">
                        <img className="w-7" src={EmailIcon} alt="Email"/>
                        <a href="mailto:abc@example.com" className="underline text-custom-color text-lg">sameerzkotecha@gmail.com</a>
                    </div>
                    <div className="flex items-center space-x-1">
                        <img className="w-7" src={LinkedinLogo} alt="LinkedIn"/>
                        <a href="https://www.linkedin.com/in/sameer-z-kotecha/" className="underline text-custom-color text-lg" target="_blank" rel="noreferrer">linkedin.com/in/sameer-z-kotecha</a>
                    </div>
                </div>
                <div className='p-4 relative'>
                    <p className="text-4xl font-bold mb-4 text-custom-color">Say Hi :)</p>
                    <form className="space-y-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-custom-color">Name</label>
                            <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your name" />
                            {formErrors.name && <p className="text-red-500 text-xs">{formErrors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-custom-color">Email</label>
                            <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="you@example.com" />
                            {formErrors.email && <p className="text-red-500 text-xs">{formErrors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-custom-color">Message</label>
                            <textarea id="message" name="message" onChange={handleChange} value={formData.message} rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Write something..."></textarea>
                            {formErrors.message && <p className="text-red-500 text-xs">{formErrors.message}</p>}
                        </div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-light-blue hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Send Message
                        </button>
                        {submitSuccess && <p className="text-green-500 text-xs absolute bottom-full left-0 fade-in-out font-bold">Success, the email has been sent.</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}
