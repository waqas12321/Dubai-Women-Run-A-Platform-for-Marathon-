import React from 'react'
import Header1 from '../Components/Header1'
import Footer from '../Components/Footer'
import { styled } from 'styled-components'
import { AiOutlineArrowDown } from 'react-icons/ai';

const Pictures = () => {
  return (
<Wrapper>
<Header1/>
<div className='heading'>
Our <b>Pictures</b>
  
</div>
<div className='pic'>
  <div className='pic__1'>

  </div>
  <div className='pic__2'>
    <div className='pic__2__1__a'></div>
    <div  className='pic__2__1__b'></div>
    <div  className='pic__2__1__c '></div>
    <div  className='pic__2__1__d '></div>
  </div>
  <div className='pic__2 '>
  <div className='pic__2__1__a'></div>
    <div  className='pic__2__1__b'></div>
    <div  className='pic__2__1__c '></div>
    <div  className='pic__2__1__d '></div>
    
  </div>
  <div className='pic__4'></div>
</div>

   
   <Footer/>


</Wrapper>


  )
}

export default Pictures
const Wrapper=styled.div`



@media screen and (min-width: 0px) and (max-width: 599px){
  overflow-x:hidden;
  .heading{
    position:relative;
    color: #A3258E;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 159.523%;
  margin-top: 20px;
  margin-bottom:20px;
  left:30px;
  }
  .pic{
  
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:40px;
    margin-bottom:50px;
    margin-top: 24px;
    padding-right: 0px;

  
    width:90%;
    margin:auto
 
 
  
  }
  .pic__1{
    width: 349.398px;
    height: 385.673px;
    flex-shrink: 0;
  
    background-image: url("/images/pic__1.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  
  }
  .pic__2{
    width: 349.398px;
    height: 385.673px;
    flex-shrink: 0;
  
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:16px;
  
  }
  .pic__2__1__a{
  
  
  width: 164.429px;
  height: 183.999px;
  flex-shrink: 0;
  background-image: url("/images/pic__2__a.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  }
  .pic__2__1__b{
  
    width: 164.429px;
    height: 183.999px;
    flex-shrink: 0;
    background-image: url("/images/pic__2__b.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    }
    .pic__2__1__c{
  
     
      width: 164.429px;
      height: 183.999px;
      flex-shrink: 0;
      background-image: url("/images/pic__2__c.webp");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      
      }
      .pic__2__1__d{
  
       
        width: 164.429px;
        height: 183.999px;
        flex-shrink: 0;
        background-image: url("/images/pic__1.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
        }
  
  .pic__4{
    width: 349.398px;
    height: 385.673px;
    flex-shrink: 0;
  
    background-image: url("/images/pic__4.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

}
@media screen and (min-width: 600px) and (max-width: 959px){
  overflow-x:hidden;
  .heading{
    position:relative;
    color: #A3258E;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 159.523%;
  margin-top: 20px;
  left:30px;
  }
  .pic{
   
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:40px;
    margin-bottom:50px;
    margin-top: 24px;
    padding-right: 0px;
  
    width:100%;
 
 
  
  }
  .pic__1{
    width: 488.398px;
    height: 385.673px;
    flex-shrink: 0;
  
    background-image: url("/images/pic__1.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  
  }
  .pic__2{
    width: 488.398px;
    height: 385.673px;
    flex-shrink: 0;
  
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:16px;
  
  }
  .pic__2__1__a{
  
  
  width: 234.429px;
  height: 183.999px;
  flex-shrink: 0;
  background-image: url("/images/pic__2__a.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  }
  .pic__2__1__b{
  
    width: 234.429px;
    height: 183.999px;
    flex-shrink: 0;
    background-image: url("/images/pic__2__b.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    }
    .pic__2__1__c{
  
     
      width: 234.429px;
      height: 183.999px;
      flex-shrink: 0;
      background-image: url("/images/pic__2__c.webp");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      
      }
      .pic__2__1__d{
  
       
        width: 234.429px;
        height: 183.999px;
        flex-shrink: 0;
        background-image: url("/images/pic__1.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
        }
  
  .pic__4{
    width: 488.398px;
    height: 385.673px;
    flex-shrink: 0;
  
    background-image: url("/images/pic__4.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  

}
@media screen and (min-width: 960px) and (max-width: 1279px){
  overflow-x:hidden;
  .heading{
    position:relative;
    color: #A3258E;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 159.523%;
  margin-top: 20px;
  left:30px;
  }
  .pic{
   
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap:40px;
    margin-bottom:50px;
    margin-top: 24px;
    padding-right: 0px;
  
    width:80%;
    margin-left:30px;
  
  }
  .pic__1{
    width: 488.398px;
    height: 385.673px;
    flex-shrink: 0;
  
    background-image: url("/images/pic__1.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  
  }
  .pic__2{
    width: 488.398px;
    height: 385.673px;
    flex-shrink: 0;
  
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:16px;
  
  }
  .pic__2__1__a{
  
  
  width: 234.429px;
  height: 183.999px;
  flex-shrink: 0;
  background-image: url("/images/pic__2__a.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  }
  .pic__2__1__b{
  
    width: 234.429px;
    height: 183.999px;
    flex-shrink: 0;
    background-image: url("/images/pic__2__b.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    }
    .pic__2__1__c{
  
     
      width: 234.429px;
      height: 183.999px;
      flex-shrink: 0;
      background-image: url("/images/pic__2__c.webp");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      
      }
      .pic__2__1__d{
  
       
        width: 234.429px;
        height: 183.999px;
        flex-shrink: 0;
        background-image: url("/images/pic__1.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
        }
  
  .pic__4{
    width: 488.398px;
    height: 385.673px;
    flex-shrink: 0;
  
    background-image: url("/images/pic__4.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
  
  overflow-x:hidden;
.heading{
  position:relative;
  color: #A3258E;
font-family: Inter;
font-size: 35px;
font-style: normal;
font-weight: 400;
line-height: 159.523%;
margin-top: 20px;
left:120px;
}
.pic{
 
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap:40px;
  margin-bottom:50px;
  margin-top: 24px;
  padding-right: 0px;

  width:80%;
  margin-left:120px;

}
.pic__1{
  width: 488.398px;
  height: 385.673px;
  flex-shrink: 0;

  background-image: url("/images/pic__1.webp");
background-position: center;
background-repeat: no-repeat;
background-size: cover;


}
.pic__2{
  width: 488.398px;
  height: 385.673px;
  flex-shrink: 0;

  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  gap:16px;

}
.pic__2__1__a{


width: 234.429px;
height: 183.999px;
flex-shrink: 0;
background-image: url("/images/pic__2__a.webp");
background-position: center;
background-repeat: no-repeat;
background-size: cover;

}
.pic__2__1__b{

  width: 234.429px;
  height: 183.999px;
  flex-shrink: 0;
  background-image: url("/images/pic__2__b.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  }
  .pic__2__1__c{

   
    width: 234.429px;
    height: 183.999px;
    flex-shrink: 0;
    background-image: url("/images/pic__2__c.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    }
    .pic__2__1__d{

     
      width: 234.429px;
      height: 183.999px;
      flex-shrink: 0;
      background-image: url("/images/pic__1.webp");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      
      }

.pic__4{
  width: 488.398px;
  height: 385.673px;
  flex-shrink: 0;

  background-image: url("/images/pic__4.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


}
@media screen and (min-width: 1921px){
  overflow-x:hidden;
  .heading{
    position:relative;
    color: #A3258E;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 159.523%;
  margin-top: 20px;
  left:150px;
  }
  .pic{
   
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap:40px;
    margin-bottom:50px;
    margin-top: 24px;
    padding-right: 0px;
  
    width:65%;
    margin-left:150px;

  
  }
  .pic__1{
    width: 588.398px;
    height: 485.673px;
    flex-shrink: 0;
  
    background-image: url("/images/pic__1.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  
  }
  .pic__2{
    width: 588.398px;
    height: 485.673px;
    flex-shrink: 0;
  
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:16px;
  
  }
  .pic__2__1__a{
  
  
    width: 284.429px;
  height: 233.999px;
  flex-shrink: 0;
  background-image: url("/images/pic__2__a.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  }
  .pic__2__1__b{
    width: 284.429px;
    height: 233.999px;
    flex-shrink: 0;
    background-image: url("/images/pic__2__b.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    }
    .pic__2__1__c{
  
     
      width: 284.429px;
      height: 233.999px;
      flex-shrink: 0;
      background-image: url("/images/pic__2__c.webp");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      
      }
      .pic__2__1__d{
  
       
        width: 284.429px;
        height: 233.999px;
        flex-shrink: 0;
        background-image: url("/images/pic__1.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
        }
  
  .pic__4{
    width: 588.398px;
    height: 485.673px;
    flex-shrink: 0;
  
    background-image: url("/images/pic__4.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  

}
`