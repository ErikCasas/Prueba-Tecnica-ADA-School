import React from "react"
import { Provider } from "react-redux";
import store from "./Store/Store";
import AppRoutes from "./Routes/App.Routes";

/**
 * The App function returns the Provider component, which is a wrapper for the AppRoutes component.
 */
function App() {

  return (
    <Provider store={store}>
      <AppRoutes/>
      </Provider>
  )
}

export default App
