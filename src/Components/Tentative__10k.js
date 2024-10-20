import React from 'react'
import RoutesData from './RoutesData'
import { useRoutesHook } from '../Context/RoutesContex'
import Header from './Header1';
import Footer from './Footer';
import { styled } from 'styled-components';
const Tentative__10k = () => {
    const {routesData}=useRoutesHook();
  
  
  return (
    <Wrapper>
   
   
   <RoutesData  value={routesData[0]}/>
   

 </Wrapper>
  )
}

export default Tentative__10k
const Wrapper=styled.div`
`