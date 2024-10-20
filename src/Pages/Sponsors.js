import React from 'react'
import { styled } from 'styled-components';
import Header from '../Components/Header1';
import Footer from '../Components/Footer';
import SponsorSlider from '../Components/SponsorsSlider';

const Sponsors = () => {
  return (
   <Wrapper>
    <Header/>
    <div className='spon'>
      <div className='spon__1'>
        <div className='spon__1__1'>Types of Sponsorship
Available</div>
        <div className='spon__1__2'>
            <ul>
                <li>Title Sponsorship</li>
                <li>Bronze Sponsorship</li>
                <li>Silver Sponsorship</li>
                <li>Gold Sponsorship</li>
                <li>Support Sponsorship</li>
            </ul>
        </div>
      </div>
      
      
      
      <div className='spon__2'>
<div className='spon__2__1'>
<div>For more Information contact</div>
<div>Yasmeen@plandadv.com</div>
<div>Leny@planbadv.com</div>
</div>

        
       
      </div>

    </div>
   <div className='sponsor'>
   <SponsorSlider/>
   </div>
    <Footer/>

   </Wrapper>
  )
}

export default Sponsors;
const Wrapper=styled.div`

@media screen and (min-width: 0px) and (max-width: 599px){


  .spon{
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    
    padding-left:30px;
    
  }
  .spon__1{
      display:flex;
      flex-direction:column;
      width: 100vw;
      padding-left: 0px;
      margin-top: 60px;
 
     
      text-align:start;
     
     
  }
  .spon__1__1{
    color: #A3258E;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 159.523%; /* 28.714px */
      width:100%;

      
  }
  .spon__1__2{
    margin-top:35px;

    display:flex;
    flex-direction:column;
    align-items:start;
 


 
  }
  .spon__2{
    width: 90%;
  background-image: url("/images/sponsor.webp");
  background-position: center;
  background-repeat: no-repeat;


  
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 20.573px;
  font-style: normal;
  font-weight: 400;
  line-height: 159.523%;
  height:642px;
    
  }
  .spon__2__1{
    position:none;
    bottom:none;
    color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 19.444px;
  font-style: normal;
  font-weight: 600;
  line-height: 175.523%;

  
  }
  .spon__2__1 div{
  
    padding: 12px 0px;

    text-align: center;
  }
  .spon__1__2 ul li{
    
  
    color: #2E2E2E;
    font-family: Inter;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 228.9%; /* 38.913px */
  margin: 12px 0px;

  text-align:left;
 




  
  
  }
}
@media screen and (min-width: 600px) and (max-width: 959px) {
  .spon{
    width:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: space-between;
    
    padding-left:30px;
    
  }
  .spon__1{
      display:flex;
      flex-direction:column;
      width: 45%;
      padding-left: 0px;
      margin-top: 60px;
 
     
      text-align:start;
     
     
  }
  .spon__1__1{
    color: #A3258E;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 159.523%; /* 28.714px */
      width:100%;

      
  }
  .spon__1__2{
    margin-top:35px;

    display:flex;
    flex-direction:column;
    align-items:start;
 


 
  }
  .spon__2{
    width: 45%;
  background-image: url("/images/sponsor.webp");
  background-position: center;
  background-repeat: no-repeat;
 

  
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 22.573px;
  font-style: normal;
  font-weight: 400;
  line-height: 159.523%;
  height:642px;
    
  }
  .spon__2__1{
    position:none;
    bottom:none;
    color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 20.444px;
  font-style: normal;
  font-weight: 600;
  line-height: 175.523%;

  
  }
  .spon__2__1 div{
  
    padding: 12px 0px;

    text-align: center;
  }
  .spon__1__2 ul li{
    
  
    color: #2E2E2E;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 228.9%; /* 38.913px */
  margin: 12px 0px;

  text-align:left;
 




  
  
  }
}
  

@media screen and (min-width: 960px) and (max-width: 1279px){
  .spon{
    width:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: space-between;
    
    padding-left:30px;
    
  }
  .spon__1{
      display:flex;
      flex-direction:column;
      width: 45%;
      padding-left: 0px;
      margin-top: 60px;
 
     
      text-align:start;
     
     
  }
  .spon__1__1{
    color: #A3258E;
    font-family: Inter;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 159.523%; /* 28.714px */
      width:100%;

      
  }
  .spon__1__2{
    margin-top:35px;

    display:flex;
    flex-direction:column;
    align-items:start;
 


 
  }
  .spon__2{
    width: 45%;
  background-image: url("/images/sponsor.webp");
  background-position: center;
  background-repeat: no-repeat;
 

  
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;


  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 22.573px;
  font-style: normal;
  font-weight: 400;
  line-height: 159.523%;
  height:642px;
   
  }
  .spon__2__1{
    position:none;
    bottom:none;
    color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 21.444px;
  font-style: normal;
  font-weight: 600;
  line-height: 175.523%;


  
  }
  .spon__2__1 div{
  
    padding: 12px 0px;

    text-align: center;
  }
  .spon__1__2 ul li{
    
  
    color: #2E2E2E;
    font-family: Inter;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: 228.9%; /* 38.913px */
  margin: 12px 0px;

  text-align:left;
 




  
  
  }
}

@media screen and (min-width: 1280px) and (max-width: 1919px){
  .spon{
    width:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: space-between;
    
    padding-left:120px;
  
  }
  .spon__1{
      display:flex;
      flex-direction:column;
      width: 30%;
      padding-left: 0px;
      margin-top: 60px;
 
     
      text-align:start;
     
     
  }
  .spon__1__1{
    color: #A3258E;
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 159.523%; /* 28.714px */
      width:100%;

      
  }
  .spon__1__2{
    margin-top:35px;

    display:flex;
    flex-direction:column;
    align-items:start;
 


 
  }
  .spon__2{
    width: 60%;
  background-image: url("/images/sponsor.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
 

  
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 23.573px;
  font-style: normal;
  font-weight: 400;
  line-height: 159.523%;
  height:642px;
    
  }
  .spon__2__1{
    position:none;
    bottom:none;
    color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 22.444px;
  font-style: normal;
  font-weight: 600;
  line-height: 175.523%;

  
  }
  .spon__2__1 div{
  
    padding: 12px 0px;

    text-align: center;
  }
  .spon__1__2 ul li{
    
  
    color: #2E2E2E;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 228.9%; /* 38.913px */
  margin: 12px 0px;

  text-align:left;
 




  
  
  }
  .sponsor{
    margin-top:-20px;
  }
}
@media screen and (min-width: 1921px){
  
  .spon{
    width:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: space-between;
    
    padding-left:150px;

    
  }
  .spon__1{
      display:flex;
      flex-direction:column;
      width: 20%;
      padding-left: 0px;
      margin-top: 60px;
 
     
      text-align:start;
     
     
  }
  .spon__1__1{
    color: #A3258E;
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 159.523%; /* 28.714px */
      width:100%;

      
  }
  .spon__1__2{
    margin-top:35px;

    display:flex;
    flex-direction:column;
    align-items:start;
 


 
  }
  .spon__2{
    width: 70%;
  background-image: url("/images/sponsor.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
 

  
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 24.573px;
  font-style: normal;
  font-weight: 400;
  line-height: 159.523%;
  height:842px;
    
  }
  .spon__2__1{
    position:none;
    bottom:none;
    color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 23.444px;
  font-style: normal;
  font-weight: 600;
  line-height: 175.523%;

  
  }
  .spon__2__1 div{
  
    padding: 12px 0px;

    text-align: center;
  }
  .spon__1__2 ul li{
    
  
    color: #2E2E2E;
    font-family: Inter;
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: 228.9%; /* 38.913px */
  margin: 12px 0px;

  text-align:left;
 




  
  
  }
    
}
`