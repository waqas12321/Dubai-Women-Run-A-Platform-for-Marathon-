import React from 'react'
import { styled } from 'styled-components';
import Header1 from '../Components/Header1';
import Footer from '../Components/Footer';
import { useCampaignHook } from '../Context/CampignContext';
import WomenSubstanceData from '../Components/WomenSubstanceData';




const WomenSubstanceToday = () => {
    const {todayData}=useCampaignHook();
    console.warn(todayData);
    
   
    
 

  return (
   <Wrapper>
    <div>
        <Header1/>
    </div>
<div className='main'>
<div className='heading' onClick={()=>{
  console.warn("hello")
}}>
    Women of Substance - TODAY
    </div>
    <div className='para'>
    Our 10 WoS will actively contribute to raising awareness and enlightening their followers and sphere of influence via videos, articles, and posts, as well as through live events, thereby connecting with families and society through a robust network of women.

    </div>
    <div className='data'>
 {
    todayData.map((currElem)=>{
        return <WomenSubstanceData {...currElem} />
    })
 }
    </div>
</div>

    <div>
        <Footer/>
    </div>
   </Wrapper>
  )
}

export default WomenSubstanceToday;
const Wrapper=styled.div`



@media screen and (min-width: 0px) and (max-width: 599px){
  width:100%;

  .main{
      margin-top: 20px;
      animation: wE 0.75s;
      display: flex;
      flex-direction: column;
      align-items: start;
    
     
     
      animation: wE 0.75s;
    
    
      @keyframes wE {
        from {
          opacity: 0;
          transform: rotateX(-10deg); 
        }
        to {
          opacity: 1; 
          transform: rotateX(0); 
        }
      }
  }
  .heading{
      color: #A3258E;
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 159.523%; /* 31.905px */
      position: relative;
  right: 0px;

  margin: 10px 0px;
  width:100%;
  padding-left: 30px;

  
  }
  .para{
      color: #2E2E2E;
      font-family: Inter;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 227%; /* 38.59px */
  width:90%;
  padding-left: 30px;


  }
  .data{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 45px;
      width: 100%;
      justify-content:center;
  
   
      gap: 20px;
      width:100%;
      margin-bottom:70px;
    
      
  
    
  }
}

@media screen and (min-width: 600px) and (max-width: 959px){
  width:100%;

  .main{
      margin-top: 20px;
      animation: wE 0.75s;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 30px;
     
      animation: wE 0.75s;
    
    
    
      @keyframes wE {
        from {
          opacity: 0;
          transform: rotateX(-10deg); 
        }
        to {
          opacity: 1; 
          transform: rotateX(0); 
        }
      }
  }
  .heading{
      color: #A3258E;
      font-family: Inter;
      font-size: 21px;
      font-style: normal;
      font-weight: 600;
      line-height: 159.523%; /* 31.905px */
      position: relative;

  margin: 10px 0px;
  width:100%;
  right: 0px;

  
  }
  .para{
      color: #2E2E2E;
      font-family: Inter;
      font-size: 17px;
      font-style: normal;
      font-weight: 500;
      line-height: 227%; /* 38.59px */
      width:100%;
     
  }
  .data{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 45px;
      width: 100%;
      justify-content:start;
  
   
      gap: 20px;
      margin-bottom:70px;
      width:100%;
   
    
  
    
  }
}
@media screen and (min-width: 960px) and (max-width: 1279px){
  width:100%;

  .main{
      margin-top: 20px;
      animation: wE 0.75s;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 30px;
     
      animation: wE 0.75s;
    
    
      @keyframes wE {
        from {
          opacity: 0;
          transform: rotateX(-10deg); 
        }
        to {
          opacity: 1; 
          transform: rotateX(0); 
        }
      }
  }
  .heading{
      color: #A3258E;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 159.523%; /* 31.905px */
      position: relative;
  right: 0px;
  margin: 10px 0px;
  width:100%;

  
  }
  .para{
      color: #2E2E2E;
      font-family: Inter;
      font-size: 19px;
      font-style: normal;
      font-weight: 500;
      line-height: 227%; /* 38.59px */
      width:100%;
  }
  .data{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 45px;
      width: 100%;
      justify-content:start;
  
   
      gap: 20px;
      margin-bottom:70px;
  
    
  }
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
  width:100%;

  .main{
      margin-top: 20px;
      animation: wE 0.75s;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 120px;
     
      animation: wE 0.75s;
    
    
      @keyframes wE {
        from {
          opacity: 0;
          transform: rotateX(-10deg); 
        }
        to {
          opacity: 1; 
          transform: rotateX(0); 
        }
      }
  }
  .heading{
      color: #A3258E;
      font-family: Inter;
      font-size: 27px;
      font-style: normal;
      font-weight: 600;
      line-height: 159.523%; /* 31.905px */
      position: relative;
  right: 0px;
  margin: 10px 0px;
  width:100%;

  
  }
  .para{
      color: #2E2E2E;
      font-family: Inter;
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: 227%; /* 38.59px */
      width:100%;
  }
  .data{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 45px;
      width: 100%;
      justify-content:start;
  
   
      gap: 20px;
      margin-bottom:70px;
  
    
  }
}
@media screen and (min-width: 1921px){
  width:100%;

  .main{
      margin-top: 20px;
      animation: wE 0.75s;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 150px;
     
      animation: wE 0.75s;
    
    
      @keyframes wE {
        from {
          opacity: 0;
          transform: rotateX(-10deg); 
        }
        to {
          opacity: 1; 
          transform: rotateX(0); 
        }
      }
  }
  .heading{
      color: #A3258E;
      font-family: Inter;
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      line-height: 159.523%; /* 31.905px */
      position: relative;
  right: 0px;
  margin: 10px 0px;
  width:100%;

  
  }
  .para{
      color: #2E2E2E;
      font-family: Inter;
      font-size: 23px;
      font-style: normal;
      font-weight: 500;
      line-height: 227%; /* 38.59px */
      width:100%;
  }
  .data{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 45px;
      width: 100%;
      justify-content:start;
  
   
      gap: 20px;
      margin-bottom:70px;
  
    
  }
}
`