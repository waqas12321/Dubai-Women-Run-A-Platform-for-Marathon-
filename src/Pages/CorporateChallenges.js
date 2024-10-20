import React from 'react'
import { styled } from 'styled-components';
import Header1 from '../Components/Header1';
import Footer from '../Components/Footer';



const CorporateChallenges = () => {
   
 

  return (
   <Wrapper>
    <div>
        <Header1/>
    </div>
    <div>
    <div className='ws__1'>
    <div className='heading'>Corporate Challenges</div>
    <div className='title'>Overview</div>
    <div className='para'>
    <strong>"Unite for Progress: Empowering Women's Success through Corporate Challenge"</strong>
    </div>
    <div className='list'>
        <ul>
            <li>
            The Dubai Women's Run 2023 is proud to introduce the <span className='imp'>"Corporate Challenge,"</span> an inspiring initiative aimed at championing the remarkable women who drive success within your organization.

            </li>
            
           <li>
           
           At the heart of the Corporate Challenge is the belief that every stride we take together can make a significant impact. By participating, you will not only contribute to a greater cause but also foster a sense of camaraderie, teamwork, and well-being among your employees. This is a chance to showcase your company's dedication to gender equality and the advancement of women in leadership roles.

           </li>
           <li >
        <div className='imp'>Why Participate?</div>

           </li>
          
          <li><div className='imp'>Empowerment:</div> Demonstrate your company's commitment to supporting the women who lead the charge to success within your organization.

</li>
          <li><div className='imp'>Visibility:</div> Gain positive exposure and recognition as a champion of diversity and women's empowerment.
</li>
          <li><div className='imp'>Team Building:</div> Foster teamwork, collaboration, and a healthy competitive spirit among your employees.

</li>
          <li>
         <div className='imp'>Corporate Wellness:</div> Promote physical and mental well-being by encouraging your team to participate in a memorable and impactful event.

          </li>
          <li>
  <div className='imp'>Networking:</div> Connect with like-minded businesses and individuals who share your values.

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

export default CorporateChallenges;
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
    
    
    
    
    
    
    
    padding-top:120px;
    padding-bottom:35px;
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