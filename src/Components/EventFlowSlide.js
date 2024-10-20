import React from 'react'
import { styled } from 'styled-components'
const EventFlowSlide = () => {
  return (
<Wrapper>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/start__line.webp" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h3>Start Line </h3>
     
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/finish__line.webp" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h3>Finish Line </h3>
       
      </div>
    </div>
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</Wrapper>
  )
}

export default EventFlowSlide
const Wrapper=styled.div`
width: 65%;



`