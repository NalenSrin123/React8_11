import { useState } from "react";
import Lists from "./components/Lists";
import Modal from "./components/Modal";

function App(){
  const [modalToogle,setModalToggle]=useState(true);
  function handleClick()
  {
    setModalToggle(false)
  }
  return (
    <>
      <div className="container">
          <h2>List Products</h2>
          <button className="btn btn-primary float-end" onClick={handleClick}>Add Product</button>
          <Lists/>
      </div>
      {modalToogle ? '':<Modal onClose={()=>setModalToggle(true)}/>}
    </>
  );
}
export default App;