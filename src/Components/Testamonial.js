import React from 'react'
import { styled } from 'styled-components'

const Testamonial = () => {
  return (
    <Wrapper>
     <div className='test__heading'>
     Testimonials
     </div>
     <div className='test__con'>
     <div className='test'>
            <div className='test__1'>MAI DUBAI CITY HALF MARATHON 2021</div>
            <div className='test__2'></div>
            <div className='test__3'>We were all so pleased to have been able to participate in the Mai Dubai City Half Marathon during this pandemic. Thank you to the organiser for making this happen “</div>
            <div className='test__4'>Dennis Onwongwa</div>
        </div>
        <div className='test'>
            <div className='test__1'>MAI DUBAI CITY HALF MARATHON 2021</div>
            <div className='test__2'></div>
            <div className='test__3'>This was my third 10km and I can absolutely say without a doubt it was one of the friendliest runs I’ve ever run! My friends and I can’t stop thinking about what a great day it was! The race shirts are great and super nice volunteers”</div>
            <div className='test__4'>Ashish Chopra</div>
        </div>
        <div className='test'>
            <div className='test__1'>MAI DUBAI CITY HALF MARATHON 2021</div>
            <div className='test__2'></div>
            <div className='test__3'>” This was one of the best and well-organised races I have ever participated in. “</div>
            <div className='test__4'>Francis, Citibank</div>
        </div>
     
      
     </div>
     
    </Wrapper>
  )
}

