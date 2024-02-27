import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import HooksBreadContainer from "./components/HooksBreadContainer";

function App() {
  return (
    <Provider store={store}>
      <h1>Without Hooks</h1>
      <CakeContainer />
      <IceCreamContainer />
      <hr />
      <h1>With Hooks</h1>
      <HooksCakeContainer />
      <HooksIceCreamContainer />
      <HooksBreadContainer />
    </Provider>
  );
}

export default App;
