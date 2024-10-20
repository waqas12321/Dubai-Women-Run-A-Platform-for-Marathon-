

const CategoryReducer = (state,action) => {

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
            categoryData:action.payload,
      
            
        }
    }
    if(action.type==="SET_ERROR"){
 
        return{
            ...state,
            isLoading:false,
            Error:true,
            
        }
    }
  return state;
}

export default CategoryReducer