import { useDispatch, useSelector } from "react-redux";
import { buyIceCream, makeIceCream } from "../redux";

const HooksIceCreamContainer = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice Cream - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
      <button onClick={() => dispatch(makeIceCream())}>Make Ice Cream</button>
    </div>
  );
};

export default HooksIceCreamContainer;
