import React from 'react'
import { styled } from 'styled-components';
import Header from '../Components/Header1';
import Footer from '../Components/Footer';
import News__Media from '../Components/News__Media';
import { useHighlightsHook } from '../Context/HighlightsContext';
import { NavLink } from 'react-router-dom';

const NewsMedia = () => {
    const {highlightsData}=useHighlightsHook();
    console.warn(highlightsData);
  return (
<Wrapper>
    <div><Header/></div>
    <div className='news'> 
        <div className='new__1'>
        News & Media
        </div>
        <div className='new__2'>
        Inclusive of Online and Offline Coverage
        </div>
        <div className='new__3'>
        Dubai Women’s Run saw it’s widest coverage to date, with 12 media partners, and over 10 million impressions in organic discussions and mentions on social media.
        </div>
        <div className='new__4'>
            <div className='news__4__1'></div>
            <div className='news__4__2'></div>
            <div className='news__4__3'></div>
            <div className='news__4__4'></div>
            <div className='news__4__5'></div>
            <div className='news__4__6'></div>
     
     
        </div>
        <div className='new__5'>
        <div className='new__5__1'>TV Time Share 4hrs+</div>
            <div className='new__5__2'>
            Total broadcast time and coverage by our television media partners.
            </div>
        </div>
        <div className='new__5'>
        <div className='new__5__1'>TV Time Share 4hrs+</div>
            <div className='new__5__2'>
            Total broadcast time and coverage by our television media partners.
            </div>
        </div>

        <div className='new__5'>
        <div className='new__5__1'>Register</div>
           <NavLink to="https://tishtashcommunications.coveragebook.com/b/f5199bfadfc98a66" target='_blank'>
           <div className='new__5__2'>
            YOUR JULY 2023 ACTIVITY & COVERAGE REPORT IS HERE.
            </div>
           </NavLink>
        </div>
      
    </div>
    <div><Footer/></div>

</Wrapper>
  )
}

