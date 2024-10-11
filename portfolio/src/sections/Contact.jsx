import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react';
import Alert from '../components/Alert';
import useAlert from '../hooks/useAlert';

const Contact = () => {
    const formRef = useRef();
    const { alert, showAlert } = useAlert();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check if screen width is less than 768px

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_gn1rjo8',
                'template_58vzn0k',
                {
                    from_name: form.name,
                    to_name: 'Aayush',
                    to_email: 'aayushmehta02@gmail.com',
                    from_email: form.email,
                    message: form.message,
                },
                'HE590tv6aI7jkUCn6'
            );
            setLoading(false);
            showAlert({ type: 'success', message: 'Your message has been sent!' });
            setForm({ name: '', email: '', message: '' });
        } catch (error) {
            console.error(error);
            setLoading(false);
            showAlert({ type: 'error', message: 'Uh-oh, something went wrong!' });
        }
    };

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768); // Update isMobile on resize
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
    }, []);

    return (
        <section className="c-space my-20" id="contact">
            {alert.show && <Alert {...alert} />}

            <div className="relative min-h-screen flex items-center justify-center flex-col ">
                {!isMobile && <img src="/assets/image.png" alt="terminal-bg" className="absolute inset-0 min-h-screen rounded-lg" />} {/* Conditionally render image */}
                
                <div className="contact-container absolute top-1/2 transform -translate-x-1 flex flex-col items-center">
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-4 flex flex-col space-y-7 w-full max-w-[400px] md:max-w-[800px] lg:max-w-[1000px] bg-gray-1000 p-6 rounded-lg shadow-lg backdrop-blur-sm" // Adjust width based on screen size
                    >
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
