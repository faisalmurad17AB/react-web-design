import React from 'react'
import './fact.css'
import { FactCards } from './FactCards'
const Facts = () => {
  return (
    <section className='section-grey medium-padding-bottom'>
      <div className="container">
          <div className="row">
              <div className="col-md-7 mx-auto margin-bottom-10 text-center">
                  <h3>Fun Facts About Our Agency</h3>
              </div>
          </div>
          <div className="row">
              {FactCards.map(cards=>(

              <div className="col-md-2 offset-md-1 fun-facts-box blue text-center">
                  <i>{cards.icon}</i>
                  <p className='fun-facts-title'>
                      <span className="facts-numbers">{cards.number}</span> <br/> {cards.title}
                  </p>
              </div>
              ))}
          </div>
      </div>
    </section>
  )
}

export default Facts
