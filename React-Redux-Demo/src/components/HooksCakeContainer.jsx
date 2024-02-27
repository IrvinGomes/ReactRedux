import { useDispatch, useSelector } from "react-redux";
import { bakeCake, buyCake } from "../redux";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <button onClick={() => dispatch(bakeCake())}>Bake Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
