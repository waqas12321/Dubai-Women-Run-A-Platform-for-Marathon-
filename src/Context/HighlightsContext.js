import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/HighlightsReducer.js";

//context
const HighlightsContext=createContext();

const API="https://dubaiwomensrun.ae/api8/news"

const initialState={
    highlightsData:[],
    isLoading:false,
    error:false
}
//Provider
const HighlightsProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
const getHighlights=async(url)=>{
    dispatch({type:"SET_LOADING"})
try {
    const highlights=await axios.get(url);
    console.warn(highlights);
    const data=await highlights.data;

  
    dispatch({type:"SET_DATA",payload:data})
    
  
} catch (error) {
    dispatch({type:"ERROR"})

    
}
}
useEffect(()=>{
 getHighlights(API);
},[])
    return(
        <HighlightsContext.Provider value={{...state}}>{children}</HighlightsContext.Provider>
    )
}

//custom hook

const useHighlightsHook=()=>{
    return useContext(HighlightsContext);
}
export {useHighlightsHook,HighlightsProvider,HighlightsContext};