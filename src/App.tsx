import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Profile from "./Components/Profile"
import NotFound from "./Components/NotFound"

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}