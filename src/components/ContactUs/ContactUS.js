import React from 'react'
import './contact.css'
const ContactUS = () => {
    return (
        <section className="section-white" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Get in touch</h3>
                        <p className="contact_success_box d-none">We received your message and you'll hear from us soon. Thank You!</p>
                        <form id="contact-form" className="contact" method="post">
                            <input className="contact-input white-input" required="" name="contact_names" placeholder="Full Name*" type="text"/>
                                <input className="contact-input white-input" required="" name="contact_email" placeholder="Email Adress*" type="email"/>
                                    <input className="contact-input white-input" required="" name="contact_phone" placeholder="Phone Number*" type="text" />
                                        <textarea className="contact-commnent white-input" rows="2" cols="20" name="contact_message" placeholder="Your Message..."></textarea>
                                        <input value="Send Message" id="submit-button" className="contact-submit" type="submit" />
                                        </form>
                                    </div>
                                    <div className="col-md-6 responsive-top-margins">
                                        <h3>How to find us</h3>
                                        <iframe className="contact-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9050207912896!2d-0.14675028449633118!3d51.514958479636384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2sOxford+St%2C+London%2C+UK!5e0!3m2!1sen!2sro!4v1485889312335" allowfullscreen></iframe>
                                        <h5>Head Office</h5>
                                        <p className="contact-info"><i className="bi bi-geo-alt-fill"></i> 10 Oxford Street, London, UK, E1 1EC</p>
                                        <p className="contact-info"><i className="bi bi-envelope-open-fill"></i> <a href="mailto:contact@youremail.com">office@smart.co.uk</a></p>
                                        <p className="contact-info"><i className="bi bi-telephone-fill"></i> +44 987 654 321</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        )
}

                        export default ContactUS
