import React from 'react'
import './features.css'
import FeatureItems from './FeatureItems'
const Features = () => {
  return (
    <section class="section-grey medium-padding-bottom" id="features">
      <div className="container">
          <div className="row">
              <div className="col-md-12 text-center">
                  <h2>Amazing Features</h2>
              </div>
          </div>
          <div className="row">
              {FeatureItems.map(item =>(

              <div className="col-md-4">
                  <div className="feature-box light-green">
                      <i>{item.icon}</i>
                      <div className="feature-box-text">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                      </div>
                  </div>
              </div>
              ))}
          </div>
      </div>
    </section>
  )
}

export default Features
