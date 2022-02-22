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
import './index.css';

reportWebVitals();

function render(props = {}) {
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
  reportWebVitals()
}
if (window.__POWERED_BY_QIANKUN__) {
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
  console.log('1111111111', window.__webpack_public_path__)
} else {
  console.log('2222222222')
  render()
}

export async function bootstrap(props:any) {
  console.log(props)
}
export async function mount(props:any) {
  render(props)
  // props.fns.forEach(fn => fn('加载完成'))
}
export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root') as HTMLElement)
}