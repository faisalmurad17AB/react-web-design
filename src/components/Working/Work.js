import React from 'react'
import './work.css'
const Work = () => {
  return (
    <section className='section-grey' id='how-it-works'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 col-sm-12">
            <h2>How It Works</h2>
            <p>Quis autem velis ets reprehender net etid quiste netsum voluptate. Utise wisi enim minim veniam, quis etsad ets aspernatis netsum stationes nets qualitats.</p>
            <div className="row">
              <div className="col-md-4 col-md-6">
                <div className="testim-plateform first">
                  <p>LinkedIn</p>
                  <div className="testim-rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                </div>
                <div className="testim-plateform">
                  <p>Upwork</p>
                  <div className="testim-rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-1"></div>
          <div className="col-md-6">
            <div className="accordion accordion-flush" id="accordionOne">
              <div className="accordion-item">
                <h2 className='accordion-header' id='headingOne'>
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <i className="bi bi-pencil-fill"></i> Create Account
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionOne">
                  <div className="accordion-body">
                    This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style.
                  </div>
                </div>
              </div>
              <div class="accordion-item">



                <h2 class="accordion-header" id="headingTwo">



                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

                    <i class="bi bi-bar-chart-line-fill"></i> Choose Package
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionOne">
                  <div class="accordion-body">
                    This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
