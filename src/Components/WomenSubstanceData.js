import React from 'react'
import { useCategoryHook } from '../Context/CategoryContext'
import { styled } from 'styled-components';

const WomenSubstanceData = (value) => {

   
  return (
    <Wrapper>
 
            <div className='img'><img src={value.data.img} alt="pic not found"/></div>
            <div className='name'>{value.data.name}</div>
            <div className='paragraph'>{value.data.para}</div>
     

    </Wrapper>
  )
}

export default WomenSubstanceData
const Wrapper=styled.div`




 
 
@media screen and (min-width: 0px) and (max-width: 599px){
  width: 279px;
  
  margin:auto;



.img{
    width: 275px;
    height: 350px;
    flex-shrink: 0;
    border-radius: 23px;
}
.img img{
    width: 275px;
    height: 350px;
    flex-shrink: 0;
    border-radius: 23px;
}
.name{
  color: #2E2E2E;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 169.9%; /* 35.679px */
margin-top: 38px;

}
.paragraph{
  color: #696969;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 169.9%; /* 28.883px */
    margin-top: 10px;
}
}
@media screen and (min-width: 600px) and (max-width: 959px){
  width: 279px;




.img{
    width: 275px;
    height: 350px;
    flex-shrink: 0;
    border-radius: 23px;
}
.img img{
    width: 275px;
    height: 350px;
    flex-shrink: 0;
    border-radius: 23px;
}
.name{
  color: #2E2E2E;
font-family: Inter;
font-size: 19px;
font-style: normal;
font-weight: 700;
line-height: 169.9%; /* 35.679px */
margin-top: 38px;

}
.paragraph{
  color: #696969;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 169.9%; /* 28.883px */
    margin-top: 10px;
} 
}
@media screen and (min-width: 960px) and (max-width: 1279px){
  width: 279px;




  .img{
      width: 275px;
      height: 350px;
      flex-shrink: 0;
      border-radius: 23px;
  }
  .img img{
      width: 275px;
      height: 350px;
      flex-shrink: 0;
      border-radius: 23px;
  }
  .name{
    color: #2E2E2E;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 169.9%; /* 35.679px */
  margin-top: 38px;
  
  }
  .paragraph{
    color: #696969;
    font-family: Inter;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 169.9%; /* 28.883px */
      margin-top: 10px;
  } 
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
  width: 279px;



}
.img{
    width: 285px;
    height: 360px;
    flex-shrink: 0;
    border-radius: 23px;
}
.img img{
    width: 285px;
    height: 360px;
    flex-shrink: 0;
    border-radius: 23px;
}
.name{
    color: #2E2E2E;
font-family: Inter;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: 169.9%; /* 44.174px */;
margin-top: 38px;

}
.paragraph{
    color: #696969;
    font-family: Inter;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 169.9%;
    margin-top: 10px;
}


}
@media screen and (min-width: 1921px){
  width: 279px;



}
.img{
    width: 295px;
    height: 370px;
    flex-shrink: 0;
    border-radius: 23px;
}
.img img{
    width: 295px;
    height: 370px;
    flex-shrink: 0;
    border-radius: 23px;
}
.name{
    color: #2E2E2E;
font-family: Inter;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: 169.9%; /* 44.174px */;
margin-top: 38px;
width: 279px;

}
.paragraph{
    color: #696969;
    font-family: Inter;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 169.9%;
    margin-top: 10px;
    
    width: 279px;

}
}
`