

const RoutesReducer = (state,action) => {

    if(action.type==="SET_LOADING"){

        return{
            ...state,
            isLoading:true,

        }
    }
    if(action.type==="SET_DATA")
    {
      
    
        return{
            ...state,
            isLoading:false,
            routesData:action.payload,
      
            
        }
    }
    if(action.type==="SET_ERROR"){
 
        return{
            ...state,
            isLoading:false,
            Error:true,
            
        }
    } 
    if(action.type==="SET_Event_LOADING"){

        return{
            ...state,
            isLoading:true,

        }
    }
    if(action.type==="SET_Event_DATA")
    {
      
    
        return{
            ...state,
            isLoading:false,
            eventsData:action.payload,
      
            
        }
    }
    if(action.type==="SET_Event_ERROR"){
 
        return{
            ...state,
            isLoading:false,
            Error:true,
            
        }
    }
    if(action.type==="SET_Team_LOADING"){

        return{
            ...state,
            isLoading:true,

        }
    }
    if(action.type==="SET_Team_DATA")
    {
      
        const leaderData = action.payload.filter((curElem) => {
            return curElem.featured === "leader";
        })
        const accountData = action.payload.filter((curElem) => {
            return curElem.featured === 'account';
        })
        const managmentData = action.payload.filter((curElem) => {
            return curElem.featured === 'managment';
        })
       
      
    
        return{
            ...state,
            isLoading:false,
            leaderData:leaderData,
            accountData:accountData,
            managmentData:managmentData
      
            
        }
    }
    if(action.type==="SET_Team_ERROR"){
 
        return{
            ...state,
            isLoading:false,
            Error:true,
            
        }
    }
  return state;
}

export default RoutesReducer