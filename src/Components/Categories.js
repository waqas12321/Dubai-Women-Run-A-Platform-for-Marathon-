import React from 'react'
import { styled } from 'styled-components'
import Header1 from '../Components/Header1'
import Footer from '../Components/Footer'
import CategoryData from '../Components/CategoryData'
import { useCategoryHook } from '../Context/CategoryContext'

const Categories = () => {
    const {categoryData}=useCategoryHook();
 

  return (
<Wrapper>
    <Header1/>
    <div className='main'>
        <div  className='cat__1'>
            <div  className='cat__1__a'  onClick={()=>console.warn("hello")}  >
            Frequently <b>Asked Questions</b>
            </div>
         

        </div>
     <div className='cat'>
     {categoryData.map((currElem)=>{
        return <CategoryData key={currElem._id} {...currElem} />
       })}
     </div>
    </div>
    <Footer/>
    </Wrapper>
  )
}

export default Categories
const Wrapper=styled.div`
@media screen and (min-width: 0px) and (max-width: 599px){
  width:100%;
  .main{

    display:flex;
    flex-direction:column;
    align-items:start;
  margin-top:15px;

  padding-left:30px;
  
 
   
}

.cat__1{
  
    display: flex;
    flex-direction: column;
 
    margin-top: 10px;
    position:relative;
    z-index:-1;

    width:310px;
  
}




.cat__1__a{

  color: #A3258E;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 159.523%; /* 31.905px */

width:310px;

}

.cat{
  
    display: flex;
    flex-direction: column;
   

    gap: 20px;
    margin-top: 65px;
    margin-bottom: 75px;
    position:relative;
    z-index:1;
   
    width:90%;
    justify-content:start;
    gap:15px;

  
}

}
@media screen and (min-width: 600px) and (max-width: 959px){
  width:100%;
  .main{
  
    display:flex;
    flex-direction:column;
    align-items:start;
  margin-top:15px;

  
  
  }

.cat__1{
  
    display: flex;
    flex-direction: column;
    position: relative;
    left: 30px;
    margin-top: 10px;
    position:relative;
    z-index:1;

    width:310px;
  
}




.cat__1__a{

  color: #A3258E;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 159.523%; /* 31.905px */

width:310px;

}
.cat__1__b{

  color: #2E2E2E;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 175.523%; /* 29.839px */
    width: 310px;
    padding-left: 3px;
    margin-top: 10px;

   
}
.cat{
  
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
   
  
    position: relative;
    left: 30px;
    gap: 25px;
    margin-top: 65px;
    margin-bottom: 75px;
    position:relative;
    z-index:1;
  
    width:90%;
    justify-content:start;
  
}
  
}
@media screen and (min-width: 960px) and (max-width: 1279px){
  width:100%;

  .main{
    animation: wE 0.75s;
    display:flex;
    flex-direction:column;
    align-items:start;
  margin-top:15px;
  
  
   
}

.cat__1{
  
    display: flex;
    flex-direction: column;
    position: relative;
    left: 30px;
    margin-top: 10px;
    position:relative;
    z-index:-1;

    width:310px;
  
}




.cat__1__a{

  color: #A3258E;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 159.523%; /* 31.905px */

width:310px;

}
.cat__1__b{

  color: #2E2E2E;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 175.523%; /* 29.839px */
    width: 310px;
    padding-left: 3px;
    margin-top: 10px;

   
}
.cat{
  
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;

    position: relative;
    left: 0px;
    gap: 25px;
    margin-top: 65px;
    margin-bottom: 75px;
    position:relative;
    z-index:1;
    
    width:100%;
    align-items:center;
    justify-content:start;
  
}
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
  width:100%;

  .main{
    animation: wE 0.75s;
    display:flex;
    flex-direction:column;
    align-items:start;
  margin-top:15px;



  
  
}
.cat__1{
  
    display: flex;
    flex-direction: column;
    position: relative;
    left: 120px;
    margin-top: 10px;
    position:relative;
    z-index:-1;

    width:310px;
    
  
}




.cat__1__a{

  color: #A3258E;
  font-family: Inter;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 159.523%; /* 31.905px */

width:310px;


}
.cat__1__b{

  color: #2E2E2E;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 175.523%; /* 29.839px */
    width: 310px;
    padding-left: 3px;
    margin-top: 10px;

   
}
.cat{
  width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
 align-items:center;
    position: relative;
    left: 0px;
    gap: 35px;
    margin-top: 65px;
    margin-bottom: 75px;
    position:relative;
    z-index:1;
    justify-content:center;
   
 

  
  
  
    
  
}
}
@media screen and (min-width: 1921px){
  width:100%;
  .main{
    animation: wE 0.75s;
    display:flex;
    flex-direction:column;
    align-items:start;
  margin-top:15px;
  
 
   
}

.cat__1{
  
    display: flex;
    flex-direction: column;
    position: relative;
    left: 150px;
    margin-top: 10px;
    position:relative;
    z-index:-1;

    width:70%;
  
  
}




.cat__1__a{

  color: #A3258E;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 159.523%; /* 31.905px */

width:70%;

}
.cat__1__b{

  color: #2E2E2E;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 175.523%; /* 29.839px */
    width: 310px;
    padding-left: 3px;
    margin-top: 10px;

   
}
.cat{
  
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    
    position: relative;
    left: 0px;
    gap: 40px;
    margin-top: 65px;
    margin-bottom: 75px;
    position:relative;
    z-index:1;
    align-items:center;
    width:100%;
    justify-content:center;

}
}


`