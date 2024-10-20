import React from 'react'
import { styled } from 'styled-components';

import Header1 from '../Components/Header1';
import SponsorData from '../Components/SponsorData';
import Footer from '../Components/Footer';
import { useSponsorHook } from '../Context/SponsorContext';

const Sponsor = () => {
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
 <SponsorData value={sponsorsData[0]}/>
 </div>
 <div>
     <Footer/>
 </div>
    </Wrapper>
   )
}
}

export default Sponsor;
const Wrapper=styled.section`

`