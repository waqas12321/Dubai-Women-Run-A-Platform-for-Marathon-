import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const RoutesData = (prop) => {
    const {value}=prop;
   
if(!value){
    return null;
}
else{


  return (
    <Wrapper>
        <div className='heading'>
       {value.heading}
       
        </div>
     
            <div className='img'>
    <img src={value.image} alt="route"/>
            </div>
    </Wrapper>
  )
}
}

export default RoutesData;
const Wrapper=styled.div`





@media screen and (min-width: 0px) and (max-width: 599px){
    margin-top: 20px;
    margin-bottom:130px;
    display:flex;
    flex-direction:column;

 
    width:100%;
    .heading{
        color: #A3258E;
        font-family: Inter;
       padding-left:30px;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 31.905px */
    margin-bottom: 15px;
    }
    
    
    .img img{
      
        width: 100%;
    height: 268px;
    }
}
@media screen and (min-width: 600px) and (max-width: 959px){
    margin-top: 20px;
    margin-bottom:130px;
    display:flex;
    flex-direction:column;
   width:100%;
   padding-left:30px;
    .heading{
        color: #A3258E;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%; /* 71.785px */
    margin-bottom: 15px;
    }
    
    
    .img img{
      
        width: 80%;
        height: 45vw;
    }
}
@media screen and (min-width: 960px) and (max-width: 1279px){
    margin-top: 20px;
    margin-bottom:130px;
    display:flex;
    flex-direction:column;
   width:100%;
   padding-left:30px;
    .heading{
        color: #A3258E;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%; /* 71.785px */
    margin-bottom: 15px;
    }
    
    
    .img img{
      
        width: 80%;
        height: 45vw;
    }
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
  
    margin-top: 20px;
    margin-bottom:130px;
    display:flex;
    flex-direction:column;
   width:100%;
   padding-left:120px;
    .heading{
        color: #A3258E;
    font-family: Inter;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%; /* 71.785px */
    margin-bottom: 15px;
    }
    
    
    .img img{
      
        width: 80%;
        height: 45vw;
    }
}
@media screen and (min-width: 1921px)
{
    margin-top: 20px;
    margin-bottom:130px;
    display:flex;
    flex-direction:column;
   width:100%;
   padding-left:150px;
    .heading{
        color: #A3258E;
    font-family: Inter;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%; /* 71.785px */
    margin-bottom: 15px;
    }
    
    
    .img img{
      
        width: 80%;
        height: 45vw;
    }
}
`