import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/SponsorshipReducer.js";

//context
const SponsorshipContext=createContext();

const API="https://dubaiwomensrun.ae/api9/sponsorship"

const initialState={
    sponsorshipData:[],
    isLoading:false,
    error:false
}
//Provider
const SponsorshipProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
const getSponsorship=async(url)=>{
    dispatch({type:"SET_LOADING"})
try {
    const sponsorship=await axios.get(url);
    const data=await sponsorship.data;
  console.warn(data);
    dispatch({type:"SET_DATA",payload:data})
    
  
} catch (error) {
    dispatch({type:"ERROR"})

    
}
}
useEffect(()=>{
 getSponsorship(API);
},[])
    return(
        <SponsorshipContext.Provider value={{...state}}>{children}</SponsorshipContext.Provider>
    )
}

//custom hook

const useSponsorshipHook=()=>{
    return useContext(SponsorshipContext);
}
export {useSponsorshipHook,SponsorshipProvider,SponsorshipContext};