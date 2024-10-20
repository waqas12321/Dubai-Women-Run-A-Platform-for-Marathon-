import React from 'react'
import { styled } from 'styled-components'
import Header from '../Components/Header1'
import Footer from '../Components/Footer'
import EventFlowSlide from '../Components/EventFlowSlide'
import Policies from '../Components/Policies'

import EventFlowTable from '../Components/EventFlowTable'
import { NavLink } from 'react-router-dom'

const EventFlow = () => {
  return (
   <Wrapper>
    <Header/>
    <div>
        <EventFlowTable/>
    </div>
   
    <div className='dwr__2023'>
    DWR 2023
    </div>
    <div className='event__flow__slide'>
       <EventFlowSlide/>
    </div>
    <div className='Policies'>
    <Policies/>

    </div>

   

    <Footer/>
   </Wrapper>
  )
}

export default EventFlow
const Wrapper=styled.div`
margin-bottom:100px;
width:100%;




.event__flow__slide{
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:60px;


}

@media screen and (min-width: 0px) and (max-width: 599px){
    .dwr__2023{
        color: #A6A6A6;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 25.524px */
padding-left:30px;
    margin-top: 65px;
  
    }
}
@media screen and (min-width: 600px) and (max-width: 959px){
    .dwr__2023{
        color: #A6A6A6;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 25.524px */
padding-left:30px;
    margin-top: 65px;
  
    }  
}
@media screen and (min-width: 960px) and (max-width: 1279px){
    .dwr__2023{
        color: #A6A6A6;
        font-family: Inter;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 25.524px */
padding-left:30px;
    margin-top: 65px;
  
    }
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
    .dwr__2023{
        color: #A6A6A6;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 25.524px */
padding-left:120px;
    margin-top: 65px;
  
    }
}
@media screen and (min-width: 1921px){
    .dwr__2023{
        color: #A6A6A6;
        font-family: Inter;
        font-size: 26px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 25.524px */
padding-left:150px;
    margin-top: 65px;
  
    }
}



`