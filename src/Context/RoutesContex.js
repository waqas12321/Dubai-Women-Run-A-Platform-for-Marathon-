import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/RoutesReducer.js";
import axios from "axios";

const RoutesContext=createContext();
const API="https://dubaiwomensrun.ae/api5/routes"
const API1="https://dubaiwomensrun.ae/api6/events"
const API2="https://dubaiwomensrun.ae/api7/team"
const initialState={
    isLoading:false,
    Error:false,
    routesData:[],
    isEventLoading:false,
    EventError:false,
    eventsData:[],
    teamData:[],
    isTeamLoading:false,
    TeamError:false,
    leaderData:[],
    accountData:[],
    managmentData:[]



}

const RoutesProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const getRoutesData=async(url)=>{
    dispatch({type:"SET_LOADING"})
    try {
  
            const routesData=await axios.get(url);
           const data=await routesData.data;
            dispatch({type:"SET_DATA",payload:data});
          
        
    } catch (error) {
        dispatch({type:"SET_ERROR"})
        
    }
}
const getEventsData=async(url)=>{
    dispatch({type:"SET_Event_LOADING"})
    try {
  
            const eventsData=await axios.get(url);
           const data=await eventsData.data;
      
            dispatch({type:"SET_Event_DATA",payload:data});
          
        
    } catch (error) {
        dispatch({type:"SET_Event_ERROR"})
        
    }
}
const getTeamData=async(url)=>{
    dispatch({type:"SET_Team_LOADING"})
    try {
  
            const teamData=await axios.get(url);
           const data=await teamData.data;
      
            dispatch({type:"SET_Team_DATA",payload:data});
          
        
    } catch (error) {
        dispatch({type:"SET_Team_ERROR"})
        
    }
}

    useEffect(()=>{
        getRoutesData(API);
        getEventsData(API1);
        getTeamData(API2);
    },[])
 
    return(
        <RoutesContext.Provider value={{...state}}>{children}</RoutesContext.Provider>
    )
}

const useRoutesHook=()=>{
    return useContext(RoutesContext);
}
export {RoutesContext,useRoutesHook,RoutesProvider}