import { useDispatch, useSelector } from "react-redux";
import { bakeBread, buyBread } from "../redux";

const HooksBreadContainer = () => {
  const numOfBreads = useSelector((state) => state.bread.numOfBreads);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Breads - {numOfBreads}</h2>
      <button onClick={() => dispatch(buyBread())}>Buy Bread</button>
      <button onClick={() => dispatch(bakeBread())}>Bake Bread</button>
    </div>
  );
};

export default HooksBreadContainer;
