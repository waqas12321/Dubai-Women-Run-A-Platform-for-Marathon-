import React, {useEffect} from 'react'
import Main from '../Components/Main'
import { styled } from 'styled-components'
import WomenEmpowerment from '../Components/WomenEmpowerment'
import KeyMessages from '../Components/KeyMessages'
import ExpoweringWomen from '../Components/ExpoweringWomen'
import GetReady from '../Components/GetReady'
import Experience from '../Components/Experience'
import Theme from '../Components/Theme'
import Footer from '../Components/Footer'
import Sponsor from './TitleSponsor'
import SponsorSlider from '../Components/SponsorsSlider'
import Testamonial from '../Components/Testamonial'
import Instagram from '../Components/Instagram'
import Carasoul from '../Components/Carasoul'



const Home = () => {

  return (
<Wrapper>
<div>
<Main/>
</div>
 
<div>
<WomenEmpowerment/>
</div>
<div>
    <Carasoul/>
</div>
<div>
    <KeyMessages/>
</div>
<div>
 <ExpoweringWomen/>
</div>
<div>
    <GetReady/>
</div>
<div>
    <Experience/>
</div>

<div>
    <Instagram/>
</div>

<div>
    <SponsorSlider/>
</div>
<div>
    <Footer/>
</div>


   </Wrapper>
  
  )
}

export default Home
const Wrapper=styled.section`
overflow-x: hidden

`