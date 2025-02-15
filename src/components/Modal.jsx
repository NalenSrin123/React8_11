import "./modal.css"
function Modal({onClose}){
    return (
        <div className="modals">
            <form action="" method="post">
                <h3 className="text-center">Add Product</h3>
                <div className="form-group">
                    <label htmlFor="code" className="form-label">Code</label>
                    <input type="text" name="code" id="code" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" id="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="qty" className="form-label">Qty</label>
                    <input type="text" name="qty" id="qty" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="text" name="price" id="price" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="file" name="image" id="image" className="form-control" />
                </div>
                <div className="form-group d-flex justify-content-end mt-3" >
                    <button type="submit" className="btn btn-primary me-2">Save</button>
                    <button type="button" className="btn btn-danger" onClick={()=>onClose()}>Cancel</button>
                </div>
            </form>
        </div>
    );
}
export default Modal;