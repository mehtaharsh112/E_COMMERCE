import { combineReducers } from "redux";
import { productReducer , selectedProductReducer} from "./ProductReducers";

export const reducers = combineReducers({
    allProducts: productReducer,
    product:selectedProductReducer
})