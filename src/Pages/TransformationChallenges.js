import React from 'react'
import { styled } from 'styled-components';
import Header1 from '../Components/Header1';
import Footer from '../Components/Footer';



const TransformationChallenges = () => {
   
 

  return (
   <Wrapper>
    <div>
        <Header1/>
    </div>
    <div>
    <div className='ws__1'>
    <div className='heading'>Transformation Challenges</div>


    <div className='list'>
        <ul>
            <li>
            Transform your life with our comprehensive Transformation Challenge. Our expert trainers and coaches will guide and support you as you work towards your fitness and wellness goals.
            </li>
            
           <li>Join a vibrant community, receive personalized plans, and celebrate your progress along the way.</li>
       
        
  
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

export default TransformationChallenges;
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
    margin-top:30px;
    
    
    
    
    
    
    
    padding-top:50px;
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
    margin-top:30px;
    
    
    
    
    
    
    padding-top: 80px;
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