import React from 'react'
import { styled } from 'styled-components'

const EventFlowTable = () => {
  return (
  <Wrapper>
      <div className='ef'>
        <div className='ef__1'>Event Flow</div>
        <div className='ef__2'>Overview</div>
        <div className='ef__3'>
         <div className='ef__3__1'>
            <div className='heading'>
                <div className='heading__1'>TIME</div>
                <div className='heading__2'>ITEM</div>
            </div>
         <div className='ef__3__'>
<div className='ef__3__1__a'>4:00</div>
            <div className='ef__3__1__b'>Mall open to general public</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>04:00</div>
            <div className='ef__3__1__b'>Mall open to general public</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>05:45</div>
            <div className='ef__3__1__b'>Event site ready</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>05:40</div>
            <div className='ef__3__1__b'>Stage live / DJ</div>
</div>

<div className='ef__3__'>
<div className='ef__3__1__a'>06:00</div>
            <div className='ef__3__1__b'>Entertainment</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>06:15</div>
            <div className='ef__3__1__b'>Warm-up Session with Fitness Partner</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>06:30</div>
            <div className='ef__3__1__b'>MC pushes runners towards start line</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>06:45</div>
            <div className='ef__3__1__b'>DJ</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>07:00</div>
            <div className='ef__3__1__b'>10km race starts</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>07:10</div>
            <div className='ef__3__1__b'>5km race starts</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>07:13</div>
            <div className='ef__3__1__b'>All winners out on course</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>07:27</div>
            <div className='ef__3__1__b'>5k winner expected to cross line</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>07:30</div>
            <div className='ef__3__1__b'>Malls open to general public </div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>07:32</div>
            <div className='ef__3__1__b'>Malls 3K Race Starts to general public </div>
</div>

         </div>
         <div className='ef__3__1'>
         <div className='heading'>
                <div className='heading__1'>TIME</div>
                <div className='heading__2'>ITEM</div>
            </div>
<div className='ef__3__'>
<div className='ef__3__1__a'>07:34</div>
            <div className='ef__3__1__b'>10km race course breakdown begins</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>07:45</div>
            <div className='ef__3__1__b'>DJ / Entertainment</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>08:00</div>
            <div className='ef__3__1__b'>3k Runners expected to cross line</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>08:05</div>
            <div className='ef__3__1__b'>DJ / Entertainment</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>08:15</div>
            <div className='ef__3__1__b'>Fitness Games</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>08:28</div>
            <div className='ef__3__1__b'>Last 5k runner over the finish line</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>08:00</div>
            <div className='ef__3__1__b'>Entertainment</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>08:30</div>
            <div className='ef__3__1__b'>Last 3k runners over the finish line</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>08:45</div>
            <div className='ef__3__1__b'>Last 10k runners over the finish line</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>09:00</div>
            <div className='ef__3__1__b'>Prize Giving</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>09:30</div>
            <div className='ef__3__1__b'>Entertainment</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>10:00</div>
            <div className='ef__3__1__b'>Fitness Session</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>10:30</div>
            <div className='ef__3__1__b'>Entertainment</div>
</div>
<div className='ef__3__'>
<div className='ef__3__1__a'>10:45</div>
            <div className='ef__3__1__b'>Event closes</div>
</div>

         </div>
        </div>
    </div>
    </Wrapper>
  )
}

