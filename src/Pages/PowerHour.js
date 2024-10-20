import React from 'react'
import { styled } from 'styled-components';
import Header1 from '../Components/Header1';
import Footer from '../Components/Footer';



const PowerHour = () => {
   
 

  return (
   <Wrapper>
    <div>
        <Header1/>
    </div>
    <div>
    <div className='ws__1'>
    <div className='heading'>Power Hour</div>
    <div className='title'>Overview</div>
    <div className='para'>
    <strong>"Empower Today, Energize Tomorrow: Embrace the Power Hour"</strong>
    </div>
    <div className='list'>
        <ul>
            <li>
            The Dubai Women's Run 2023 presents the "Power Hour" initiative, aimed at promoting physical well-being and encouraging students to prioritize their health.
            </li>
            
           <li>At the heart of the Power Hour initiative is the belief that nurturing healthy habits from a young age is key to lifelong well-being. By participating, your school can play an integral role in empowering your students to lead active lives, make positive choices, and embrace a balanced lifestyle.</li>
           <li ><span className='imp'>Why Participate?</span></li>
           <li><div>Active Lifestyle:</div> Inspire your students to be active and develop healthy habits that will benefit them for years to come.</li>
          <li><div className='imp'>Empowerment:</div> Showcase your school's dedication to the physical well-being and holistic development of your students.</li>
          <li><div className='imp'>Fun and Engagement:</div> Create an engaging and enjoyable experience for your students, enhancing their enthusiasm for fitness.</li>
          <li><div className='imp'>Community Impact:</div> Join hands with a reputable event like Dubai Women's Run 2023 and be part of a larger movement promoting health and wellness.</li>
          <li>
          <div className='imp'>Professional Guidance:</div> Benefit from expert guidance and instruction provided by Dubai Women's Run fitness trainers during the session.
          </li>
          <li>
          Participation in the Power Hour initiative is straightforward. Dubai Women's Run 2023 will conduct an engaging and interactive fitness session right at your school premises.
          </li>
          <li>
          This session will be tailored to suit the age group and fitness level of your students, ensuring a safe and enjoyable experience for all.
          </li>
          <li>
          We look forward to your enthusiastic participation and collaboration in this meaningful initiative. Together, we can inspire our youth to embrace fitness and take charge of their physical health.
          </li>
        </ul>
    </div>
    

</div>
    </div>

    <div>
        <Footer/>
    </div>
   </Wrapper>
  )
}

