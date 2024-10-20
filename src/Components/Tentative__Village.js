import React from 'react'
import { styled } from 'styled-components'
import RoutesData from './RoutesData';
import { useRoutesHook } from '../Context/RoutesContex'
import Header from './Header1';
import Footer from './Footer';
const Tentative__Village = () => {
    const {routesData}=useRoutesHook();
    console.warn(routesData);
  return (
    <Wrapper>
  
   
   <RoutesData  value={routesData[3]}/>
   

 </Wrapper>
  )
}

export default Tentative__Village;
const Wrapper=styled.div`
`
