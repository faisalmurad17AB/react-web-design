import React from 'react'
 import './home.css'
import ui from '../images/ui-design.png'
const Home = () => {
    return (
        <section className='home-section' id='home'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1>Discover the World's Most Advanced Online Tool
                            <i className='bi bi-chat-left-quote green'></i>
                        </h1>
                        <p className='hero-text'>Track and analyze all your data in one central location.</p>
                        <div className="newsletter_form_box">
                            <p className="newsletter_success_box d-none">
                            We received your message and you'll hear from us soon. Thank You!
                            </p>
                            <form action="" id='newsletter-form' className='newsletter-form' method='post'>
                                <input type="email" id='email_newsletter' name='nf_email' placeholder='Enter Your Email' />
                                <input type="submit" value='GET STARTED!' id='submit-button-newsletter' />
                            </form>
                            <p class="newsletter-form-terms">
                                <span><i class="bi bi-check2"></i> Free 30-Day Trial</span>
                                <span><i class="bi bi-check2"></i> Money Back Guarantee</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={ui} alt="pic" className='hero-image width-100 margin-top-20' />
                    </div>
                </div>
            </div>

        </section>
)
}

export default Home
