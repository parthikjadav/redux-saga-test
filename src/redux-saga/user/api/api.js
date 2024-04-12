import axios from "axios"
import { ADD_PRODUCT, GET_PRODUCT, GET_USERS, POST_USERS, base_url } from "../../constants"


// user api

export const get_user = ()=>{
    return axios.get(base_url+GET_USERS).then((res)=>{
        return {"data":res.data,"status":res.status}
    })
} 

export const post_user = (action)=>{
    let data = action.payload
    return axios.post(base_url+POST_USERS,data).then((res)=>{
        return {"data":res.data,"status":res.status}
    })
}

export const delete_user = (action)=>{
    let id = action.payload
    return axios.delete(base_url+GET_USERS+`/${id}`).then((res)=>{
        return {"data":res.data,"status":res.status}
    })
}

export const update_user = (action)=>{
    let id = action.payload.id
    let data = action.payload

    return axios.put(base_url+GET_USERS+`/${id}`,data).then((res)=>{
        return {"data":res.data,"status":res.status}
    })
}


// product api

export const get_product = ()=>{
    return axios.get(base_url+GET_PRODUCT).then((res)=>{
        return {"data":res.data,"status":res.status}
    })
}

export const post_product = (action)=>{
    return axios.post(base_url+ADD_PRODUCT,action.payload).then((res)=>{
        console.log(res.data,"res from aaapi");
        return {"data":res.data,"status":res.status}
    })
}