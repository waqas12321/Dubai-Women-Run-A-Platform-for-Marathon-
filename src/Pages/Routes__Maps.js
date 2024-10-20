import React from 'react'
import { styled } from 'styled-components';
import Header from '../Components/Header1';
import Footer from '../Components/Footer';
import RoutesData from '../Components/RoutesData';
import { useRoutesHook } from '../Context/RoutesContex'
import { NavLink, Outlet } from 'react-router-dom';
const Routes__Maps = () => {
    const {routesData}=useRoutesHook();

  return (
 <Wrapper>
<div>
    <Header/>

</div>
<div className='list'>
            <ul>
                <li><NavLink to="Tentative__Route__10k" >10K</NavLink></li>
                <li><NavLink to="Tentative__Route__5k">5K</NavLink></li>
                <li><NavLink to="Tentative__Route__3k">3K</NavLink></li>
                <li><NavLink to="VillageLayout">  Village Layout</NavLink></li>

            </ul>
            </div>
            <Outlet/>

<div>
    <Footer/>
</div>
 </Wrapper>
  )
}

export default Routes__Maps
const Wrapper=styled.div`

  
   @media screen and (min-width: 0px) and (max-width: 599px){
 
    .list{
    
      margin-top:45px;
      margin-bottom:50px;
    
      margin-left:0px;
   
    width:100%;
    padding-left: 30px;
     
     
    }
    .list ul {
    
    display:flex;
    flex-direction:row;

    height:88px;
    padding-left: 0px;
    
    width:100%;
    flex-wrap: wrap;
    }
    .list ul li{
      list-style: none;
    
    
    
    
    }
    .list ul li a{
        padding: 6px 20px;
    
      margin-right: 10px;
    
    
      border-radius: 22px;
      border: 1.091px solid #A3258E;
      text-decoration: none;
      color: #A3258E;
    font-family: Inter;
    font-size: 12.986px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    
    
    }
    .list .active{
      background: #A3258E;
      color:white;
    
    }
   }
   @media screen and (min-width: 600px) and (max-width: 959px){
    .list{
    
      margin-top:45px;
      margin-bottom:50px;
    
      margin-left:0px;
   
    width:100%;
    padding-left: 30px;
     
     
    }
    .list ul {
    
    display:flex;
    flex-direction:row;

    height:88px;
    padding-left: 0px;
    
    width:100%;
    flex-wrap: wrap;
    }
    .list ul li{
      list-style: none;
    
    
    
    
    }
    .list ul li a{
        padding: 6px 20px;
    
      margin-right: 10px;
    
    
      border-radius: 22px;
      border: 1.091px solid #A3258E;
      text-decoration: none;
      color: #A3258E;
    font-family: Inter;
    font-size: 14.986px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    
    
    }
    .list .active{
      background: #A3258E;
      color:white;
    
    }
   }
   @media screen and (min-width: 960px) and (max-width: 1279px){
    .list{
    
      margin-top:45px;
      margin-bottom:50px;
    
      margin-left:0px;
   
    width:100%;
    padding-left: 30px;
     
     
    }
    .list ul {
    
    display:flex;
    flex-direction:row;

    height:88px;
    padding-left: 0px;
    
    width:100%;
    flex-wrap: wrap;
    }
    .list ul li{
      list-style: none;
    
    
    
    
    }
    .list ul li a{
        padding: 6px 20px;
    
      margin-right: 10px;
    
    
      border-radius: 22px;
      border: 1.091px solid #A3258E;
      text-decoration: none;
      color: #A3258E;
    font-family: Inter;
    font-size: 16.986px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    
    
    }
    .list .active{
      background: #A3258E;
      color:white;
    
    }
   }
   @media screen and (min-width: 1280px) and (max-width: 1919px){
    

    .list{
    
      margin-top:45px;
      margin-bottom:50px;
    
      margin-left:0px;
   
    width:100%;
    padding-left: 30px;
     
     
    }
    .list ul {
    
    display:flex;
    flex-direction:row;

    height:88px;
    padding-left: 0px;
    
    width:100%;
    flex-wrap: wrap;
    }
    .list ul li{
      list-style: none;
    
    
    
    
    }
    .list ul li a{
        padding: 6px 20px;
    
      margin-right: 10px;
    
    
      border-radius: 22px;
      border: 1.091px solid #A3258E;
      text-decoration: none;
      color: #A3258E;
    font-family: Inter;
    font-size: 18.986px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    
    
    }
    .list .active{
      background: #A3258E;
      color:white;
    
    }
   }
   @media screen and (min-width: 1280px) and (max-width: 1919px){
    .list{
      margin-top:45px;
      margin-bottom:50px;
    
      margin-left:0px;
   
    width:100%;
    padding-left: 120px;
     
     
    }
    .list ul {
    
    display:flex;
    flex-direction:row;

    height:88px;
    padding-left: 0px;
    
    width:100%;
    flex-wrap: wrap;
    }
    .list ul li{
      list-style: none;
    
    
    
    
    }
    .list ul li a{
        padding: 6px 20px;
    
      margin-right: 10px;
    
    
      border-radius: 22px;
      border: 1.091px solid #A3258E;
      text-decoration: none;
      color: #A3258E;
    font-family: Inter;
    font-size: 18.986px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    
    
    }
    .list .active{
      background: #A3258E;
      color:white;
    
    }
   }
   @media screen and (min-width: 1921px){
    .list{
    
      margin-top:45px;
      margin-bottom:50px;
    
      margin-left:0px;
   
    width:100%;
    padding-left: 150px;
     
     
    }
    .list ul {
    
    display:flex;
    flex-direction:row;

    height:88px;
    padding-left: 0px;
    
    width:100%;
    flex-wrap: wrap;
    }
    .list ul li{
      list-style: none;
    
    
    
    
    }
    .list ul li a{
        padding: 6px 20px;
    
      margin-right: 10px;
    
    
      border-radius: 22px;
      border: 1.091px solid #A3258E;
      text-decoration: none;
      color: #A3258E;
    font-family: Inter;
    font-size: 20.986px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    
    
    }
    .list .active{
      background: #A3258E;
      color:white;
    
    }
   }

`