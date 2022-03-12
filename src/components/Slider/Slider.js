import React from 'react'
import './slider.css'
import SliderCard from './SliderCards'
const Slider = () => {
  return (
    <section className='section-grey small-padding-bottom'>
      <div className="conatiner">
        <div className="row">
          <div className="col-md-12 mx-auto padding-top-10 padding-bottom-30">
            <div id="carouselTestimonials" className="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselTestimonials" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselTestimonials" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselTestimonials" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                {SliderCard.map(card =>(

                <div className="carousel-item active">
                  <div className="row align-item-center testin-inner">
                    <div className="col-md-6">
                      <div className="video-popup-wrapper margin-right-25">
                        <div className="popup-gallery">
                          <img src={card.img} alt="pic" className='width-100 image-shadow video-popup-image responsive-bottom-margins' />
                          <a class="popup4 video-play-icon" href="https://www.youtube.com/watch?v=FPfQMVf4vwQ" >
                                <i >{card.icon}</i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6 testim-info'>
                      <i className='bi bi-chat-left-quote green'></i>
                      <p>{card.desc}</p>
                      <h6>{card.name}<span>  {card.position} <span class="red">{card.mail}</span></span> </h6>
                    </div>
                  </div>
                </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Slider
