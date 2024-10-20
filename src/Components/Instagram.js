import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const Instagram = () => {
  return (
<Wrapper>
    <div className='insta__1'>SOCIAL FEED</div>
    <div className='insta__2'>WE ARE ON
INSTAGRAM</div>
    <div className='insta__3'>
    <NavLink to="https://www.instagram.com/thedubaiwomensrun/" target='_blank'>
    <div  className='insta__pic'><img  src="/images/insta__1.webp" alt="pic not found"/></div>
           </NavLink>
    
    <NavLink to="https://www.instagram.com/thedubaiwomensrun/" target='_blank'>
    <div className='insta__pic'><img  src="/images/insta__2.webp" alt="pic not found"/></div>
           </NavLink>
        
        <NavLink to="https://www.instagram.com/thedubaiwomensrun/" target='_blank'>
        <div  className='insta__pic'><img  src="/images/insta__3.webp" alt="pic not found"/></div>
           </NavLink>
       
        <NavLink to="https://www.instagram.com/thedubaiwomensrun/" target='_blank'>
        <div  className='insta__pic'><img  src="/images/insta__5 (1).webp" alt="pic not found"/></div>
           </NavLink>
       
        <NavLink to="https://www.instagram.com/thedubaiwomensrun/" target='_blank'>
        <div  className='insta__pic'><img  src="/images/insta__5 (2).webp" alt="pic not found"/></div> 
           </NavLink>
   
        <NavLink to="https://www.instagram.com/thedubaiwomensrun/" target='_blank'>
        <div  className='insta__pic'><img  src="/images/insta__5 (3).webp" alt="pic not found"/></div>
           </NavLink>
       
        <NavLink to="https://www.instagram.com/thedubaiwomensrun/" target='_blank'>
        <div  className='insta__pic'><img  src="/images/insta__5 (4).webp" alt="pic not found"/></div>
           </NavLink>
      
        <NavLink to="https://www.instagram.com/thedubaiwomensrun/" target='_blank'>
        <div  className='insta__pic'><img  src="/images/insta__5 (5).webp" alt="pic not found"/></div>
           </NavLink>
    
    </div>

</Wrapper>
  )
}

export default Instagram;
const Wrapper=styled.div`




@media screen and (min-width: 0px) and (max-width: 599px){
    width:100%;

    .insta__1{
        color: #BEBEBE;
        font-family: Inter;
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: 159.523%; /* 27.119px */
        padding-left:30px;
    }
    .insta__2{
        color: #A3258E;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%;
        padding-left:30px;
     
        width: 400px;
     
    }
    .insta__3{
        margin-top:50px;
        display: flex;
        flex-direction: row;
     
        flex-wrap: wrap;
        align-items:center;
        justify-content:center;
       
        gap:50px;
        
    }
    .insta__pic{
        width: 250px;
        height: 250px;
    }
    .insta__pic img{
        width: 250px;
        height: 250px;
        border-radius:6px
    }
}
@media screen and (min-width: 600px) and (max-width: 959px){
    width:100%;
    padding-left:30px;
        .insta__1{
            color: #BEBEBE;
            font-family: Inter;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
            line-height: 159.523%; /* 27.119px */
    
        }
        .insta__2{
            color: #A3258E;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 159.523%;
         
            width: 400px;
         
        }
        .insta__3{
            margin-top:50px;
            display: flex;
            flex-direction: row;
         
            flex-wrap: wrap;
            align-items:center;
           
            gap:50px;
            
        }
        .insta__pic{
            width: 280px;
            height: 280px;
        }
        .insta__pic img{
            width: 280px;
            height: 280px;
            border-radius:6px
        }
}
@media screen and (min-width: 960px) and (max-width: 1279px){
    width:100%;
    padding-left:30px;
        .insta__1{
            color: #BEBEBE;
            font-family: Inter;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
            line-height: 159.523%; /* 27.119px */
    
        }
        .insta__2{
            color: #A3258E;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 159.523%;
         
            width: 400px;
         
        }
        .insta__3{
            margin-top:50px;
            display: flex;
            flex-direction: row;
         
            flex-wrap: wrap;
            align-items:center;
           
            gap:50px;
            
        }
        .insta__pic{
            width: 280px;
            height: 280px;
        }
        .insta__pic img{
            width: 280px;
            height: 280px;
            border-radius:6px
        }
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
    width:100%;
    padding-left:120px;
        .insta__1{
            color: #BEBEBE;
            font-family: Inter;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
            line-height: 159.523%; /* 27.119px */
    
        }
        .insta__2{
            color: #A3258E;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 159.523%;
         
            width: 400px;
         
        }
        .insta__3{
            margin-top:50px;
            display: flex;
            flex-direction: row;
         
            flex-wrap: wrap;
            align-items:center;
           
            gap:50px;
          
            width:97%;
            
        }
        .insta__pic{
            width: 310px;
            height: 310px;
        }
        .insta__pic img{
            width: 310px;
            height: 310px;
            border-radius:6px
        }
}
@media screen and (min-width: 1921px){
    width:100%;
    padding-left:150px;
        .insta__1{
            color: #BEBEBE;
            font-family: Inter;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
            line-height: 159.523%; /* 27.119px */
    
        }
        .insta__2{
            color: #A3258E;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 159.523%;
         
            width: 400px;
         
        }
        .insta__3{
            margin-top:50px;
            display: flex;
            flex-direction: row;
         
            flex-wrap: wrap;
            align-items:center;
           
            gap:50px;
            
        }
        .insta__pic{
            width: 370px;
            height: 370px;
        }
        .insta__pic img{
            width: 370px;
            height: 370px;
            border-radius:6px
        }
}

`