import axios from "axios";
import reducer from "../Reducer/CampaignReducer.js";
import { createContext, useContext, useEffect, useReducer } from "react";


//context
const CampaignContext=createContext();
const API1="https://dubaiwomensrun.ae/api3/campaign"
const API2="https://dubaiwomensrun.ae/api4/womenSubstance"

const initialState={
    isLoading:false,
    Error:false,
    isWomenLoading:false,
    isWomenError:false,
    campaignData:[],
    todayData:[],
    tommorowData:[],
    legendData:[]

}

//provider
const CampaignProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const getCampaignData=async(url)=>{
    dispatch({type:"SET_LOADING"})
    try {
  
            const campaignData=await axios.get(url);
           const data=await campaignData.data;
     
            dispatch({type:"SET_API1_DATA",payload:data});
           
          
        
    } catch (error) {
        dispatch({type:"SET_ERROR"})
        
    }
}
const getWomenSubstanceData=async(url)=>{
    dispatch({type:"SET_Women_LOADING"})
    try {
  
            const womenSubstanceData=await axios.get(url);
        
           const data=await womenSubstanceData.data;
        
          
            dispatch({type:"SET_API2_DATA",payload:data});
         
        
    } catch (error) {
        dispatch({type:"SET_Women_ERROR"})
        
    }
}
    useEffect(()=>{
        getCampaignData(API1)
        getWomenSubstanceData(API2)
    },[])
    return(
     <CampaignContext.Provider value={{...state}}>{children}</CampaignContext.Provider>
    )
}

//custom hook

const useCampaignHook=()=>{
    return useContext(CampaignContext);

}

export  {useCampaignHook,CampaignProvider,CampaignContext};