import {combineReducers} from "redux";
import { cartReducer } from "./reducer";


const RootReducer = combineReducers({
    cartReducer
});


export default RootReducer