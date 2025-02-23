import { Link } from "react-router-dom";
import "./navbar.css"
const Navbar = () => {
    const cate=["All categories","Cameras & Phone","Electronic","Video Game","Computer & Labtop","Electronic","Video Game"];
    const menu=[
        { to:"/", name:"Home"},
        { to:"/shop", name:"Shop"},
        { to:"/page", name:"Page"},
        { to:"/product_type", name:"Product Type"},
        { to:"/blog", name:"Blog"},
        { to:"/contact", name:"Contact Us"},
    ]
  return (

    <div className="container-fluid mt-4">
        <div className="row">
            <div className="col-2">
                <div className="shopping" style={{ fontSize:"20px" }}>
                    Shop by categories <i style={{ fontSize:"20px" }} className=" ms-3 fa-solid fa-bars"></i>
                    <div className="drop-down">
                         <ul>
                         {cate.map((val,index)=>{
                            return (
                                <li key={index}>
                                    {val}
                                </li>
                            );
                        })}
                         </ul>   
                    </div>
                </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
                <nav>
                    <ul>
                        {menu.map((val,index)=>{
                            return (
                                <li key={index}>
                                    <Link className="link" to={val.to}>{val.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar;