import React from 'react'
import './tech.css'
import { TechCards } from './Techcards'

const Technologies = () => {
  return (
    <section className='section-grey small-padding-top'>
      <div className="container">
          <div className="row">
              <div className="col-md-12 text-center padding-bottom-20">
                  <h3>Trusted By Over 9,000+ Businesses</h3>
              </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-md-1"></div>
              {TechCards.map(tech =>(

              <div className="col-md-2 col-xs-6" key={tech.id}>
              <div class="our-partners">
              <img src={tech.img} className="width-100" alt="..."/>
              </div>
              </div>
              ))}
          </div>
      </div>
    </section>
  )
}

export default Technologies
