
const HighlightsReducer=(state,action)=>{
    if(action.type==="SET_LOADING"){
  
        return{
            ...state,
            isLoading:true
        }
    }
    if(action.type==="SET_DATA"){
    

        return{
            ...state,
            isLoading:false,
            highlightsData:action.payload,
           
        }

    }
    return state;
    
}
export default HighlightsReducer;