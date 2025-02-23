const Header = () => {
    const cate=["All categories","Cameras & Phone","Computer & Labtop","Electronic","Video Game"];
  return (
    <>
    <header>
        <div className="container-fluid">
        <div className="row">
            <div className="col-3">
                <img width={200} src="/public/images/logo.png" alt="" />
            </div>
            <div className="col-6">
                <form action="">
                    <div className="form-group pt-4 d-flex " style={{ position:"relative" }}>
                    <i className="fa-solid fa-chevron-down " style={{position:"absolute",top:"54%" ,right:"26%" }}></i>
                        <input type="text" name="" id="" className="form-control w-50" style={{borderRadius:"5px 0 0 5px"}} placeholder="Search for categories,product..." />
                        <select name="" id="" className="form-control w-25" style={{borderRadius:" 0px",borderLeft:"none"}}>
                            {cate.map((val,index)=>{
                                return (
                                    <option key={index} value={val}>{val}</option>
                                );
                            })}
                        </select>
                        <button className="btn btn-primary" style={{borderRadius:"0px"}}><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
            </div>
            <div className="col-3 d-flex pt-4 gap-4">
                    <div className="d-flex align-items-center flex-column">
                    <i style={{fontSize:"20px"}} className="fa-solid fa-user"></i>
                        <p>My account</p>
                    </div>
                    <div className="d-flex align-items-center flex-column">
                    <i style={{fontSize:"20px"}} className="fa-solid fa-heart position-relative"> 
                        <span style={{ padding:"4px 6px",color:"#fff",fontSize:"10px",display:"flex",alignItems:"center" }} className="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle ">0
                            <span className="visually-hidden">New alerts</span>
                        </span>
                    </i>
                        <p>WishList</p>
                    </div>
                    <div className="d-flex align-items-center flex-column">
                        <i style={{fontSize:"20px"}} className="fa-solid fa-cart-shopping position-relative">
                        <span style={{ padding:"4px 6px",color:"#fff",fontSize:"10px",display:"flex",alignItems:"center" }} className="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle ">0
                            <span className="visually-hidden">New alerts</span>
                        </span>
                        </i>
                        <p>Cart</p>
                    </div>
                           
            </div>
        </div>
        </div>
    </header>
  
    

    </>
  )
}

export default Header