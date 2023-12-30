import { legacy_createStore as createStore } from "redux";

import RootReducer from "./reducer/root-reducer";

const store = createStore(RootReducer);

export default store;
