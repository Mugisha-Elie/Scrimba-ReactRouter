import Home from "./Components/VanLife/Home"
import About from "./Components/VanLife/About"
import VanPage from "./Components/VanLife/VanPage"
import VanDetails from "./Components/VanLife/VanDetails"
import BlogPost from "./Components/Store/BlogPost"
import Layout from "./Components/Layout"

import { BrowserRouter, Routes, Route} from "react-router-dom"

import { useState, useEffect } from "react"
import type{ VanShape } from "./types/VanType"
import Vans from "./Components/VanLife/Vans"

export default function App(){

  const [vans, setVans] = useState<VanShape[]>([]);
  
  useEffect(() => {
      const controller = new AbortController()
      async function fetchVans(){
          try{
              const response = await fetch("http://localhost:3000/api/vans", {
                  signal: controller.signal
              });

              if(!response.ok){
                  throw new Error(`An HTTP Error Occurred ${response.status} ${response.statusText}`)
              }
              setVans(await response.json())

          }catch(error){
              if(error instanceof Error && error.name === "AbortError"){
                  console.log("Fetch Aborted", error);
              }else{
                  console.log("A network error occurred", error);
              }
          }
      }

      fetchVans();

      return () => controller.abort()
  }, [])
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/vans" element={<VanPage />}>
                  <Route index element={<Vans vans={vans}/>}/>
                  <Route path=":id" element={<VanDetails vans={vans}/>}/>
              </Route>
              <Route path="/blog/:slug" element={<BlogPost/>}/>
          </Route>
        </Routes>
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
