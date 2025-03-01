import axios from "axios";
import { createContext, useEffect, useState } from "react"
export const  ProductProvider=createContext();
const ProductConext = ({children}) => {
    const [products,setProducts]=useState([]);  
    useEffect(()=>{
        axios.get("/public/data.json")
        .then((respone)=>{
            // console.log(respone.data);
            setProducts(respone.data);   
        })
    })
  return (
    <ProductProvider.Provider value={{ products }}>
        {children}
    </ProductProvider.Provider>
  )
}

export default ProductConext