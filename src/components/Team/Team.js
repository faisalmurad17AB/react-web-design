import React from 'react'
import './team.css'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <section className='section-white medium-padding-bottom' id='team'>
      <div className="container">
          <div className="row">
              <div className="col-md-12 text-center">
                  <h2>Meet Our Team</h2>
              </div>
              {TeamCard.map(team =>(

              <div className="col-sm-12 col-md-4 margin-top-30">
                  <img src={team.img} alt="pic" className='team-img width-100' />
                  <div className="team-item">
                      <h4>{team.name}</h4>
                      <div className="team-info">
                          <p>{team.postion}</p>
                      </div>
                      <p>{team.desc}</p>
                      <ul className='team-icon'>
                      <li><a href="#" className="twitter"><i className="bi bi-twitter"></i></a></li>
                      <li><a href="#" className="pinterest"><i className="bi bi-instagram"></i></a></li>
                      <li><a href="#" className="facebook"><i className="bi bi-mic"></i></a></li>
                      <li><a href="#" className="dribble"><i className="bi bi-envelope-open"></i></a></li>
                      </ul>
                  </div>
              </div>
              ))}
          </div>

      </div>
    </section>
  )
}

export default Team
