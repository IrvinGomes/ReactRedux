import { BAKE_CAKE, BUY_CAKE } from "./cakeType";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
export const bakeCake = () => {
  return {
    type: BAKE_CAKE,
  };
};
