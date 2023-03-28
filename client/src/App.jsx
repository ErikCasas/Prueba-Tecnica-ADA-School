import React from "react"
import { Provider } from "react-redux";
import store from "./Store/Store";
import AppRoutes from "./Routes/App.Routes";

function App() {

  return (
    <Provider store={store}>
      <AppRoutes/>
      </Provider>
  )
}

export default App
