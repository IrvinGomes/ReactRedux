const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

//Actions
const BUY_CAKE = "BUY_CAKE";
const BAKE_CAKE = "BAKE_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//Action creators
//CAKES
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function bakeCake() {
  return {
    type: BAKE_CAKE,
    info: "Second redux action",
  };
}
//ICECREAM
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    infor: "Third redux action",
  };
}

// (prevState, action) => newState
const initialState = {
  numOfCakes: 10,
  numOfIceCream: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BAKE_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

// Dispatches
const store = createStore(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(bakeCake());
store.dispatch(bakeCake());
store.dispatch(bakeCake());
store.dispatch(bakeCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

/* Splited */

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCream: 10,
};

const CakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BAKE_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };
    default:
      return state;
  }
};

const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

const iceCreamStore = createStore(IceCreamReducer);
console.log("Initial IceCream State", iceCreamStore.getState());
const iceCreaUnsubscribe = iceCreamStore.subscribe(() =>
  console.log("Updated State", iceCreamStore.getState())
);
const cakeStore = createStore(CakeReducer);
console.log("Initial Cake State", cakeStore.getState());
const cakeUnsubscribe = cakeStore.subscribe(() =>
  console.log("Updated State", cakeStore.getState())
);

iceCreamStore.dispatch(buyIceCream());
cakeStore.dispatch(buyCake());
iceCreaUnsubscribe();
cakeUnsubscribe();

/* Combined stores */

const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer,
});
console.log("------------------");
console.log("STARTING COMBINED");
console.log("------------------");
const combinedStore = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial Combined State", combinedStore.getState());
const combinedUnsibscribe = combinedStore.subscribe(() => {});
combinedStore.dispatch(buyCake());
combinedStore.dispatch(buyCake());
combinedStore.dispatch(bakeCake());
combinedStore.dispatch(buyIceCream());
combinedStore.dispatch(buyIceCream());
combinedUnsibscribe();

console.log("Cakes:", combinedStore.getState().cake.numOfCakes);
console.log("IceCreams:", combinedStore.getState().iceCream.numOfIceCream);
