import { all } from "redux-saga/effects";
import { hendel_add_product_saga, hendel_delete_user_saga, hendel_get_product_saga, hendel_get_user_saga, hendel_post_user_saga, hendel_update_user_saga } from "./rootSaga/rootSaga";

function* rootSaga() {
    yield all([
        hendel_get_user_saga(),
        hendel_post_user_saga(),
        hendel_delete_user_saga(),
        hendel_update_user_saga(),
        hendel_get_product_saga(),
        hendel_add_product_saga()
    ])
}

export default rootSaga;