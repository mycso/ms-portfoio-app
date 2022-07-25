import Form from './styles/Form';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'; 

export default function ContactRequest() {

    const form = useRef();
    const [status, setStatus] = useState(undefined);

    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('service_ipz8izo', 'contact_pj4avag', form.current, 'user_uecjPyjaRPSXr3Lncpkcz')
        .then((result) => {
            console.log(result.text);
            setStatus({type: 'result'});
        }, (error) => {
            console.log(error.text);
            setStatus({type: 'error'})
        });
        form.current.reset()
    };

    return (
        <Form ref={form} onSubmit={handleSubmit}>
            <fieldset>
				<h2>Contact Me</h2>
				<br />
				<h4>Leave a message for me right here and I'll get back to you as soon as I can!</h4>
				<br />
                <p><a className="contact-link" href="mailto:mycso@live.co.uk">Send me an Email</a></p>
                {/* <label htmlFor="name">
					Name
                    <input 
                        type="text" 
                        name="name" 
                        required
                        placeholder="Your Name" 
                        autoComplete="name"
                    />
                </label>
                <label htmlFor="email">
					Email
                    <input 
                        type="email" 
                        name="email" 
                        required
                        placeholder="Your Email Address" 
                        autoComplete="email"
                    />
                </label>
                <label htmlFor="subject">
					Subject
                    <input 
                        type="text" 
                        name="subject" 
                        required
                        placeholder="Subject" 
                        autoComplete="subject"
                    />
                </label>
                <label htmlFor="message">
                    Message
                    <textarea 
                        type="text" 
                        name="message" 
                        placeholder="Message"
                        required
                        rows="10"
                    />
                </label>
                <button type="submit">Send Message</button> */}
                <br/>
                <br/>
                {status?.type === 'result' && <p>Thank you for your message we will be in touch</p>}
                {status?.type === 'error' && (
                    <p>Your message was not sent</p>
                )}
            </fieldset>
        </Form>
    );
}