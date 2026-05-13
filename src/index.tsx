import { StrictMode } from "react"
import { createRoot, Root } from "react-dom/client"
import "./index.css"
import { Provider } from "react-redux"
import store from "./store"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

declare global {
  interface Window {
    __POWERED_BY_QIANKUN__?: boolean
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string
    __webpack_public_path__?: string
  }
}

let root: Root | null = null

function render(props = {}) {
  const container = document.getElementById("root")
  if (!container) return

  if (!root) {
    root = createRoot(container)
  }

  root.render(
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  )

  reportWebVitals()
}

if (window.__POWERED_BY_QIANKUN__) {
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
} else {
  render()
}

export async function bootstrap(props: any) {
  console.log(props)
}

export async function mount(props: any) {
  render(props)
}

export async function unmount() {
  root?.unmount()
  root = null
}
