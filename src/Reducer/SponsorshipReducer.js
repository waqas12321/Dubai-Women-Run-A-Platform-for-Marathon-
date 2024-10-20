
const SponsorshipReducer=(state,action)=>{
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
            sponsorshipData:action.payload,
           
        }

    }
    return state;
    
}
export default SponsorshipReducer;