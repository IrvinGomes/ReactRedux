import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";
import breadReducer from "./bread/breadReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  bread: breadReducer,
});

export default rootReducer;
