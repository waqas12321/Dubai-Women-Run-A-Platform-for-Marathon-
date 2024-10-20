import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CategoryReducer.js";
import axios from "axios";

const CategoryContext=createContext();
const API="https://dubaiwomensrun.ae/api2/category"
const initialState={
    isLoading:false,
    Error:false,
    categoryData:[]

}

const CategoryProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const getCategoryData=async(url)=>{
    dispatch({type:"SET_LOADING"})
    try {
  
            const categoryData=await axios.get(url);
           const data=await categoryData.data;
            dispatch({type:"SET_DATA",payload:data});
          
        
    } catch (error) {
        dispatch({type:"SET_ERROR"})
        
    }
}

    useEffect(()=>{
        getCategoryData(API);
    },[])
 
    return(
        <CategoryContext.Provider value={{...state}}>{children}</CategoryContext.Provider>
    )
}

const useCategoryHook=()=>{
    return useContext(CategoryContext);
}
export {CategoryContext,useCategoryHook,CategoryProvider}