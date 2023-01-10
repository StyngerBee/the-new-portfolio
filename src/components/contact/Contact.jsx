import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import emailjs from "emailjs-com";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fxtetpe', 'template_spphl8p', form.current, 'k9vi3J4-qbN7bovzb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <section id={"contact"}>
            
            <h2>Contact</h2>

            <div className={"container contact__container"}>
                <div className={"contact__options"}>
                    <article className={"contact__option"}>
                        <MdOutlineEmail className={"contact__option-icon"}/>
                        <h4>Email</h4>
                        <h5>cdsonics@yahoo.com</h5>
                        <a href={"mailto:cdsonics@yahoo.com"} target={'_blank'} >Send an Email</a>
                    </article>
                    <article className={"contact__option"}>
                        <RiMessengerLine className={"contact__option-icon"}/>
                        <h4>Text</h4>
                        <h5>(904) 540-7706</h5>
                        <a href={"tel:+9045407706"} target={'_blank'} >Send a Text</a>
                    </article>
                    
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type={"text"} name={"name"} placeholder={"Your Full name"} required/>
                    <input type={"email"} name={"email"} placeholder={"Your Email"} required/>
                    <textarea name={"message"} placeholder={"Your Message"} rows={"7"} required></textarea>
                    <button type={"submit"} className={"btn btn-primary"}>Send Message</button>
                </form>
            </div>

        </section>
    )
}

export default Contact