export default Testamonial
const Wrapper=styled.div`




@media screen and (min-width: 0px) and (max-width: 599px){
    width:100%;
    display:flex;
    flex-direction:column;

   
    margin-top:150px;
    margin-bottom:150px;
    gap: 55px;


    
    .test__heading{
        color: #A3258E;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%;
      
        width: 310px;
        padding-left:30px;
    }
    .test__con{
        display:flex;
    flex-direction:row;
    align-items:center;
    flex-wrap:wrap;


    gap:50px;
    justify-content:center;
    
    }
    .test{
    
        display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:30px;
    
    width: 313px;
    height: 375px;
    border-radius: 9.794px;
    background: #F4F4F4;
    
    }
    .test__1{
        width:90%;
        color: #2E2E2E;
        font-family: Inter;
        font-size: 13.059px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 20.832px */
     
        text-align:center;
    
    }
    .test__2{
       border:1px solid #A3258E;;
       width: 111.656px;
    height: 1.306px;
    margin-top:10px;
    margin-bottom:10px;
    }
    .test__3{
        height: 150px;
        color: #2E2E2E;
        text-align: center;
        font-family: Inter;
        font-size: 13.059px;
        font-style: normal;
        font-weight: 400;
        line-height: 159.523%; /* 20.832px */
        width:70%;
    
        
    }
    .test__4{
        color: #A3258E;
    text-align: center;
    font-family: Inter;
    font-size: 13.059px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%; /* 20.832px */
    }
}
@media screen and (min-width: 600px) and (max-width: 959px){
    width:100%;
    display:flex;
    flex-direction:column;

   
    margin-top:150px;
    margin-bottom:150px;
    gap: 55px;
    padding-left:30px;

    
    .test__heading{
        color: #A3258E;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%;
      
        width: 310px;
    }
    .test__con{
        display:flex;
    flex-direction:row;
    align-items:center;
    flex-wrap:wrap;


    gap:50px;
    justify-content:center;
    
    }
    .test{
    
        display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:30px;
    
    width: 313px;
    height: 375px;
    border-radius: 9.794px;
    background: #F4F4F4;
    
    }
    .test__1{
        width:90%;
        color: #2E2E2E;
        font-family: Inter;
        font-size: 13.059px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 20.832px */
     
        text-align:center;
    
    }
    .test__2{
       border:1px solid #A3258E;;
       width: 111.656px;
    height: 1.306px;
    margin-top:10px;
    margin-bottom:10px;
    }
    .test__3{
        height: 150px;
        color: #2E2E2E;
        text-align: center;
        font-family: Inter;
        font-size: 13.059px;
        font-style: normal;
        font-weight: 400;
        line-height: 159.523%; /* 20.832px */
        width:70%;
    
        
    }
    .test__4{
        color: #A3258E;
    text-align: center;
    font-family: Inter;
    font-size: 13.059px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%; /* 20.832px */
    }
}
@media screen and (min-width: 960px) and (max-width: 1279px){
    width:100%;
    display:flex;
    flex-direction:column;

   
    margin-top:150px;
    margin-bottom:150px;
    gap: 55px;
    padding-left:30px;

    
    .test__heading{
        color: #A3258E;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%;
      
        width: 310px;
    }
    .test__con{
        display:flex;
    flex-direction:row;
    align-items:center;
    flex-wrap:wrap;


    gap:50px;
    justify-content:center;
    
    }
    .test{
    
        display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:30px;
    
    width: 313px;
    height: 375px;
    border-radius: 9.794px;
    background: #F4F4F4;
    
    }
    .test__1{
        width:90%;
        color: #2E2E2E;
        font-family: Inter;
        font-size: 13.059px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 20.832px */
     
        text-align:center;
    
    }
    .test__2{
       border:1px solid #A3258E;;
       width: 111.656px;
    height: 1.306px;
    margin-top:10px;
    margin-bottom:10px;
    }
    .test__3{
        height: 150px;
        color: #2E2E2E;
        text-align: center;
        font-family: Inter;
        font-size: 13.059px;
        font-style: normal;
        font-weight: 400;
        line-height: 159.523%; /* 20.832px */
        width:70%;
    
        
    }
    .test__4{
        color: #A3258E;
    text-align: center;
    font-family: Inter;
    font-size: 13.059px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%; /* 20.832px */
    }
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
    width:100%;
    display:flex;
    flex-direction:column;

   
    margin-top:150px;
    margin-bottom:150px;
    gap: 55px;
    padding-left:120px;

    
    .test__heading{
        color: #A3258E;
        font-family: Inter;
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%;
      
        width: 310px;
    }
    .test__con{
        display:flex;
    flex-direction:row;
    align-items:center;
    flex-wrap:wrap;


    gap:50px;
    justify-content:center;
    
    }
    .test{
    
        display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:30px;
    
    width: 313px;
    height: 375px;
    border-radius: 9.794px;
    background: #F4F4F4;
   
    }
    .test__1{
        width:90%;
        color: #2E2E2E;
        font-family: Inter;
        font-size: 15.059px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 20.832px */
     
        text-align:center;
    
    }
    .test__2{
       border:1px solid #A3258E;;
       width: 111.656px;
    height: 1.306px;
    margin-top:10px;
    margin-bottom:10px;
   
    }
    .test__3{
        height: 150px;
        color: #2E2E2E;
        text-align: center;
        font-family: Inter;
        font-size: 14.059px;
        font-style: normal;
        font-weight: 400;
        line-height: 159.523%; /* 20.832px */
        width:70%;
    
    
        
    }
    .test__4{
        color: #A3258E;
    text-align: center;
    font-family: Inter;
    font-size: 15.059px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%; /* 20.832px */
    }
}
@media screen and (min-width: 1921px){
    width:100%;
    display:flex;
    flex-direction:column;

   
    margin-top:150px;
    margin-bottom:150px;
    gap: 55px;
    padding-left:150px;

    
    .test__heading{
        color: #A3258E;
        font-family: Inter;
        font-size: 35px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%;
      
        width: 310px;
    }
    .test__con{
        display:flex;
    flex-direction:row;
    align-items:center;
    flex-wrap:wrap;


    gap:50px;
    justify-content:center;
    
    }
    .test{
    
        display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:30px;
    
    width: 400px;
    height: 475px;
    border-radius: 9.794px;
    background: #F4F4F4;
    
    }
    .test__1{
        width:90%;
        color: #2E2E2E;
        font-family: Inter;
        font-size: 16.059px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 20.832px */
     
        text-align:center;
    
    }
    .test__2{
       border:1px solid #A3258E;;
       width: 111.656px;
    height: 1.306px;
    margin-top:10px;
    margin-bottom:10px;
    }
    .test__3{
        height: 150px;
        color: #2E2E2E;
        text-align: center;
        font-family: Inter;
        font-size: 16.059px;
        font-style: normal;
        font-weight: 400;
        line-height: 159.523%; /* 20.832px */
        width:70%;
    
        
    }
    .test__4{
        color: #A3258E;
    text-align: center;
    font-family: Inter;
    font-size: 16.059px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%; /* 20.832px */
    }
}

`