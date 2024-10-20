
const CampaignReducer=(state,action)=>{
    if(action.type==="SET_LOADING"){

     
        return{
            ...state,
            isLoading:true
        }
    }
    if(action.type==="SET_API1_DATA"){
   

        return{
            ...state,
            isLoading:false,
            campaignData:action.payload,
           
        }


        
    }
    if(action.type==="SET_ERROR"){
        return{
            ...state,
            isLoading:false,
            Error:true

        }

    }



    if(action.type==="SET_Women_LOADING"){

     
        return{
            ...state,
            isWomenLoading:true
        }
    }
    if(action.type==="SET_API2_DATA"){
        const tommorowData = action.payload.filter((curElem) => {
            return curElem.featured === "tommorow";
        })
        const todayData = action.payload.filter((curElem) => {
            return curElem.featured === 'today';
        })
        const legendData = action.payload.filter((curElem) => {
            return curElem.featured === 'legend';
        })
       
      
    
        return{
            ...state,
            isLoading:false,
            todayData:todayData,
            tommorowData:tommorowData,
            legendData:legendData
      
            
        }
    }
    if(action.type==="SET_Women_ERROR"){
        return{
            ...state,
            isWomenLoading:false,
            isWomenError:true

        }

    }

    return state;
    
}
export default CampaignReducer;