import { getCategoriesWatcher, getProductListWatcher } from "./saga/products/products.watcher";
import { all } from "redux-saga/effects";


export function* rootSaga() {
    // console.log("rootSaga");
    let effectList = [getCategoriesWatcher(), getProductListWatcher()];
    yield all(effectList);
}

