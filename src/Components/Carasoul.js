import React from 'react'
import { styled } from 'styled-components'
const Carasoul = () => {
  return (
<Wrapper>
    <div className='car__1'>
        HIGHLIGHTS FROM PREVIOUS EDITION
    </div>
<div  id="carouselExampleCaptions" className="carousel slide car__2" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/car__1.webp" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
 
     
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/car__2.webp" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
       
       
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/car__3.webp" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
       
    
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

export default Carasoul
const Wrapper=styled.div`





@media screen and (min-width: 0px) and (max-width: 599px){
  width: 100%;
  margin-top:30px;
  margin-bottom:50px;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:30px;
  padding-left: 0px;

 
  .car__1{
    color: #A3258E;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%;
    padding-left: 0px;
    width:90%;
  

  }
  .car__2{
    width:90%;
    margin:auto;
  }
}
@media screen and (min-width: 600px) and (max-width: 959px){
  width: 100%;
  margin-top:100px;
  margin-bottom:100px;
  display:flex;
  flex-direction:column;
  gap:30px;
  padding-left: 30px;
 
  .car__1{
    color: #A3258E;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%;
 
    width:90%;

  }
  .car__2{
    width:90%;
    margin:auto;
  }
}
@media screen and (min-width: 960px) and (max-width: 1279px){
  width: 100%;
  margin-top:100px;
  margin-bottom:100px;
  display:flex;
  flex-direction:column;
  gap:30px;
  padding-left: 30px;
 
  .car__1{
    color: #A3258E;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%;
 
    width:90%;

  }
  .car__2{
    width:90%;
    margin:auto;
  }
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
  width: 100%;
  margin-top:30px;
  margin-bottom:100px;
  display:flex;
  flex-direction:column;
  gap:30px;
  justify-content:center;
  
 
 
  .car__1{
    color: #A3258E;
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%;
 
    width:90%;
    padding-left: 120px;

  }
  .car__2{
    width:90%;
    margin:auto;
  }
}
@media screen and (min-width: 1921px){
  width: 100%;
  margin-top:100px;
  margin-bottom:100px;
  display:flex;
  flex-direction:column;
  gap:30px;
  padding-left: 150px;
 
  .car__1{
    color: #A3258E;
    font-family: Inter;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%;
 
    width:90%;

  }
  .car__2{
    width:90%;
    margin:auto;
  }
}
`