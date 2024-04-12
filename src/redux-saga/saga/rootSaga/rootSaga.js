import { takeLatest } from "redux-saga/effects";
import { ADD_PRODUCT_PENDING, ADD_USER_PENDING, DELETE_USER_PENDING, GET_PRODUCT_PENDING, GET_USER_PENDING, UPDATE_USER_PENDING } from "../../user/action/action";
import { hendel_add_product, hendel_deldete_user, hendel_get_product, hendel_get_user, hendel_post_user, hendel_update_user } from "../user/manageUser";


// user saga hendelers

export function* hendel_get_user_saga(){
  yield takeLatest(GET_USER_PENDING,hendel_get_user)
}

export function* hendel_post_user_saga(){
 yield takeLatest(ADD_USER_PENDING,hendel_post_user)   
}

export function* hendel_delete_user_saga() {
    yield takeLatest(DELETE_USER_PENDING, hendel_deldete_user);
}

export function* hendel_update_user_saga() {
    yield takeLatest(UPDATE_USER_PENDING, hendel_update_user);
}

// product saga hendelers

export function* hendel_get_product_saga(){
  yield takeLatest(GET_PRODUCT_PENDING,hendel_get_product)
}

export function* hendel_add_product_saga(){
  yield takeLatest(ADD_PRODUCT_PENDING,hendel_add_product)
}