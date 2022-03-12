import React from 'react'
import './price.css'
import PriceCard from './PriceCards'
const Price = () => {
  return (
    <section className='section-white' id='pricing'>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center padding-bottom-40">
            <h2>Pricing fro every business, at any stage</h2>
          </div>
          {
            PriceCard.map(price => (
              <div className="col-md-4">
                <div className="price-box">
                  <ul className="pricing-list">
                    <li className="price-title">{price.title}</li>
                    <li className="price-value">{price.value}</li>
                    <li className="price-subtitle">{price.subtitle}</li>
                    <li className="price-text"><i>{price.icon}</i>{price.price.custom}</li>
                    <li className="price-text"><i>{price.icon}</i>{price.price.mailbox}</li>
                    <li className="price-text"><i>{price.icon}</i>{price.price.free}</li>
                    <li className="price-text"><i>{price.icon}</i>{price.price.api}</li>
                    <li className="price-tag-line"><a href="#">FREE 15-DAY TRIAL</a></li>
                  </ul>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Price
