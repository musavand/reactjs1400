import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import { Provider } from "react-redux";
import "./scss/App.scss";
import Store from "./redux/Store";
function App() {
  return (
    <div className="appContainer">
      <Provider store={Store}>
        <Header />
        <Items />
      </Provider>
    </div>
  );
}

export default App;
