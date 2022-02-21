import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { Provider } from "react-redux"
import store from "./store"
import history from "./history";
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { Route } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <ConnectedRouter history={history}>
        <Route path='/' element={<App/>} />
      </ConnectedRouter> */}
      <App/>
    </React.StrictMode>
    ,
  </Provider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
