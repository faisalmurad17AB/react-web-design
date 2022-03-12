import React from 'react'
import './detail.css'
import marketing from '../images/digital-marketing.png'
const Detail = () => {
  return (
    <section className='section-white' id='home'>
      <div className="container">
          <div className="row align-items-center">
              <div className="col-md-6">
                  <h3>Discover how we can help you to grow your business fast.</h3>
                    <p>Anticas quia voluptas sit aspernatur netsum demo ets ipsam voluptatem lorem fugit, seditum netis velas net nesciunt. </p>
                    <ul className="benefits"> 
                      <li> <i class="bi bi-check2"></i>Quias netus magni netsum qui ratione sequi</li>
                       <li><i class="bi bi-check2"></i>Venis ratione sequi netus enim tempor magni.</li>
                       <li><i class="bi bi-check2"></i>Enim ipsam netus voluptatem voluptas.</li>    
                    </ul>
                    <a href='#' className='scrool'><button type='button' className='btn btn-lg btn-primary'>Discover More</button></a>
              </div>
              <div className="col-md-6">
                  <img src={marketing} alt="pic" className="width-100 responsive-top-margins green" />
              </div>
          </div>
      </div>
    </section>
  )
}

export default Detail
