import { BAKE_BREAD, BUY_BREAD } from "./breadType";

const initialState = {
  numOfBreads: 50,
};

const breadReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BREAD:
      return {
        ...state,
        numOfBreads: state.numOfBreads - 1,
      };
    case BAKE_BREAD:
      return {
        ...state,
        numOfBreads: state.numOfBreads + 1,
      };
    default:
      return state;
  }
};

export default breadReducer;
