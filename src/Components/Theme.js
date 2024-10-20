import React from 'react'
import { styled } from 'styled-components'

const Theme = () => {
  return (
   
    <Wrapper>
<div className='theme__1'>
    <div className='theme__1__1'>THE THEME</div>
    <div className='theme__1__2'>IT ALL STARTS
HERE</div>
    <div className='theme__1__3'>
    Over the years, the run has centered on empowering women and motivating them to attain their objectives. This year, staying on that trajectory, we aim to encourage women to pause for a moment and reflect on the distance they have covered.

    </div>

</div>
<div className='theme__2'>
    <img src="/images/Frame 35.webp" alt="pic not found"/>
    </div>
    </Wrapper>
  )
}

export default Theme
const Wrapper=styled.section`
height: 75vh;

display:flex;
flex-direction:row;
justify-content: flex-end;
align-items: center;
width:100%;


.theme__1{
    display: flex;
    flex-direction: column;

    width: 83vh;
    margin-right: 162px;
    height: 396px;

}
.theme__1__1{
    color: #2E2E2E;
    font-size: 24px;
    font-family: Inter;
    line-height: 159.523%;
}
.theme__1__2{
    color: #A3258E;
font-size: 45px;
font-family: Inter;
font-weight: 600;
line-height: 138.523%;
}
.theme__1__3{
    color: #2E2E2E;
font-size: 21px;
font-family: Inter;
line-height: 190%;
width:421px;
}
.theme__2{
    width: 535px;
    height:400px;

}
.theme__2 img{
    width: 535px;
    height:400px;

}


`