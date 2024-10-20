import React from 'react'
import { styled } from 'styled-components';
import Footer from "./Footer.js";

const SponsorData = ({value}) => {
if(!value){
    return null;
}
else{


 

  return (
    <Wrapper>
<div className='first__section'>
    <div className='first__section__1'>
        <div className='heading'>

            {value.title}
        </div>
    </div>
    <div className='first__section__2'>

        <ul>
        {value.data.p1 ? <li>{value.data.p1}</li> :<></>}
            {value.data.p2 ? <li>{value.data.p2}</li> :<></>}
            {value.data.p3 ? <li>{value.data.p3}</li> :<></>}
            {value.data.p4 ? <li>{value.data.p4}</li> :<></>}
            {value.data.p5 ? <li>{value.data.p5}</li> :<></>}
            {value.data.p6 ? <li>{value.data.p6}</li> :<></>}
            {value.data.p7 ? <li>{value.data.p7}</li> :<></>}
            {value.data.p8 ? <li>{value.data.p8}</li> :<></>}
            {value.data.p9 ? <li>{value.data.p9}</li> :<></>}
            {value.data.p10 ? <li>{value.data.p10}</li> :<></>}
            {value.data.p11 ? <li>{value.data.p11}</li> :<></>}
            {value.data.p12 ? <li>{value.data.p12}</li> :<></>}
                {value.data.p13 ? <li>{value.data.p13}</li> :<></>}
                {value.data.p14 ? <li>{value.data.p14}</li> :<></>}
                {value.data.p15 ? <li>{value.data.p15}</li> :<></>}
        </ul>
    </div>
</div>

<div className='second__section'>
<div className='second__section__heading'>
{value.tiers}

</div>
<div>
{value.tiersData.p1}
</div>
<div>
{value.tiersData.p2}
    
</div>
<div>
{value.tiersData.p3}
    
</div>
<div>
{value.tiersData.p4}
    
</div>
<div>
{value.tiersData.p5}
    
</div>
<div>
{value.tiersData.p6}
</div>
</div>

    </Wrapper>
  )
}
}

export default SponsorData;
const Wrapper=styled.section`
animation: wE 0.75s;
  
  
@keyframes wE {
  from {
    opacity: 0;
    transform: rotateX(-10deg); 
  }
  to {
    opacity: 1; 
    transform: rotateX(0); 
  }
}

width:100%;

display:flex;
flex-direction:row;
justify-content:flex-end;
.first__section{
  
    display:flex;
    flex-direction:column;
   

    width: 48vw;
    padding-left: 75px;


}
.first__section__1{

    display: flex;
width: 289px;

margin-top:10px;


}

.first__section__2{

    width: 30vw;

  

}
.first__section__2 ul{

    padding-left: 26px;
}
.first__section__2 ul li{

 text-decoration:none;
}
.heading{
    color: #A3258E;
font-family: Inter;
font-size: 35px;
font-style: normal;
font-weight: 400;
line-height: 159.523%;
}

.second__section{

    width: 50vw;
background-image: url("/images/sponsor.webp");
background-position: center;
background-repeat: no-repeat;
background-size: 1022px 853px;

display:flex;
flex-direction:column;
align-items:flex-end;
justify-content:center;
padding-right: 60px;
color: white;
text-align: right;
font-family: Inter;
font-size: 20.573px;
font-style: normal;
font-weight: 400;
line-height: 159.523%;
height:642px;






}
.second__section__heading{
    color: #FFF;
    text-align: right;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    margin-bottom:20px;
    line-height: 159.523%; /* 48.219px */

}
@media (max-width: 480px){
    animation: wE 0.75s;
  
  
@keyframes wE {
  from {
    opacity: 0;
    transform: rotateX(-10deg); 
  }
  to {
    opacity: 1; 
    transform: rotateX(0); 
  }
}

width:100%;

display:flex;
flex-direction:column;
justify-content:center;
.first__section{
  
    display:flex;
    flex-direction:column;
   

    width: 100%;
    padding-left: 21px;
    order:2;
    margin-top: 30px;


}
.first__section__1{

    display: flex;
width: 310px;

margin-top:10px;
color: #A3258E;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 159.523%; /* 28.714px */



}

.first__section__2{

    width: 310px;
margin-top:5px;
  

}
.first__section__2 ul{

    padding-left: 26px;
    color: #2E2E2E;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 175.523%; /* 26.328px */
}
.first__section__2 ul li{

 text-decoration:none;
}
.heading{
    color: #A3258E;
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 159.523%;
}

.second__section{

 
    width: 100%;
    background-image: url(/images/sponsor.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 1022px 853px;
    display: flex;
    flex-direction: column;
    padding-right: 0px;
    color: #FFF;
    text-align: right;
    font-family: Inter;
    font-size: 21.177px;
    font-style: normal;
    font-weight: 400;
    line-height: 159.523%; /* 27.402px */
    align-items: start;
    height: 498px;
    padding-left: 18px;
    height: 399px;







}
.second__section__heading{
    color: #FFF;
    text-align: right;
    font-family: Inter;
    font-size: 32.227px!Important;
    font-style: normal;
    font-weight: 600;
    margin-bottom:20px;
    line-height: 159.523%; /* 48.219px */

}

}


`