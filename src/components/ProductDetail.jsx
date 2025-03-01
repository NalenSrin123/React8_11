import { useParams } from "react-router-dom";
import "../assets/css/product.css"
import { useContext, useState } from "react";
import { ProductProvider } from "../context/ProductConext";
import Pay from "./Pay";
const ProductDetail = () => {
    const { id } = useParams();
    const [qty,setQty] = useState(1);
    const {products}=useContext(ProductProvider);
    const [payToggle,setPayToggle]=useState(true);
    
  return (
    <>
        {
        products.map((product,index)=>{
        if(product.id==id) {
            return (
                <div key={index} className="productDetail">
                    <div className="images">
                        <img src={product.image}alt="" />
                    </div>
                    <div className="text">
                        <h2>Product Name</h2>
                        <h4>{product.name}</h4>   
                        <h2>Price</h2>
                        <h4><del className="me-2">{product.reqular_price}</del>${product.sale_price}</h4>
                        <h2>Quantity</h2>
                        <h4><input type="number" name="" id="" min={1} className="form-control text-center" value={qty} onChange={(e)=>setQty(e.target.value)}/></h4>
                        <h2>Description</h2>
                        <h4>{product.description}</h4>
                        <h2>Total :${12*qty}</h2>
                        <button className="btn btn-primary" onClick={()=>setPayToggle(false)}>Buy Now</button>
                    </div>
                </div>
            );
        }
    })}
        {payToggle ? '' : <Pay onClose={()=>setPayToggle(true)}/>}
    </>
  )
}

export default ProductDetail