import React from 'react'
import Header1 from '../Components/Header1'
import Footer from '../Components/Footer'
import SponsorData from '../Components/SponsorData'
import { styled } from 'styled-components'
import { useSponsorHook } from '../Context/SponsorContext.js'

const SilverSponsor = () => {
    const {sponsorsData,isLoading}=useSponsorHook();
  console.warn(sponsorsData);
  

if(isLoading){
  return(<div>hello</div>)
}
else{
  return (
    <Wrapper>
 <div >
     <Header1/>
 </div>
 <div>
 <SponsorData value={sponsorsData[2]}/>
 </div>
 <div>
     <Footer/>
 </div>
    </Wrapper>
   )
}
}

export default SilverSponsor

const Wrapper=styled.section`
`