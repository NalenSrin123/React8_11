import { useContext } from "react"
import { ProductProvider } from "../context/ProductConext"
import "../assets/css/home.css"
import { Link } from "react-router-dom"
const Home = () => {
  const {products}=useContext(ProductProvider); 
  function star(rate){
    let stars=[];
    for(let i=0;i<rate;i++){
        stars.push(<i  className="fas fa-star text-warning"></i>);
    }
    for(let i=0;i<5-rate;i++){
        stars.push(<i className="far fa-star"></i>);
    }
    return stars;
  }
  return (
    <>
        <div className="product">
            {products.map((product,index)=>{
                return (
                    <div className="cards" key={index}>
                        <Link style={{ textDecoration:"none",color:"#000" }} to={`/product/${product.id}`}>
                    <div className="image">
                    <img src={product.image} alt="" />
                 </div>
                 </Link>   
                 <div className="title">
                    <h3>{product.name}</h3>
                    <p>
                        {
                           star(product.rating) 
                        }
                    </p>
                    <h4 className="d-flex gap-2"><del className="text-dark">{product.reqular_price}</del>
                    ${product.sale_price}</h4>
                    <div className="button">
                    <button className="btn btn-primary ">Add to cart</button>
                    </div>
                 </div>
                 
            </div>
                );
            })}
        </div>
    </>
  )
}

export default Home