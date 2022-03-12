import React from 'react'
import './ceo.css'
import testimonials from '../images/team002.jpg'
const CeoCard = () => {
  return (
    <section className="section-white no-padding-bottom">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6 text-center">
                <p className="testimonial-single">“People who succeed in business aren't afraid to hear feedback from their customers - they actually thrive from it.”</p>
                <h5 className="margin-bottom-5">Johanna S. Richardson</h5>
                <p className="blue">CEO Essentials</p>
            </div>
            <div className="col-md-6">
                <img src={testimonials} className="width-100" alt="pic" />
            </div>
        </div>
    </div>
</section>
  )
}

export default CeoCard
