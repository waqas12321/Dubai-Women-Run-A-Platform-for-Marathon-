import React from 'react'
import { styled } from 'styled-components';

const News__Media = ({value}) => {
console.warn(value);
if(!value){
    return null;
}
else{
    

  return (
<Wrapper>
    <div className='nm__1'>{value.heading}</div>
    <div className='nm__2'>{value.subheading}</div>
    <div className='nm__3'>
      
       {value.data.map((currElem)=>{
 return (
    <div  className='nm__3__1'>
    <div>{currElem.p1}
    </div>
    <div>{currElem.p2}
    </div>
    <div>{currElem.p3}
    </div>
    <div>{currElem.p4}
    </div>
 
 </div>
 )
       })}

    
    </div>
    <div className='nm__4'>
        <img className='nm__4__1' src={value.images[0].img1} alt='not found'></img>
        <img className='nm__4__1' src={value.images[0].img2} alt='not found'></img>
    </div>
</Wrapper>
  )
    }
}

export default News__Media;
const Wrapper=styled.div`


@media screen and (min-width: 0px) and (max-width: 599px){
    margin-top:40px;

    .nm__1{
    
    color: #A3258E;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%; /* 71.785px */
   
    
    }
    .nm__2{
        color: #929292;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 231.4%; /* 55.536px */
     
     }
     .nm__3{
        
        display:flex;
        flex-direction:row;
       
        
        margin: 30px 0px 40px 0px;
    }
    .nm__3__1{
        
    
        display:flex;
        flex-direction:column;
    
        color: #2E2E2E;
        font-family: Inter;
        font-size: 13.679px;
        font-style: normal;
        font-weight: 500;
        line-height: 231.4%; /* 47.85px */
        width:30%;
    gap:3%;
       
    }
    .nm__4{
      
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        width:90%;
      gap:50px;

      

    
    }
    .nm__4__1 {
    
        
        height:30vh;
        width:100%;
        
    }
}
@media screen and (min-width: 600px) and (max-width: 959px){
    margin-top:40px;

    .nm__1{
    
    color: #A3258E;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%; /* 71.785px */
   
    
    }
    .nm__2{
        color: #929292;
        font-family: Inter;
        font-size: 17px;
        font-style: normal;
        font-weight: 600;
        line-height: 231.4%; /* 55.536px */
     
     }
     .nm__3{
        
        display:flex;
        flex-direction:row;
       
        
        margin: 30px 0px 40px 0px;
    }
    .nm__3__1{
        
    
        display:flex;
        flex-direction:column;
    
        color: #2E2E2E;
        font-family: Inter;
        font-size: 14.679px;
        font-style: normal;
        font-weight: 500;
        line-height: 231.4%; /* 47.85px */
        width:30%;
    gap:3%;
       
    }
    .nm__4{
      
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        width:90%;
      gap:50px;

      

    
    }
    .nm__4__1 {
    
        
        height:30vh;
        width:40%;
        
    }
}
@media screen and (min-width: 960px) and (max-width: 1279px){
    margin-top:40px;

    .nm__1{
    
    color: #A3258E;
    font-family: Inter;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%; /* 71.785px */
   
    
    }
    .nm__2{
        color: #929292;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 231.4%; /* 55.536px */
     
     }
     .nm__3{
        
        display:flex;
        flex-direction:row;
       
        
        margin: 30px 0px 40px 0px;
    }
    .nm__3__1{
        
    
        display:flex;
        flex-direction:column;
    
        color: #2E2E2E;
        font-family: Inter;
        font-size: 15.679px;
        font-style: normal;
        font-weight: 500;
        line-height: 231.4%; /* 47.85px */
        width:30%;
    gap:3%;
       
    }
    .nm__4{
      
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        width:90%;
      gap:50px;

      

    
    }
    .nm__4__1 {
    
        
        height:30vh;
        width:40%;
        
    }
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
    margin-top:40px;

    .nm__1{
    
    color: #A3258E;
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%; /* 71.785px */
   
    
    }
    .nm__2{
        color: #929292;
        font-family: Inter;
        font-size: 19px;
        font-style: normal;
        font-weight: 600;
        line-height: 231.4%; /* 55.536px */
     
     }
     .nm__3{
        
        display:flex;
        flex-direction:row;
       
        
        margin: 30px 0px 40px 0px;
    }
    .nm__3__1{
        
    
        display:flex;
        flex-direction:column;
    
        color: #2E2E2E;
        font-family: Inter;
        font-size: 16.679px;
        font-style: normal;
        font-weight: 500;
        line-height: 231.4%; /* 47.85px */
        width:30%;
    gap:3%;
       
    }
    .nm__4{
      
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        width:90%;
      gap:50px;

      

    
    }
    .nm__4__1 {
    
        
        height:40vh;
        width:40%;
        
    }
}
@media screen and (min-width: 1921px){
    margin-top:40px;

    .nm__1{
    
    color: #A3258E;
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%; /* 71.785px */
   
    
    }
    .nm__2{
        color: #929292;
        font-family: Inter;
        font-size: 19px;
        font-style: normal;
        font-weight: 600;
        line-height: 231.4%; /* 55.536px */
     
     }
     .nm__3{
        
        display:flex;
        flex-direction:row;
       
        
        margin: 30px 0px 40px 0px;
    }
    .nm__3__1{
        
    
        display:flex;
        flex-direction:column;
    
        color: #2E2E2E;
        font-family: Inter;
        font-size: 18.679px;
        font-style: normal;
        font-weight: 500;
        line-height: 231.4%; /* 47.85px */
        width:30%;
    gap:3%;
       
    }
    .nm__4{
      
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        width:90%;
      gap:50px;

      

    
    }
    .nm__4__1 {
    
        
        height:45vh;
        width:45%;
        
    }   
}
`