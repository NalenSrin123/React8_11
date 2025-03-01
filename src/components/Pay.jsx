

const Pay = ({onClose}) => {
  return (
    <div className="pay">
       <div className="box">
        <i className="fa-solid fa-x" onClick={()=>onClose()}></i>
            <h2 className="text-center">Payment</h2>
            <img src="/public/images/image.png" alt="" />
       </div>
    </div>
  )
}

export default Pay