export default PowerHour;
const Wrapper=styled.div`
@media screen and (min-width: 0px) and (max-width: 599px){
    .ws__1{
        display:flex;
        flex-direction:column;
        width:100%;
        align-items: start;
        
        
        margin-top:20px;
        position:relative;
        z-index:-1;
    }
    
        
        .heading{
            color: #A3258E;
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 159.523%;
            position: relative;
            padding-left: 30px;
          
            width: 100%;
            display: flex;
   
            justify-content: start;
        
        }
        .title{
            color: #A6A6A6;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 159.523%; /* 25.524px */
        position: relative;
        padding-left:30px;
        
        }
     
        .para{
            color: #2E2E2E;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 231.4%; /* 55.536px */
        width: 70%;
        padding-left:30px;
        
        flex-shrink: 0;
        margin-top: 20px;
        position: relative;
        
        }
        .list{
        
            width: 100%;
            background-color: #FFE9FA;
           
            margin-bottom:130px;
         
            color: #A3258E;
            font-family: Inter;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 227%; /* 38.59px */
        margin-top:30px;
        clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%);
        padding-left: 0px;
        padding-top:30px;
        display:flex;
        justify-content:center;
        
        
        
        
        
       
        
        }
        .list ul{
       width:310px;
       list-style:none;
    
        
        
        }
        .imp{
            font-size:15px;
        }

}
@media screen and (min-width: 600px) and (max-width: 959px){
    .ws__1{
        display:flex;
        flex-direction:column;
        width:100%;
        align-items: start;
        
        
        margin-top:20px;
        position:relative;
        z-index:-1;
    }
    
        
        .heading{
            color: #A3258E;
            font-family: Inter;
            font-size: 22px;
            font-style: normal;
            font-weight: 600;
            line-height: 159.523%;
            position: relative;
            padding-left: 30px;
          
            width: 100%;
            display: flex;
   
            justify-content: start;
        
        }
        .title{
            color: #A6A6A6;
            font-family: Inter;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
            line-height: 159.523%; /* 25.524px */
        position: relative;
        padding-left:33px;
        
        }
        .para{
            color: #2E2E2E;
        font-family: Inter;
        font-size: 17px;
        font-style: normal;
        font-weight: 600;
        line-height: 231.4%; /* 55.536px */
        width: 70%;
        padding-left:30px;
        
        flex-shrink: 0;
        margin-top: 20px;
        position: relative;
        
        }
     
        .list{
        
            width: 100%;
            background-color: #FFE9FA;
           
            margin-bottom:130px;
         
            color: #A3258E;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 227%; /* 38.59px */
        margin-top:30px;
        clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%);
        padding-left: 0px;
        padding-top:35px;
        display:flex;
        justify-content:center;
        
        
        
        
        
       
        
        }
        .list ul{
       width:70%;
       text-align:center;
       list-style:none
    
        
        
        }
        .imp{
            font-size:16px;
        }
}
@media screen and (min-width: 960px) and (max-width: 1279px){
    .ws__1{
        display:flex;
        flex-direction:column;
        width:100%;
        align-items: start;
        
        
        margin-top:20px;
        position:relative;
        z-index:-1;
    }
    
        
        .heading{
            color: #A3258E;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 159.523%;
            position: relative;
            padding-left: 30px;
          
            width: 100%;
            display: flex;
   
            justify-content: start;
        
        }
        .title{
            color: #A6A6A6;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 159.523%; /* 25.524px */
        position: relative;
        padding-left:30px;
        
        }
        .para{
            color: #2E2E2E;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 231.4%; /* 55.536px */
        width: 70%;
        padding-left:30px;
        
        flex-shrink: 0;
        margin-top: 20px;
        position: relative;
        
        }
     
        .list{
        
            width: 100%;
            background-color: #FFE9FA;
           
            margin-bottom:130px;
         
            color: #A3258E;
            font-family: Inter;
            font-size: 17px;
            font-style: normal;
            font-weight: 600;
            line-height: 227%; /* 38.59px */
        margin-top:30px;
        clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%);
        padding-left: 0px;
        padding-top:30px;
        display:flex;
        justify-content:center;

      
        
        
        
        
       
        
        }
        .list ul{
            list-style:none;
            width:80vw;
   
    
        
        
        }
        .imp{
            font-size:17px;
        }
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
    .ws__1{
        diplay:flex;
        flex-direction:column
        width:100%;
        
        
        
        margin-top:20px;
        position:relative;
        z-index:-1;
     
    }
    
    
    .heading{
        color: #A3258E;
        font-family: Inter;
        font-size: 26px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%;
        position: relative;
        padding-left: 120px;
      
        width: 100%;
        display: flex;

        justify-content: start;
    
    }
    .title{
        color: #A6A6A6;
    font-family: Inter;
    font-size: 19px;
    padding-left: 120px;
    font-style: normal;
    font-weight: 500;
    line-height: 159.523%; /* 51.047px */
    position: relative;
    
    }
    .para{
        color: #2E2E2E;
    font-family: Inter;
    font-size: 19px;
    font-style: normal;
    font-weight: 600;
    line-height: 231.4%; /* 55.536px */
    width: 70%;
    padding-left:120px;
    
    flex-shrink: 0;
    margin-top: 20px;
    position: relative;
    
    }
    .list{
    
        width: 100%;
        background-color: #FFE9FA;
       height:auto;
        margin-bottom:130px;
        color: #A3258E;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 264.4%; /* 60.812px */
    clip-path: polygon(83% 0, 100% 21%, 100% 100%, 0 100%, 0 13%);
    margin-top:35px;
    
    
    
    
    
    
    
    padding-top:166px;
    padding-bottom:45px;
    padding-left:0px;
    display:flex;
    justify-content:center;

    
    
    }
    .list ul{
        width:80vw;
        list-style:none;
        
    
    
    
    }
    .imp{
        font-size: 18px;
        font-weight:bold;
    }
    
}
@media screen and (min-width: 1921px){
    .ws__1{
        diplay:flex;
        flex-direction:column
        width:100%;
        
        
        
        margin-top:20px;
        position:relative;
        z-index:-1;
     
    }
    
    
    .heading{
        color: #A3258E;
        font-family: Inter;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 159.523%;
        position: relative;
        padding-left: 150px;
      
        width: 100%;
        display: flex;

        justify-content: start;
    
    }
    .title{
        color: #A6A6A6;
    font-family: Inter;
    padding-left: 150px;
    font-style: normal;
    font-weight: 500;
    line-height: 159.523%; /* 51.047px */
    position: relative;
    font-size: 20px;
    
    }
    .para{
        color: #2E2E2E;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 231.4%; /* 55.536px */
    width: 70%;
    padding-left:150px;
    
    flex-shrink: 0;
    margin-top: 20px;
    position: relative;
    
    }
    .list{
    
        width: 100%;
        background-color: #FFE9FA;
       
        margin-bottom:130px;
        color: #A3258E;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 264.4%; /* 60.812px */
    clip-path: polygon(83% 0, 100% 21%, 100% 100%, 0 100%, 0 13%);
    margin-top:35px;
    
    
    
    
    
    
    padding-top: 150px;
    padding-bottom:45px;
    padding-left:0px;
    display:flex;
    justify-content:center;

    
    
    }
    .list ul{
        width:80vw;
        list-style:none;
        
    
    
    
    }
    .imp{
        font-size: 20px;
    }
}

`