export default EventFlowTable
const Wrapper=styled.section`


@media screen and (min-width: 0px) and (max-width: 599px){
    .ef{
        width:100%;
      
         

       }
       .ef__1{
           color: #A3258E;
           font-family: Inter;
           font-size: 20px;
           font-style: normal;
           font-weight: 700;
           line-height: 159.523%; /* 31.905px */
           margin-top:22px;
      padding-left:30px;
       }
       .ef__2{
           color: #A6A6A6;
           font-family: Inter;
           font-size: 16px;
           font-style: normal;
           font-weight: 400;
           line-height: 159.523%; /* 25.524px */
          
           margin-bottom: 20px;
           margin-top: 10px;
           padding-left:30px;
          
       }
       .ef__3{
       display:flex;
       flex-direction:row;
       flex-wrap:wrap;
       gap:40px;
       justify-content:center;
      
      
       }
       .ef__3__1{
        
           display:flex;
           flex-direction:column;
  
       }
       .ef__3__{
          
           display:flex;
           flex-direction:row;
         
       
       }
       .ef__3__2{
          
           display:flex;
       flex-direction:row;
   
       }
       .ef__3__1__a{
        
           padding: 6px 12px;
           background: #FFEAFB;
           color: #A3258E;
           text-align: center;
           font-family: Inter;
           font-size: 11.527px;
           font-style: normal;
           font-weight: 600;
           line-height: 159.523%; /* 18.389px */
           margin-right: 20px;
           margin-bottom: 10px;
           width:60px;
         
       }
       .ef__3__1__b{
           color: #A3258E;
           text-align: center;
           font-family: Inter;
           font-size: 11px;
           font-style: normal;
           font-weight: 600;
           line-height: 159.523%; /* 17.547px */
       background: #FFEAFB;
       padding:6px 30px;
       margin-bottom:10px;
      
       width:270px;
     
       }
       .heading{
       
           
           display: flex;
           flex-direction: row;
           color: #A3258E;
           text-align: center;
           font-family: Inter;
           font-size: 13.575px;
           font-style: normal;
           font-weight: 600;
           line-height: 159.523%; /* 21.656px */
           justify-content: space-between;
           margin-bottom: 10px;
     
       }
       .heading__1{
           
           margin-left:4px;
      
       
       }
       .heading__2{
         
           margin-right: 83px;
     
       }
}
@media screen and (min-width: 600px) and (max-width: 959px){
    .ef{
        width:100%;
 
         
       
       }
       .ef__1{
           color: #A3258E;
           font-family: Inter;
           font-size: 22px;
           font-style: normal;
           font-weight: 700;
           line-height: 159.523%; /* 31.905px */
           margin-top:22px;
           padding-left:30px;
     
       }
       .ef__2{
           color: #A6A6A6;
           font-family: Inter;
           font-size: 18px;
           font-style: normal;
           font-weight: 400;
           line-height: 159.523%; /* 25.524px */
          
           margin-bottom: 20px;
           margin-top: 10px;
           padding-left:30px;
       }
       .ef__3{
       display:flex;
       flex-direction:row;
       flex-wrap:wrap;
       gap:40px;
      justify-content:center;
      
       }
       .ef__3__1{
        
           display:flex;
           flex-direction:column;
    
       }
       .ef__3__{
          
           display:flex;
           flex-direction:row;
         
       
       }
       .ef__3__2{
          
           display:flex;
       flex-direction:row;
   
       }
       .ef__3__1__a{
           
           padding: 6px 12px;
           background: #FFEAFB;
           color: #A3258E;
           text-align: center;
           font-family: Inter;
           font-size: 12.527px;
           font-style: normal;
           font-weight: 600;
           line-height: 159.523%; /* 18.389px */
           margin-right: 20px;
           margin-bottom: 10px;
           width:60px;
         
       }
       .ef__3__1__b{
           color: #A3258E;
           text-align: center;
           font-family: Inter;
           font-size: 12px;
           font-style: normal;
           font-weight: 600;
           line-height: 159.523%; /* 17.547px */
       background: #FFEAFB;
       padding:6px 30px;
       margin-bottom:10px;
       width:280px;
     
       }
       .heading{
       
           
           display: flex;
           flex-direction: row;
           color: #A3258E;
           text-align: center;
           font-family: Inter;
           font-size: 14.575px;
           font-style: normal;
           font-weight: 600;
           line-height: 159.523%; /* 21.656px */
           justify-content: space-between;
           margin-bottom: 10px;
     
       }
       .heading__1{
           
           margin-left:4px;
      
       
       }
       .heading__2{
         
           margin-right: 93px;
     
       }
}
@media screen and (min-width: 960px) and (max-width: 1279px){
    .ef{
        width:100%;
 
        
       }
       .ef__1{
           color: #A3258E;
           font-family: Inter;
           font-size: 24px;
           font-style: normal;
           font-weight: 700;
           line-height: 159.523%; /* 31.905px */
           margin-top:22px;
           padding-left:30px;
     
       }
       .ef__2{
           color: #A6A6A6;
           font-family: Inter;
           font-size: 20px;
           font-style: normal;
           font-weight: 400;
           line-height: 159.523%; /* 25.524px */
          
           margin-bottom: 20px;
           margin-top: 10px;
           padding-left:30px;
          
       }
       .ef__3{
       display:flex;
       flex-direction:row;
       flex-wrap:wrap;
       gap:40px;
       justify-content:center;
      
      
       }
       .ef__3__1{
        
           display:flex;
           flex-direction:column;
    
       }
       .ef__3__{
          
           display:flex;
           flex-direction:row;
         
       
       }
       .ef__3__2{
          
           display:flex;
       flex-direction:row;
   
       }
       .ef__3__1__a{
           
           padding: 6px 12px;
           background: #FFEAFB;
           color: #A3258E;
           text-align: center;
           font-family: Inter;
           font-size: 13.527px;
           font-style: normal;
           font-weight: 600;
           line-height: 159.523%; /* 18.389px */
           margin-right: 20px;
           margin-bottom: 10px;
           width:80px;
         
       }
       .ef__3__1__b{
           color: #A3258E;
           text-align: center;
           font-family: Inter;
           font-size: 13px;
           font-style: normal;
           font-weight: 600;
           line-height: 159.523%; /* 17.547px */
       background: #FFEAFB;
       padding:6px 30px;
       margin-bottom:10px;
       width:300px;
     
       }
       .heading{
       
           
           display: flex;
           flex-direction: row;
           color: #A3258E;
           text-align: center;
           font-family: Inter;
           font-size: 15.575px;
           font-style: normal;
           font-weight: 600;
           line-height: 159.523%; /* 21.656px */
           justify-content: space-between;
           margin-bottom: 10px;
     
       }
       .heading__1{
           
           margin-left:4px;
      
       
       }
       .heading__2{
         
           margin-right: 93px;
     
       }
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
    .ef{
        width:100%;
 
          
       }
       .ef__1{
           color: #A3258E;
           font-family: Inter;
           font-size: 28px;
           font-style: normal;
           font-weight: 700;
           line-height: 159.523%; /* 31.905px */
           margin-top:22px;
           padding-left:120px;
     
       }
       .ef__2{
           color: #A6A6A6;
           font-family: Inter;
           font-size: 24px;
           font-style: normal;
           font-weight: 400;
           line-height: 159.523%; /* 25.524px */
          
           margin-bottom: 20px;
           margin-top: 10px;
           padding-left:120px;
          
       }
       .ef__3{
       display:flex;
       flex-direction:row;
       flex-wrap:wrap;
       gap:40px;
       justify-content:center;
      
      
       }
       .ef__3__1{
        
           display:flex;
           flex-direction:column;
    
       }
       .ef__3__{
          
           display:flex;
           flex-direction:row;
         
       
       }
       .ef__3__2{
          
           display:flex;
       flex-direction:row;
   
       }
       .ef__3__1__a{
           
           padding: 6px 12px;
           background: #FFEAFB;
           color: #A3258E;
           text-align: center;
           font-family: Inter;
           font-size: 14.527px;
           font-style: normal;
           font-weight: 600;
           line-height: 159.523%; /* 18.389px */
           margin-right: 20px;
           margin-bottom: 10px;
           width:100px;
         
       }
       .ef__3__1__b{
           color: #A3258E;
           text-align: center;
           font-family: Inter;
           font-size: 14px;
           font-style: normal;
           font-weight: 600;
           line-height: 159.523%; /* 17.547px */
       background: #FFEAFB;
       padding:6px 30px;
       margin-bottom:10px;
       width:320px;
     
       }
       .heading{
       
           
           display: flex;
           flex-direction: row;
           color: #A3258E;
           text-align: center;
           font-family: Inter;
           font-size: 18.575px;
           font-style: normal;
           font-weight: 600;
           line-height: 159.523%; /* 21.656px */
           justify-content: space-between;
           margin-bottom: 10px;
  
       }
       .heading__1{
           
           margin-left:4px;
      
       
       }
       .heading__2{
         
           margin-right: 93px;
     
       }
}
@media screen and (min-width: 1921px){
    .ef{
        width:100%;
 
         
       }
       .ef__1{
           color: #A3258E;
           font-family: Inter;
           font-size: 30px;
           font-style: normal;
           font-weight: 700;
           line-height: 159.523%; /* 31.905px */
           margin-top:22px;
           padding-left:150px;
     
       }
       .ef__2{
           color: #A6A6A6;
           font-family: Inter;
           font-size: 26px;
           font-style: normal;
           font-weight: 400;
           line-height: 159.523%; /* 25.524px */
          
           margin-bottom: 20px;
           margin-top: 10px;
           padding-left:150px;
          
       }
       .ef__3{
       display:flex;
       flex-direction:row;
       flex-wrap:wrap;
       gap:40px;
       justify-contenr:center;
      
      
       }
       .ef__3__1{
        
           display:flex;
           flex-direction:column;
    
       }
       .ef__3__{
          
           display:flex;
           flex-direction:row;
         
       
       }
       .ef__3__2{
          
           display:flex;
       flex-direction:row;
   
       }
       .ef__3__1__a{
           
           padding: 6px 12px;
           background: #FFEAFB;
           color: #A3258E;
           text-align: center;
           font-family: Inter;
           font-size: 16.527px;
           font-style: normal;
           font-weight: 600;
           line-height: 159.523%; /* 18.389px */
           margin-right: 20px;
           margin-bottom: 10px;
           width:120px;
       }
       .ef__3__1__b{
           color: #A3258E;
           text-align: center;
           font-family: Inter;
           font-size: 16px;
           font-style: normal;
           font-weight: 600;
           line-height: 159.523%; /* 17.547px */
       background: #FFEAFB;
       padding:6px 30px;
       margin-bottom:10px;
       width:340px;
     
       }
       .heading{
       
           
           display: flex;
           flex-direction: row;
           color: #A3258E;
           text-align: center;
           font-family: Inter;
           font-size: 19.575px;
           font-style: normal;
           font-weight: 600;
           line-height: 159.523%; /* 21.656px */
           justify-content: space-between;
           margin-bottom: 10px;
     
       }
       .heading__1{
           
           margin-left:4px;
      
       
       }
       .heading__2{
         
           margin-right: 93px;
     
       }
}

`