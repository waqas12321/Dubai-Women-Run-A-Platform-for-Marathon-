import React from 'react'
import { styled } from 'styled-components'
import EventsData from './EventsData'
import { useRoutesHook } from '../Context/RoutesContex';
import { NavLink, Outlet } from 'react-router-dom';

const Policies = () => {

  return (
   <Wrapper>
    <div className='policies__1'>
    Policies
    </div>
    <div className='list'>
            <ul>
                <li><NavLink to="Event_Safety_Policy" >Event Safety Policy</NavLink></li>
                <li><NavLink to="Event_Safety_Managment">Planning Phase</NavLink></li>
                <li><NavLink to="Plannig_Phase">Event Safety Mangament & Planning</NavLink></li>
                
         

            </ul>

            </div>
            <Outlet/>
   </Wrapper>
  )
}

export default Policies
const Wrapper=styled.div`





@media screen and (min-width: 0px) and (max-width: 599px){
  .policies__1{
  
    color: #A3258E;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 159.523%; /* 71.785px */
width:100%;

padding-left:30px;
margin-top:70px;

}
  .list{
  
    margin-top:35px;
    margin-bottom:0px;
  
  
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
  .policies__1{
  
    color: #A3258E;
font-family: Inter;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: 159.523%; /* 71.785px */
width:100%;

padding-left:30px;
margin-top:100px;
}
  .list{
  
    margin-top:45px;
    margin-bottom:0px;
  
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
  .policies__1{
  
    color: #A3258E;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 159.523%; /* 71.785px */
width:100%;

padding-left:30px;
margin-top:100px;
}
  .list{
  
    margin-top:45px;
    margin-bottom:0px;
  
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
  .policies__1{
  
    color: #A3258E;
font-family: Inter;
font-size: 26px;
font-style: normal;
font-weight: 600;
line-height: 159.523%; /* 71.785px */
width:100%;

padding-left:30px;
margin-top:100px;
}

  .list{
  
    margin-top:45px;
    margin-bottom:0px;
  
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
  .policies__1{
  
    color: #A3258E;
font-family: Inter;
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: 159.523%; /* 71.785px */
width:100%;

padding-left:120px;
margin-top:100px;
}
  .list{
    margin-top:45px;
    margin-bottom:0px;
  
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
  .policies__1{
  
    color: #A3258E;
font-family: Inter;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: 159.523%; /* 71.785px */
width:100%;

padding-left:150px;
margin-top:100px;
}
  .list{
  
    margin-top:45px;
    margin-bottom:0px;
  
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