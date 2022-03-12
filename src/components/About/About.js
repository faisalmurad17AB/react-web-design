import React from 'react'
import './about.css'
import { AboutCards } from './AboutCard'
const About = () => {
  return (
    <section className='section-white' id='about'>
        <div className="conatiner">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>How It Works</h2>
                </div>
                  {AboutCards.map(card =>(
                <div className="col-md-4">

                  <div className="main-services">
                   <i>{card.icon}</i> 
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                </div>
                  ))}

            </div>
            </div> 
    </section>
  )
}

export default About
