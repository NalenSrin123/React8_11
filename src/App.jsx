import { Route, Routes } from "react-router-dom"
import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import "./App.css"
import Contact from "./pages/Contact"
import News from "./pages/News"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blogs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App