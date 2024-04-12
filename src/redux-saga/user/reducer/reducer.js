import { ADD_USER_ERROR, ADD_USER_PENDING, ADD_USER_SUCCESS, DELETE_USER_ERROR, DELETE_USER_PENDING, DELETE_USER_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PENDING, GET_PRODUCT_SUCCESS, GET_USER_ERROR, GET_USER_PENDING, GET_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_PENDING, UPDATE_USER_SUCCESS } from "../action/action";

let initialState = {
    user: [],
    products: [],
    isLoading: false,
    isError: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PENDING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_USER_SUCCESS: {
            return {
                user: action.data,
                isLoading: false
            }
        }
        case GET_USER_ERROR: {
            return {
                ...state,
                isError: action.data,
                isLoading:false
            }
        }

        // ADD USER 

        case ADD_USER_PENDING: {
            return {
                ...state,
                isLoading: true
            }
        }

        case ADD_USER_SUCCESS: {
            return {
                user: state.user.concat(action.data),
                isLoading: false
            }
        }

        case ADD_USER_ERROR: {
            return {
                ...state,
                isError: action.data,
                isLoading: false
            }
        }

        // DELETE USER

        case DELETE_USER_PENDING: {
            return {
                ...state,
                isLoading: true
            }
        }

        case DELETE_USER_SUCCESS: {
            return {
                user: state.user.filter((val) => val.id !== action.data.id),
                isLoading: false
            }
        }

        case DELETE_USER_ERROR: {
            return {
                ...state,
                isError: action.data,
                isLoading: false
            }
        }

        // UPDATE USER

        case UPDATE_USER_PENDING: {
            return {
                ...state,
                isLoading: true
            }
        }

        case UPDATE_USER_SUCCESS: {
            console.log(action, "action from reducer");
            return {
                user: state.user.map(val => {
                    if (val.id == action.data.id) {
                        return {
                            ...val,
                            ...action.data
                        }
                    } else {
                        return val
                    }
                }),
                isLoading: false
            }
        }

        case UPDATE_USER_ERROR: {
            return {
                ...state,
                isError: action.data,
            }
        }


        // product reducer

        // get product
        case GET_PRODUCT_PENDING:{
            return {
                ...state,
                isLoading: true
            }
        }

        case GET_PRODUCT_SUCCESS:{
            return{
                products:action.data,
                isLoading:false
            }
        }
     
        case GET_PRODUCT_ERROR:{
            return{
                ...state,
                isError:action.data
            }
        }
        
        // add product
        case ADD_USER_PENDING:{
            return {
                ...state,
                isLoading: true
            }
        }

        case ADD_USER_SUCCESS:{
            return{
                products:state.products.concat(action.data),
                isLoading:false
            }
        }

        case ADD_USER_ERROR:{
            return{
                ...state,
                isError:action.data
            }
        }

        default: {
            return { ...state }
        }
    }
}

export default userReducer;