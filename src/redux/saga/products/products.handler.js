import { setError } from "../../error.slice";
import { saveCategoryList, saveProductList } from "../../product.slice";
import { getCategoriesService, getProductListService } from "./products.service";
import { call, put } from "redux-saga/effects";


export function* getCategoriesHandler(){
    
    try{
        // console.log("getCategoriesHandler");
    let data = yield call(getCategoriesService);
    yield put  (saveCategoryList(data));
    }catch(error){
        // console.log(error);
        yield put(setError("Unable to get categories"))
}
}

export function* getProductListHandler(action){
    console.log(action);
     try{
        let data = yield call(getProductListService, {c_id:action.payload});
        yield put(saveProductList(data));
     } catch (error) {
        yield put(setError("Unable to get products details"));
}
}