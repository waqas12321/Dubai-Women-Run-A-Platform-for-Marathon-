import React from 'react'
import { styled } from 'styled-components'

const Experience = () => {
  return (
   <Wrapper>
<div className='exp__1'>TO EXPERIENCE</div>
<div className='exp__2'>
For an epic edition with more
 participants and activities than ever
before. You won't want to miss out
on the inspiration galore. We're
thrilled to announce that our 10th
edition will feature our Women of
Substance - 10 incredible women
who will inspire and redefine
perceptions of strength.

</div>
   </Wrapper>
  )
}

export default Experience
const Wrapper=styled.section`





@media screen and (min-width: 0px) and (max-width: 599px){
  width:100%;
  padding-top:0px;
  height: 340px;
  padding-bottom:3px;
 


background: rgba(163, 37, 142, 0.04);
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;

padding-left:30px;
margin-bottom:30px;

.exp__1{
  color: #A3258E;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 159.523%; /* 38.285px */
  width: 90%;
  text-align:justify;
  font-weight:bold;

}
.exp__2{
  margin-top: 10px;
  color: #2E2E2E;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: 194%; /* 31.04px */
width: 90%;
text-align: start;


}
}
@media screen and (min-width: 600px) and (max-width: 959px){
  width:100%;
  padding-top:50px;
  height: 440px;
  padding-bottom:35px;


background: rgba(163, 37, 142, 0.04);
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;

padding-left:30px;
margin-bottom:35px;

.exp__1{
  color: #A3258E;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 159.523%; /* 38.285px */
  width: 90%;
  text-align:left;
  font-weight:bold;
  

}
.exp__2{
  margin-top: 10px;
  color: #2E2E2E;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: 194%; /* 31.04px */
width: 90%;
text-align: justify;


}
}
@media screen and (min-width: 960px) and (max-width: 1279px){
  width:100%;


  height: 440px;
  background: rgba(163, 37, 142, 0.04);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left:30px;
  margin-bottom:40px;
  
  .exp__1{
      color: #A3258E;
   text-align: left;
  font-size: 25px;
  font-family: Inter;
  line-height: 159.523%;
  width:80vw;
  font-weight:bold;

  
  }
  .exp__2{
      color: #2E2E2E;
   text-align: left;
  font-size: 19px;
  font-family: Inter;
  font-weight: 500;
  line-height: 190%;
  width:80vw;
 
  
  }
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
  width:100%;


  height: 440px;
  background: rgba(163, 37, 142, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right:120px;
  margin-bottom:45px;

  
  .exp__1{
      color: #A3258E;
  text-align: left;
  font-size: 25px;
  font-family: Inter;
  line-height: 159.523%;
  width:80vw;
  font-weight:bold;

  
  }
  .exp__2{
      color: #2E2E2E;
  text-align: left;
  font-size: 19px;
  font-family: Inter;
  font-weight: 500;
  line-height: 190%;
  width:80vw;
 
  
  }
  
}
@media screen and (min-width: 1921px){
  width:100%;
  margin-bottom:50px;

  height: 440px;
  background: rgba(163, 37, 142, 0.04);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left:150px;

  
  .exp__1{
      color: #A3258E;
   text-align: left;
  font-size: 30px;
  font-family: Inter;
  line-height: 159.523%;
  width:80vw;
  font-weight:bold;

  
  }
  .exp__2{
      color: #2E2E2E;
   text-align: left;
  font-size: 23px;
  font-family: Inter;
  font-weight: 500;
  line-height: 190%;
  width:80vw;
 
  
  }
}

`