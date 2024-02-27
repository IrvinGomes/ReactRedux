import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <h1>Without Hooks</h1>
      <CakeContainer />
      <IceCreamContainer />
      <br />
      <hr />
      <br />
      <h1>With Hooks</h1>
      <HooksCakeContainer />
      <HooksIceCreamContainer />
    </Provider>
  );
}

export default App;
