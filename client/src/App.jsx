import React from "react"
import { Provider } from "react-redux";
import store from "./Store/Store";

function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <h1>HOLAAA</h1>
    </div>
    </Provider>
  )
}

export default App
