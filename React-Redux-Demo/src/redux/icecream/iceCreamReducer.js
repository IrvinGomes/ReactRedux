import { BUY_ICECREAM, MAKE_ICECREAM } from "./iceCreamType";

const initialState = {
  numOfIceCreams: 10,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case MAKE_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