export default NewsMedia;
const Wrapper=styled.div`


@media screen and (min-width: 0px) and (max-width: 599px){

    width:100%;
   



    .news{
    
        display:flex;
        flex-direction:column;
        width:100%;
    
        margin-bottom:100px;  
          padding-left:30px;
    
    }
    .new__1{
        color: #A3258E;
        font-family: Inter;
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 71.785px */
        margin: 25px 0px 2px 0px;
    
    }
    .new__2{
        color: #929292;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 231.4%; /* 55.536px */
    
    
    }
    .new__3{
        margin-top:5px;
        width: 72vw;
        color: #2E2E2E;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
    
        line-height: 231.4%; /* 55.536px */
        
    }
    .new__4{
      
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        width:90%;
      gap:50px;
        align-items:center;
        margin-top:30px ;
        margin-bottom:50px ;
       
    
      
   
     
    
    
    }
    .news__4__1{
        height:30vh;
        width:100%;
        background-image: url("/images/newMedia__2.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .news__4__2{
        height:30vh;
        width:100%;
     
        background-image: url("/images/newMedia__5.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .news__4__3{
        height:30vh;
        width:100%;
     
        background-image: url("/images/newMedia__2.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .news__4__4{
        height:30vh;
        width:100%;
     
        background-image: url("/images/newMedia__4.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .news__4__5{
        height:30vh;
        width:100%;
     
        background-image: url("/images/newMedia__5.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .news__4__6{
        height:30vh;
        width:100%;
     
        background-image: url("/images/newMedia__4.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .new__5{
       

    }
    .new__5__1{
        margin-top:20px;
    color: #A3258E;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 231.4%; /* 60.164px */
    }
    .new__5__2{
     
        color: #2E2E2E;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 231.4%; /* 55.536px */
    }
    a {

    
        text-decoration: none;
    }
}
@media screen and (min-width: 600px) and (max-width: 959px){
    width:100%;




    .news{
    
        display:flex;
        flex-direction:column;
        width:100%;
    
        margin-bottom:100px;  
          padding-left:30px;
    
    }
    .new__1{
        color: #A3258E;
        font-family: Inter;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 71.785px */
        margin: 25px 0px 2px 0px;
    
    }
    .new__2{
        color: #929292;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 231.4%; /* 55.536px */
    
    
    }
    .new__3{
        margin-top:5px;
        width: 72vw;
        color: #2E2E2E;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
    
        line-height: 231.4%; /* 55.536px */
        
    }
    .new__4{
      
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        width:90%;
      gap:50px;
        align-items:center;
        margin-top:30px ;
        margin-bottom:50px ;
    
       
   
     
    
    
    }
     .news__4__1{
        height:30vh;
        width:40%;
        background-image: url("/images/newMedia__4.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .news__4__2{
        height:30vh;
        width:40%;
     
        background-image: url("/images/newMedia__4.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .new__5{
       

    }
    .new__5__1{
        margin-top:20px;
    color: #A3258E;
    font-family: Inter;
    font-size: 19px;
    font-style: normal;
    font-weight: 600;
    line-height: 231.4%; /* 60.164px */
    }
    .new__5__2{
     
        color: #2E2E2E;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 231.4%; /* 55.536px */
    }
    a {

    
        text-decoration: none;
    }
}
@media screen and (min-width: 960px) and (max-width: 1279px){
    width:100%;
 



    .news{
    
        display:flex;
        flex-direction:column;
        width:100%;
    
        margin-bottom:100px;  
          padding-left:30px;
    
    }
    .new__1{
        color: #A3258E;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 71.785px */
        margin: 25px 0px 2px 0px;
    
    }
    .new__2{
        color: #929292;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 231.4%; /* 55.536px */
    
    
    }
    .new__3{
        margin-top:5px;
        width: 72vw;
        color: #2E2E2E;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
    
        line-height: 231.4%; /* 55.536px */
        
    }
    .new__4{
      
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        width:90%;
      gap:50px;
        align-items:center;
        margin-top:30px ;
        margin-bottom:50px ;
    
       
   
     
    
    
    }
     .news__4__1{
        height:30vh;
        width:40%;
        background-image: url("/images/newMedia__2.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .news__4__2{
        height:30vh;
        width:40%;
     
        background-image: url("/images/newMedia__4.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .new__5{
       

    }
    .new__5__1{
        margin-top:20px;
    color: #A3258E;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 231.4%; /* 60.164px */
    }
    .new__5__2{
     
        color: #2E2E2E;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 231.4%; /* 55.536px */
    }
    a {

    
        text-decoration: none;
    }
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
    width:100%;
 



    .news{
    
        display:flex;
        flex-direction:column;
        width:100%;
    
        margin-bottom:100px;  
          padding-left:120px;
    
    }
    .new__1{
        color: #A3258E;
        font-family: Inter;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 71.785px */
        margin: 25px 0px 2px 0px;
    
    }
    .new__2{
        color: #929292;
        font-family: Inter;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 231.4%; /* 55.536px */
    
    
    }
    .new__3{
        margin-top:5px;
        width: 72vw;
        color: #2E2E2E;
        font-family: Inter;
        font-size: 19px;
        font-style: normal;
        font-weight: 500;
    
        line-height: 231.4%; /* 55.536px */
        
    }
    .new__4{
      
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        width:90%;
      gap:50px;
        align-items:center;
        margin-top:30px ;
     
       
       
   
     
    
    
    }
     .news__4__1{
        height:40vh;
        width:30%;
        background-image: url("/images/newMedia__2.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .news__4__2{
        height:40vh;
        width:30%;
     
        background-image: url("/images/newMedia__5.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .news__4__3{
        height:40vh;
        width:30%;
     
        background-image: url("/images/newMedia__2.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .news__4__4{
        height:50vh;
        width:30%;
     
        background-image: url("/images/newMedia__1.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .news__4__5{
        height:50vh;
        width:30%;
     
        background-image: url("/images/newMedia__6.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .news__4__6{
        height:50vh;
        width:30%;
     
        background-image: url("/images/newMedia__3.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .new__5{
       

    }
    .new__5__1{
        margin-top:20px;
    color: #A3258E;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 231.4%; /* 60.164px */
    }
    .new__5__2{
     
        color: #2E2E2E;
    font-family: Inter;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: 231.4%; /* 55.536px */
    }
    a {

    
        text-decoration: none;
    }
}
@media screen and (min-width: 1921px){
    width:100%;
   


    .news{
    
        display:flex;
        flex-direction:column;
        width:100%;
    
        margin-bottom:100px;  
          padding-left:150px;
    
    }
    .new__1{
        color: #A3258E;
        font-family: Inter;
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 71.785px */
        margin: 25px 0px 2px 0px;
    
    }
    .new__2{
        color: #929292;
        font-family: Inter;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 231.4%; /* 55.536px */
    
    
    }
    .new__3{
        margin-top:5px;
        width: 72vw;
        color: #2E2E2E;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
    
        line-height: 231.4%; /* 55.536px */
        
    }
    .new__4{
      
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        width:90%;
      gap:50px;
        align-items:center;
        margin-top:30px ;
        margin-bottom:50px ;
    
       
   
     
    
    
    }
     .news__4__1{
        height:45vh;
        width:40%;
        background-image: url("/images/newMedia__2.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .news__4__2{
        height:45vh;
        width:45%;
     
        background-image: url("/images/newMedia__4.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .new__5{
       

    }
    .new__5__1{
        margin-top:20px;
    color: #A3258E;
    font-family: Inter;
    font-size: 23px;
    font-style: normal;
    font-weight: 600;
    line-height: 231.4%; /* 60.164px */
    }
    .new__5__2{
     
        color: #2E2E2E;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 231.4%; /* 55.536px */
    }
    a {

    
        text-decoration: none;
    }
}

`