import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductConext from './context/ProductConext';
import ProductDetail from './components/ProductDetail';
import { Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
        <ProductConext>
          <Header/>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/>
          </Routes>
          
        </ProductConext>
    </>
  )
}

export default App