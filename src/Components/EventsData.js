import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const EventsData = (prop) => {
    const {value}=prop;
    console.warn(value)

if(!value){
    return null;
}
else{


  return (
    <Wrapper>
     
        
            <div className='data'>
                <p>{value.para1}</p>
                <ul>
                {value.li1 ? <li>{value.li1}</li> :<></>}
                {value.li2 ? <li>{value.li2}</li> :<></>}
                {value.li3 ? <li>{value.li3}</li> :<></>}
                {value.li4 ? <li>{value.li4}</li> :<></>}

                {value.li5 ? <li>{value.li5}</li> :<></>}
                {value.li6 ? <li>{value.li6}</li> :<></>}
                {value.li7 ? <li>{value.li7}</li> :<></>}
                {value.li8 ? <li>{value.li8}</li> :<></>}
                {value.li9 ? <li>{value.li9}</li> :<></>}
                {value.li10 ? <li>{value.li10}</li> :<></>}

                </ul>
                
                {value.para2 ? <p>{value.para2}</p> :<></>}
                
                
            </div>
         
    </Wrapper>
  )
}
}

export default EventsData;
const Wrapper=styled.div`

display:flex;
justify-content:center;
align-items:center;
margin-bottom:100px;
.data{
   
    padding:50px 20px;
    width: 75%;
    border-radius: 20.795px;
    background: #FFE9FA;
    color: #A3258E;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: 231.4%; /* 55.536px */

    
}

@media screen and (min-width: 0px) and (max-width: 599px){
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:100px;
  .data{
     
 
      padding:50px 20px;
      width: 100%;
      border-radius: 0px;
      background: #FFE9FA;
      color: #A3258E;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 231.4%; /* 55.536px */
  
      
  }
}



`