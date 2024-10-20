
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import Header from './Header';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Footer from './Footer';

const Main = () => {
  return (
<>
<Wrapper>
    <Header/>
    <div className='main__data'>
      <div className='main__data__1'>
<div className='main__data__1__1'>10<sup>th</sup> Edition </div>
<div className='main__data__1__1'>Dubai Women's Run</div>
<div className='main__data__1__2'>5<sup>th</sup> Nov 2023</div>
<div className='main__data__1__3'> 
<NavLink  to="https://www.premieronline.com/event/dubai_womens_run_2023_6472" target="_blank"><button>REGISTER NOW</button></NavLink>

</div>
      </div>
      <div className='main__data__2'>

<div className='line'></div>
      </div>
    </div>
    


</Wrapper>
</>
  )
}

export default Main

const Wrapper=styled.section`


@media screen and (min-width: 0px) and (max-width: 599px){
 
  width: 100%;
height: 566px;
background-image: url("/images/Vector 1.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;

clip-path: polygon(50% 0%, 100% 0, 100% 43%, 100% 85%, 81% 97%, 0 87%, 0% 43%, 0 0);
.main__data{

  display:flex;
  flex-direction:column;
  position:relative;
  z-index:-1;
  align-items: center;
  margin-top:30px
}
.main__data__1{

  width: 330px;
height: autp;

position:relative;
left:0px;
display:flex;
flex-direction:column;






}
.main__data__1__1{
 
  color: #FFF;
text-align: center;
font-family: Inter;
font-size: 35px;
   font-style: normal;
font-weight: 900;
line-height: 133.523%; /* 60.085px */
padding-top:0px;
}
.main__data__1__2
{
  color: #FFF;
  text-align: center;
  font-size: 15.161px;
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 10.314px;
 margin-top:10px;
  

}
.main__data__1__3{
 
  width: 245.269px;
  margin:auto;
}
.main__data__1__3 button{
  color: #A3258E;
  text-align: center;
  font-family: Inter;
  font-size: 15.443px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 245.269px;
  height: 45.902px;
  flex-shrink: 0;
  border-radius: 147.984px;
  background: #FFF;
  box-shadow: 0px 2.7404391765594482px 41.10658645629883px 0px rgba(0, 0, 0, 0.03);
  margin-top: 28px;
  

border:none;

}
.main__data__2{

  display: flex;
  width: 136px;
  padding-right: 0px;
  justify-content: center;

  gap: 15.021px;
  position: relative;
  left: 15px;
  top: 130px;

  flex-direction: row;

}
.icons{
  width: 31.09px;
  height: 31.09px;
  flex-shrink: 0;
color:#FFFFFF;
font-size: 24px;

display:flex;

align-items:center;

}

 
  .line{
 
 display:none;
  
}
}
@media screen and (min-width: 600px) and (max-width: 959px){
  width: 100%;
  height: 566px;
  background-image: url("/images/Vector 1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  clip-path: polygon(50% 0%, 100% 0, 100% 43%, 100% 85%, 81% 97%, 0 87%, 0% 43%, 0 0);
  .main__data{
  
    display:flex;
    flex-direction:column;
    position:relative;
    z-index:-1;
    align-items: center;
    margin-top:30px
  }
  .main__data__1__3{
 
    width: 245.269px;
    margin:auto;
  }
  .main__data__1{
  
    width: 330px;
  height: 180px;
  
  position:relative;
  left:0px;
  display:flex;
  flex-direction:column;
  
  
  
  
  
  
  }
  .main__data__1__1{
   
    color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 35px;
  font-style: normal;
  font-weight: 900;
  line-height: 133.523%; /* 60.085px */
  padding-top:0px;
  }
  .main__data__1__2
  {
    color: #FFF;
    text-align: center;
    font-size: 15.161px;
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    letter-spacing: 10.314px;
    margin-top:10px;
    
  
  }
  .main__data__1 button{
    color: #A3258E;
    text-align: center;
    font-family: Inter;
    font-size: 15.443px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 245.269px;
    height: 45.902px;
    flex-shrink: 0;
    border-radius: 147.984px;
    background: #FFF;
    box-shadow: 0px 2.7404391765594482px 41.10658645629883px 0px rgba(0, 0, 0, 0.03);
    margin-top: 20px;
    
  
  border:none;
  }
  .main__data__2{
  
    display: flex;
    width: 136px;
    padding-right: 0px;
    justify-content: center;
  
    gap: 15.021px;
    position: relative;
    left: 15px;
    top: 130px;
  
    flex-direction: row;
  
  }
  .icons{
    width: 31.09px;
    height: 31.09px;
    flex-shrink: 0;
  color:#FFFFFF;
  font-size: 24px;
  
  display:flex;
  
  align-items:center;
  
  }
  
   
    .line{
   
   display:none;
    
  }
}
@media screen and (min-width: 960px) and (max-width: 1279px){
  width: 100%;
  height: 566px;
  background-image: url("/images/Vector 1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  clip-path: polygon(50% 0%, 100% 0, 100% 43%, 100% 85%, 81% 97%, 0 87%, 0% 43%, 0 0);
  .main__data{
  
    display:flex;
    flex-direction:column;
    position:relative;
    z-index:-1;
    align-items: center;
    margin-top:30px
  }
  .main__data__1__3{
 
    width: 245.269px;
    margin:auto;
  }
  .main__data__1{
  
    width: 330px;
  height: 180px;
  
  position:relative;
  left:0px;
  display:flex;
  flex-direction:column;
  
  
  
  
  
  
  }
  .main__data__1__1{
   
    color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 35px;
  font-style: normal;
  font-weight: 900;
  line-height: 133.523%; /* 60.085px */
  padding-top:0px;
  }
  .main__data__1__2
  {
    color: #FFF;
    text-align: center;
    font-size: 15.161px;
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    letter-spacing: 10.314px;
    margin-top:10px;
    
  
  }
  .main__data__1 button{
    color: #A3258E;
    text-align: center;
    font-family: Inter;
    font-size: 15.443px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 245.269px;
    height: 45.902px;
    flex-shrink: 0;
    border-radius: 147.984px;
    background: #FFF;
    box-shadow: 0px 2.7404391765594482px 41.10658645629883px 0px rgba(0, 0, 0, 0.03);
    margin-top: 20px;
    
  
  border:none;
  }
  .main__data__2{
  
    display: flex;
    width: 136px;
    padding-right: 0px;
    justify-content: center;
  
    gap: 15.021px;
    position: relative;
    left: 15px;
    top: 130px;
  
    flex-direction: row;
  
  }
  .icons{
    width: 31.09px;
    height: 31.09px;
    flex-shrink: 0;
  color:#FFFFFF;
  font-size: 24px;
  
  display:flex;
  
  align-items:center;
  
  }
  
   
    .line{
   
   display:none;
    
  }
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
  width: 100%;
  height: 566px;
  background-image: url("/images/Vector 1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  
  
  clip-path: polygon(50% 0%, 100% 0, 100% 43%, 100% 85%, 81% 97%, 0 87%, 0% 43%, 0 0);
  .main__data__1__3{
 
    width: 245.269px;
    margin:auto;
  }
  .main__data{
  
    display:flex;
    flex-direction:column;
    position:relative;
    z-index:-1;
    align-items: center;
  
    margin-top:50px;

  }
  .main__data__1{
  
    width: 450px;
  height: 180px;
  
  position:relative;
  left:0px;
  display:flex;
  flex-direction:column;
 
  
  
  
  
  
  
  }
  .main__data__1__1{
   
    color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 45px;

  font-weight: 1000;
  line-height: 133.523%; /* 60.085px */
  padding-top:0px;

  }
  .main__data__1__2
  {
    color: #FFF;
    text-align: center;
    font-size: 15.161px;
    font-family: Inter;

    font-weight: 800;
    letter-spacing: 10.314px;
    margin-top:10px;
  
  }
  .main__data__1 button{
    color: #A3258E;
    text-align: center;
    font-family: Inter;
    font-size: 15.443px;
  
    font-weight: 600;
    line-height: normal;
    width: 245.269px;
    height: 45.902px;
    flex-shrink: 0;
    border-radius: 147.984px;
    background: #FFF;
    box-shadow: 0px 2.7404391765594482px 41.10658645629883px 0px rgba(0, 0, 0, 0.03);
    margin-top: 28px;
    
  
  border:none;
  }
  .main__data__2{
  
    display: flex;
    width: 136px;
    padding-right: 0px;
    justify-content: center;
  
    gap: 15.021px;
    position: relative;
    left: 15px;
    top: 130px;
  
    flex-direction: row;
  
  }
  .icons{
    width: 31.09px;
    height: 31.09px;
    flex-shrink: 0;
  color:#FFFFFF;
  font-size: 24px;
  
  display:flex;
  
  align-items:center;
  
  }
  
   
    .line{
   
   display:none;
    
  }


    
}
@media screen and (min-width: 1921px){
  width: 100%;
  height: 766px;
  background-image: url("/images/Vector 1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  clip-path: polygon(50% 0%, 100% 0, 100% 43%, 100% 85%, 81% 97%, 0 87%, 0% 43%, 0 0);
  .main__data__1__3{
 
    width: 245.269px;
    margin:auto;
  }
  .main__data{
  
    display:flex;
    flex-direction:column;
    position:relative;
    z-index:-1;
    align-items: center;
    margin-top:25px;
  }
  .main__data__1{
  
    width: 600px;
  height: 180px;
  
  position:relative;
  left:0px;
  display:flex;
  flex-direction:column;
 
  
  
  
  
  
  
  }
  .main__data__1__1{
   
    color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 60px;
  font-style: normal;
  font-weight: 900;
  line-height: 133.523%; /* 60.085px */
  padding-top:0px;
  }
  .main__data__1__2
  {
    color: #FFF;
    text-align: center;
    font-size: 25.161px;
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    letter-spacing: 10.314px;
    margin-top:10px;
    
  
  }
  .main__data__1 button{
    color: #A3258E;
    text-align: center;
    font-family: Inter;
    font-size: 25.443px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 300.269px;
    height: 60.902px;
    flex-shrink: 0;
    border-radius: 147.984px;
    background: #FFF;
    box-shadow: 0px 2.7404391765594482px 41.10658645629883px 0px rgba(0, 0, 0, 0.03);
    margin-top: 24px;
    
  
  border:none;
  }
  .main__data__2{
  
    display: flex;
    width: 136px;
    padding-right: 0px;
    justify-content: center;
  
    gap: 15.021px;
    position: relative;
    left: 15px;
    top: 130px;
  
    flex-direction: row;
  
  }
  .icons{
    width: 31.09px;
    height: 31.09px;
    flex-shrink: 0;
  color:#FFFFFF;
  font-size: 24px;
  
  display:flex;
  
  align-items:center;
  
  }
  .main__data__1__3 {
    width: 300px;
    margin: auto;
}
  
   
    .line{
   
   display:none;
    
  }
}
`