import { combineReducers } from "redux"
import productReducer from "../features/products/productList"


const rootReducer = combineReducers({
    products: productReducer,
})
export default rootReducer