import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from 'styled-components'

import { useSponsorshipHook } from '../Context/SponsorshipContext';
import Slider from "react-slick";


const SponsorSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const {sponsorshipData}=useSponsorshipHook();
  console.warn(sponsorshipData);
  return (
 <Wrapper>
  <div className='spon__heading'>
    Our Partners
  </div>
  <Slider style={{width:"80%",margin:"auto"}} {...settings}>
   
   {
   sponsorshipData && sponsorshipData.map((currElem)=>{
        return(
          <div className='spon__1'>
          <div className='spon__1__a'>{currElem.name}</div>
  <div className='spon__1__b'>
  <img style={{width:"140px",height:"100px"}}  src={currElem.image} alt="pic not found"  />
  </div>
  
      </div>
        )
    })
   }
   </Slider>
   </Wrapper>
 
  

  )
}

export default SponsorSlider
const Wrapper=styled.div`





@media screen and (min-width: 0px) and (max-width: 599px){
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  gap: 0px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 99%, 0% 38%);
  height: 40vh;
  padding-top: 30px;
  background-color: #FFE9FA;

 
  .spon__heading{
    color: #A3258E;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%;
    padding-left: 30px;
    width: 310px;
  }
   .spon__1{
  
    border-right: 0.691px solid #2E2E2E;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      height: 20vh;

      width: 20%;
  
      
    
      
  }
  .spon__1__a{
    color: #2E2E2E;
    text-align: center;
    font-family: Inter;
    font-size: 13.894px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%; /* 22.164px */
  
  width: 184.562px;
  margin:auto;

  
  
  
  }
  
  .spon__1__b{
    
    width: 142.68px;
    height: 107.938px;
   
    margin: auto;
    display: flex;
    justify-content: center;
    margin-top:0px;
  
  
  }
  img{
    width: 142.68px;
    height: 87.938px;
  
  }
}
@media screen and (min-width: 600px) and (max-width: 959px){
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  gap: 0px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 99%, 0% 38%);
  height:40vh;
  padding-top: 30px;
  background-color: #FFE9FA;
  padding-left: 30px;
  .spon__heading{
    color: #A3258E;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%;
   
    width: 310px;
  }
   .spon__1{
  
    border-right: 0.691px solid #2E2E2E;
      display:flex;
      flex-direction:column;
      justify-content:center;
      height: 100px;
  
     
      width: 20%;
    
      
    
      
  }
  .spon__1__a{
    color: #2E2E2E;
    text-align: center;
    font-family: Inter;
    font-size: 13.894px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%; /* 22.164px */
  
  width: 184.562px;
  margin:auto;

  
  
  
  }
  
  .spon__1__b{
    
    width: 142.68px;
    height: 107.938px;
   
    margin: auto;
    display: flex;
    justify-content: center;
    margin-top:0px;
  
  
  }
  img{
    width: 142.68px;
    height: 87.938px;
  
  }
}
@media screen and (min-width: 960px) and (max-width: 1279px){
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 150px;
  gap: 0px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 99%, 0% 38%);
  height: 50vh;
  padding-top: 30px;
  background-color: #FFE9FA;
  padding-left: 30px;
  .spon__heading{
    color: #A3258E;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%;
   
    width: 310px;
  }
   .spon__1{
  
    border-right: 0.691px solid #2E2E2E;
      display:flex;
      flex-direction:column;
      justify-content:center;
      height: 100px;
  
     
      width: 20%;
    
      
    
      
  }
  .spon__1__a{
    color: #2E2E2E;
    text-align: center;
    font-family: Inter;
    font-size: 13.894px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%; /* 22.164px */
  
  width: 184.562px;
  margin:auto;

  
  
  
  }
  
  .spon__1__b{
    
    width: 142.68px;
    height: 107.938px;
   
    margin: auto;
    display: flex;
    justify-content: center;
    margin-top:0px;
  
  
  }
  img{
    width: 142.68px;
    height: 87.938px;
  
  }
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 150px;
  gap: 0px;
  clip-path: polygon(83% 0, 100% 21%, 100% 100%, 0 100%, 0 13%);
  height: 60vh;
  padding-top: 90px;
  background-color: #FFE9FA;
  padding-left: 120px;
  .spon__heading{
    color: #A3258E;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 138.5%; /* 76.175px */
  margin-bottom:35px;
  }
   .spon__1{
  
    border-right: 0.691px solid #2E2E2E;
      display:flex;
      flex-direction:column;
      justify-content:center;
      height: 160px;
  
     
      width: 20%;
    
      
  }
  .spon__1__a{
    color: #2E2E2E;
  text-align: center;
  font-family: Inter;
  font-size: 15.972px;
  font-style: normal;
  font-weight: 600;
  line-height: 159.523%; /* 28.67px */
  
  width: 184.562px;
  margin:auto;
  
  
  }
  
  .spon__1__b{
    
    height: 170.751px;
    width: 190.562px;
   
    margin: auto;
    display: flex;
    justify-content: center;
    margin-top:40px;
  
  
  }
  img{
    width: 190.562px;
  height: 150.751px;
  }
  
}
@media screen and (min-width: 1921px){
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 150px;
  gap: 55px;
  clip-path: polygon(83% 0, 100% 21%, 100% 100%, 0 100%, 0 13%);
  height: 50vh;
  padding-top: 120px;
  background-color: #FFE9FA;
  padding-left: 150px;
  .spon__heading{
    color: #A3258E;
  font-family: Inter;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 138.5%; /* 76.175px */
  margin-bottom:35px;
  }
   .spon__1{
  
    border-right: 0.691px solid #2E2E2E;
      display:flex;
      flex-direction:column;
      justify-content:center;
      height: 160px;
  
     
      width: 20%;
    
      
  }
  .spon__1__a{
    color: #2E2E2E;
  text-align: center;
  font-family: Inter;
  font-size: 15.972px;
  font-style: normal;
  font-weight: 600;
  line-height: 159.523%; /* 28.67px */
  
  width: 184.562px;
  margin:auto;
  
  
  }
  
  .spon__1__b{
    
    height: 170.751px;
    width: 190.562px;
   
    margin: auto;
    display: flex;
    justify-content: center;
    margin-top:40px;
  
  
  }
  img{
    width: 190.562px;
  height: 150.751px;
  }
}

`



 