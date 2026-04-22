import Header from "./Components/VanLife/Header"
import Footer from "./Components/VanLife/Footer"
import Home from "./Components/VanLife/Home"
import About from "./Components/VanLife/About"
import Vans from "./Components/VanLife/Vans"
import BlogPost from "./Components/Store/BlogPost"

import { BrowserRouter, Routes, Route} from "react-router-dom"

export default function App(){

  
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
          <Route path="/blog/:slug" element={<BlogPost/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}



























// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import NotFound from "./Components/Store/NotFound"
// import Header from "./Components/Store/Header"
// import Footer from "./Components/Store/Footer"
// import Home from "./Components/Store/Home"
// import About from "./Components/Store/About"
// import Profile from "./Components/Store/Profile"

// export default function App(){
//   return (
//     <BrowserRouter>
//       <div className="flex flex-col min-h-screen justify-between">
//         <Header />
//         <Routes>
//           <Route path="*" element={<NotFound />}/>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   )
// }
