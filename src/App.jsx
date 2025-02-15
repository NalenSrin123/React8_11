import { useState } from "react";
import Lists from "./components/Lists";
import Modal from "./components/Modal";

function App(){
  const [modalToogle,setModalToggle]=useState(true);
  const [product,setproduct]=useState([]);
  function handleClick()
  {
    setModalToggle(false)
  }
  function getProduct(val){
    setproduct((pre)=>(
      [...pre,
        val]
    ))
  }
  return (
    <>
      <div className="container">
          <h2>List Products</h2>
          <button className="btn btn-primary float-end" onClick={handleClick}>Add Product</button>
          <Lists products={product}/>
      </div>
      {modalToogle ? '':<Modal submit={getProduct} onClose={()=>setModalToggle(true)}/>}
    </>
  );
}
export default App;