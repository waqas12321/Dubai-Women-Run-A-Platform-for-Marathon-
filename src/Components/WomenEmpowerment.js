import React from 'react'
import { styled } from 'styled-components'

const WomenEmpowerment = () => {
  return (
    <Wrapper >
        <div className='we__1__1'>
            <div className='heading'>
                RUNNING FOR WOMEN’S EMPOWERMENT
            </div>
          <div className='text'>
            <p>
            With the UAE Athletics Federation and the Dubai Sports Council in leadership roles, anticipation is mounting for the highly awaited tenth edition of the Dubai Women's Run. Orchestrated under the vigilant oversight of Plan B, this event stands as not just the largest women's-only running event in the region, but also as a guiding light of empowerment for women worldwide.






            </p>
            <p>
            This event encapsulates more than a mere race. It embodies a potent symbol of women's advancement in both the region and the world at large. Runners of all skill levels are extended an invitation to partake in the 3-kilometer fun run, the 5-kilometer circuit, or the formidable 10-kilometer challenge, thereby creating a receptive and all-encompassing occasion for women from diverse backgrounds.
            </p>
            <p>
            The Dubai Women's Run exults in the energy and resilience of women, motivating them to transcend their boundaries and realize their aspirations. As the event expands in magnitude and prominence, it draws participants from around the globe, all bonded by a mutual feeling of empowerment and camaraderie.
                
            </p>
            <p>
                
            We urge you to join us in commemorating the extraordinary achievements of women at the Dubai Women's Run. Together, let's persist in pushing the limits and instilling bravery and determination in the forthcoming generation of women, motivating them to chase their dreams ardently.

                </p>
          </div>
            </div>

            <div className='we__1__2'>
           

        </div>
    </Wrapper>
  )
}

export default WomenEmpowerment
const Wrapper=styled.section`


@media screen and (min-width: 0px) and (max-width: 599px){
    width:100%;

    margin-top: 10px;
    background: #FFF;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items:center;
  
   
    
    
    
    .we__1__1{
    
        width:100%;
       
        margin-top:65px;
        margin-right:0px;
        display:flex;
        flex-direction:column;
      align-items:center;
    }
    .heading{
        color: #A3258E;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 31.905px */
        width:100%;
      
        text-align:center;
      
    }
    .text{
        margin-top:20px;
        display: flex;
        width: 310px;
        flex-direction: column;
        flex-shrink: 0;
      
        text-align: justify;
        width:80%;
    }
    .text p{
        color: #2E2E2E;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; /* 166.667% */
    }
    
    .we__1__2{
    
    
      
        width:100%;
    
        background-image: url(/images/Empower.webp);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height:30vh;
    
        
    }
   
}
@media screen and (min-width: 600px) and (max-width: 959px){
    width:100%;

    margin-top: 10px;
    background: #FFF;
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    align-items:center;

    padding-left:30px;
    
    
    
    .we__1__1{
    
        width:100%;

        margin-top:65px;
        margin-right:0px;
        display:flex;
        flex-direction:column;
      align-items:center;
    }
    .heading{
        color: #A3258E;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 31.905px */
    }
    .text{
        margin-top:20px;
        display: flex;
        width: 80%;
        flex-direction: column;
        flex-shrink: 0;
      
        text-align: justify;
    }
    .text p{
        color: #2E2E2E;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; /* 166.667% */
    }
    
    .we__1__2{
    
  
      
        width:90%;
    height:40vh;
        background-image: url(/images/Empower.webp);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    
        
    }
   
}
@media screen and (min-width: 960px) and (max-width: 1279px){
    width:100%;

    margin-top: 10px;
    background: #FFF;
    display: flex;
    flex-direction: row;
    flex-wrap:no-wrap;
 
    align-items:center;
    padding-top:50px;
   
    padding-left:30px;
    height:140vh;
  
    
    
    
    .we__1__1{
    
        width:50%;
        height:130vh;
      
        margin-top:0px;
        margin-right:0px;
        display:flex;
        flex-direction:column;
      align-items:start;
    }
    .heading{
        color: #A3258E;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 31.905px */
        width:80%;
    }
    .text{
        margin-top:20px;
        display: flex;
        width: 80%;
        flex-direction: column;
        flex-shrink: 0;
      
        text-align: justify;
    }
    .text p{
        color: #2E2E2E;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; /* 166.667% */
    }
    
    .we__1__2{
    
    
      
        width:50%;
        height:120vh;
     
        background-image: url(/images/Empower.webp);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
     
       
    
        
    }
  
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
    width:100%;

    margin-top: 0px;
    background: #FFF;
    display: flex;
    flex-direction: row;
    flex-wrap:no-wrap;
 
    align-items:center;
    justify-content:start;

    padding-left:120px;
 
  
  height:130vh;
    
    
    .we__1__1{
       
        width:50%;
        height:115vh;
        margin-top:0px;
        margin-right:0px;
        display:flex;
        flex-direction:column;
      align-items:start;

    }
    .heading{
        color: #A3258E;
        font-family: Inter;
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 31.905px */
        width:80%;
    }
    .text{
        margin-top:20px;
        display: flex;
        width: 80%;
        flex-direction: column;
        flex-shrink: 0;
      
        text-align: justify;
    }
    .text p{
        color: #2E2E2E;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; /* 166.667% */
    }
    
    .we__1__2{
    
        height:80vh;
        width:50%;
       
      
      
        background-image: url(/images/Empower.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
       
    
        
    }
 
}
@media screen and (min-width: 1921px){
    width:100%;

    margin-top: 10px;
    background: #FFF;
    display: flex;
    flex-direction: row;
    flex-wrap:no-wrap;
 
    align-items:center;
  
    padding-left:150px;

    height:100vh;

    
    .we__1__1{
    
        width:50%;
        height:75vh;
        margin-top:0px;
        margin-right:0px;
        display:flex;
        flex-direction:column;
      align-items:start;
    
    }
    .heading{
        color: #A3258E;
        font-family: Inter;
        font-size: 35px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%; /* 31.905px */
    }
    .text{
        margin-top:20px;
        display: flex;
        width: 70%;
        flex-direction: column;
        flex-shrink: 0;
      
        text-align: justify;
    }
    .text p{
        color: #2E2E2E;
        font-family: Inter;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; /* 166.667% */
    }
    
    .we__1__2{
    
    
      
        width:50%;
        height:60vh;
    
      
      
        background-image: url(/images/Empower.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
       
       
    
        
    }
   
}
`