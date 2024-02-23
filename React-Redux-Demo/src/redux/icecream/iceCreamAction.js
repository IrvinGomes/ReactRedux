import { BUY_ICECREAM, MAKE_ICECREAM } from "./iceCreamType";

export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

export const makeIceCream = () => {
  return {
    type: MAKE_ICECREAM,
  };
};
