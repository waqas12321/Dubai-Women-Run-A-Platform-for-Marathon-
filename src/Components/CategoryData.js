import React, { useState } from 'react'
import { styled } from 'styled-components'

const CategoryData = (currElem) => {
    const [show,setShow]=useState(false);
 const {title,data}=currElem;

 
 
  return (
   
 <Wrapper>
<div className='cd'>
    <div className='cd__1' onClick={()=>{
  setShow(!show)
}}>
    <span >
  {show ? "-" : "+"}
</span> {title}
    </div>
   {
    show &&  <div className='cd__2'>
{data}
    </div>
   }
 
  
</div>
 </Wrapper>
  )
}

export default CategoryData
const Wrapper=styled.section`




   

@media screen and (min-width: 0px) and (max-width: 599px){
    width:100%;
   
 
    .cd{
 
        display: flex;
        width:100%;
        
        padding-bottom: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0px;
        flex-shrink: 0;

        }
        
        .cd__1{
           
            color: #A3258E;
        font-family: Inter;
        font-size: 15.712px;
        font-style: normal;
        font-weight: 600;
        line-height: 175.523%; /* 29.334px */
        width:100%;
        padding:10px 20px;
        
        border-radius:10px;
        background: #FFEAFB;
        color: #A3258E;
        }
        .cd__2{
        
            color: #2E2E2E;
        font-family: Inter;
        font-size: 16.729px;
        font-style: normal;
        font-weight: 400;
        line-height: 175.523%; /* 27.608px */
        width:100%;
        padding:10px 20px;
        flex-shrink: 0;
      
    
        }
}
@media screen and (min-width: 600px) and (max-width: 959px){
    width:100%;
 
    .cd{
 
        display: flex;
        width:100%;
        
        padding-bottom: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0px;
        flex-shrink: 0;
        }
        
        .cd__1{
           
            color: #A3258E;
        font-family: Inter;
        font-size: 16.712px;
        font-style: normal;
        font-weight: 600;
        line-height: 175.523%; /* 29.334px */
        width:100%;
        padding:10px 20px;
        
        border-radius:10px;
        background: #FFEAFB;
        color: #A3258E;
        }
        .cd__2{
        
            color: #2E2E2E;
        font-family: Inter;
        font-size: 16.729px;
        font-style: normal;
        font-weight: 400;
        line-height: 175.523%; /* 27.608px */
        width:100%;
        padding:10px 20px;
        flex-shrink: 0;
      
    
        }

}
@media screen and (min-width: 960px) and (max-width: 1279px){
width:80%;
 
    .cd{
 
        display: flex;
        width:100%;
        
        padding-bottom: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0px;
        flex-shrink: 0;
        }
        
        .cd__1{
           
            color: #A3258E;
        font-family: Inter;
        font-size: 16.712px;
        font-style: normal;
        font-weight: 600;
        line-height: 175.523%; /* 29.334px */
        width:100%;
        padding:10px 20px;
        
        border-radius:10px;
        background: #FFEAFB;
        color: #A3258E;
        }
        .cd__2{
        
            color: #2E2E2E;
        font-family: Inter;
        font-size: 16.729px;
        font-style: normal;
        font-weight: 400;
        line-height: 175.523%; /* 27.608px */
        width:100%;
        padding:10px 20px;
        flex-shrink: 0;
      
    
        }
    
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
    width:70%;

    .cd{
 
        display: flex;
        width:100%;
        
        padding-bottom: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0px;
        flex-shrink: 0;
     
      
        }
        
        .cd__1{
           
            color: #A3258E;
        font-family: Inter;
        font-size: 16.712px;
        font-style: normal;
        font-weight: 600;
        line-height: 175.523%; /* 29.334px */
        width:100%;
        padding:10px 20px;
        
        border-radius:10px;
        background: #FFEAFB;
        color: #A3258E;
        }
        .cd__2{
        
            color: #2E2E2E;
        font-family: Inter;
        font-size: 16.729px;
        font-style: normal;
        font-weight: 400;
        line-height: 175.523%; /* 27.608px */
        width:100%;
        padding:10px 20px;
        flex-shrink: 0;
      
    
        }
}
@media screen and (min-width: 1921px){
    width:80%;
 
    .cd{
 
        display: flex;
        width:100%;
        
        padding-bottom: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0px;
        flex-shrink: 0;
        }
        
        .cd__1{
           
            color: #A3258E;
        font-family: Inter;
        font-size: 22.712px;
        font-style: normal;
        font-weight: 600;
        line-height: 175.523%; /* 29.334px */
        width:100%;
        padding:10px 20px;
        
        border-radius:10px;
        background: #FFEAFB;
        color: #A3258E;
        }
        .cd__2{
        
            color: #2E2E2E;
        font-family: Inter;
        font-size: 22.729px;
        font-style: normal;
        font-weight: 400;
        line-height: 175.523%; /* 27.608px */
        width:100%;
        padding:10px 20px;
        flex-shrink: 0;
      
    
        }
}

`