import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/SposnorReducer.js";

//context
const SponsorContext=createContext();

const API="https://dubaiwomensrun.ae/api1/sponsor"

const initialState={
    sponsorsData:[],
    isLoading:false,
    error:false
}
//Provider
const SponsorProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
const getSponsors=async(url)=>{
    dispatch({type:"SET_LOADING"})
try {
    const sponsors=await axios.get(url);
    const data=await sponsors.data;
  
    dispatch({type:"SET_DATA",payload:data})
    
  
} catch (error) {
    dispatch({type:"ERROR"})

    
}
}
useEffect(()=>{
 getSponsors(API);
},[])
    return(
        <SponsorContext.Provider value={{...state}}>{children}</SponsorContext.Provider>
    )
}

//custom hook

const useSponsorHook=()=>{
    return useContext(SponsorContext);
}
export {useSponsorHook,SponsorProvider,SponsorContext};