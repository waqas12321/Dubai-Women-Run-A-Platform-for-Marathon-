import React from 'react'
import RoutesData from './RoutesData'
import { useRoutesHook } from '../Context/RoutesContex'
import Header from './Header1';
import Footer from './Footer';
import { styled } from 'styled-components';
const Tentative__5k = () => {
    const {routesData}=useRoutesHook();
    console.warn(routesData);
  return (
    <Wrapper>
  
   
   <RoutesData  value={routesData[1]}/>
   

 </Wrapper>
  )
  
}

export default Tentative__5k
const Wrapper=styled.div`
`