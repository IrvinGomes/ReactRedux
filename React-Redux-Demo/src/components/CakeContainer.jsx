import React from "react";
import { connect } from "react-redux";
import { bakeCake, buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <button onClick={props.bakeCake}>Bake Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    bakeCake: () => dispatch(bakeCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
