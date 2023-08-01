import "./App.css";
import { atom } from "recoil";

export const textState = atom({
  key: "textState",
  default: "",
});

function App() {
  return <div className="App"></div>;
}

export default App;
