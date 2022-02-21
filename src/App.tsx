import "./App.css"
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import Tab from "./components/Tab"
import Home from "./containers/Home"
import Mime from "./containers/Mime"
import Profile from "./containers/Profile"
import Detail from "./containers/Detail"
import Login from "./containers/Login"
import Reg from "./containers/Reg"
import "./common/index.less"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mime" element={<Mime />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Tab />
    </BrowserRouter>
  )
}

export default App
