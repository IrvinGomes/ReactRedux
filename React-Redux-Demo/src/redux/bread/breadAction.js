import { BAKE_BREAD, BUY_BREAD } from "./breadType";

export const buyBread = () => {
  return {
    type: BUY_BREAD,
  };
};

export const bakeBread = () => {
  return {
    type: BAKE_BREAD,
  };
};
