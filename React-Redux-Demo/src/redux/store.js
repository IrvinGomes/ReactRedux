import { combineReducers, createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";

// const store = createStore(cakeReducer);

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
export default store;
