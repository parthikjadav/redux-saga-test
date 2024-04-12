import { call, put } from "redux-saga/effects";
import { delete_user, get_product, get_user, post_product, post_user, update_user } from "../../user/api/api";
import { ADD_PRODUCT_ERROR, ADD_PRODUCT_SUCCESS, ADD_USER_ERROR, ADD_USER_SUCCESS, DELETE_USER_ERROR, DELETE_USER_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, GET_USER_ERROR, GET_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS } from "../../user/action/action";


// user saga

export function* hendel_get_user(action){
 try {
    let {data,status}=  yield call(get_user,action)
    console.log(data,action,"data");
    if(status==200){
        yield put({type:GET_USER_SUCCESS,data})
    }else{
        yield put({type:GET_USER_ERROR,data})
    }
 } catch (error) {
    yield put({type:GET_USER_ERROR,data:error})
 }
}

export function* hendel_post_user(action){
    try {
        let {data,status}=  yield call(post_user,action)

        if(status == 200||201){
            yield put({type:ADD_USER_SUCCESS,data})
        }else{
            yield put({type:ADD_USER_ERROR,data})
        }
    } catch (error) {
        yield put({type:ADD_USER_ERROR,data:error})
    }
}

export function* hendel_deldete_user(action){
    try {
        let {data,status}=  yield call(delete_user,action)
        if(status==200){
            yield put({type:DELETE_USER_SUCCESS,data})
        }else{
            yield put({type:DELETE_USER_ERROR,data})
        }
    } catch (error) {
        yield put({type:DELETE_USER_ERROR,data:error})
        
    }
}

export function* hendel_update_user(action){
    try {
        let {data,status}= yield call(update_user,action)

        if(status==200||201){
            yield put({type:UPDATE_USER_SUCCESS,data})
        }else{
            yield put({type:UPDATE_USER_ERROR,data})
        }
    } catch (error) {
        yield put({type:UPDATE_USER_ERROR,data:error})
    }
}


// product saga

export function* hendel_get_product(action){
    try {
        let {data,status}= yield call(get_product)

        if(status==200){
            yield put({type:GET_PRODUCT_SUCCESS,data})
        }else{
            yield put({type:GET_PRODUCT_ERROR,data})
        }
    } catch (error) {
        yield put({type:GET_PRODUCT_ERROR,data:error})
    }
}

export function* hendel_add_product(action){
    try {
        let {data,status}= yield call(post_product,action)

        if(status==200||201){
            yield put({type:ADD_PRODUCT_SUCCESS,data})
        }else{
            yield put({type:ADD_PRODUCT_ERROR,data})
        }
    } catch (error) {
     yield put({type:ADD_PRODUCT_ERROR,data:error})   
    }
}
