import { useState } from "react";
import "./modal.css";

function Modal({ submit, onClose }) {
    const [formData, setFormData] = useState({
        code: "",
        name: "",
        qty: "",
        price: "",
        file: "",
        urlFile: "",
    });

    function handleChange(e) {
        const { name, value, files } = e.target;

        if (name === "file") {
            const file = files[0]; // Get the uploaded file
            if (file) {
                setFormData((prevData) => ({
                    ...prevData,
                    file: file,
                    urlFile: URL.createObjectURL(file),
                }));
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    }

    function handleSubmit(e) {
        e.preventDefault(); // Prevent page reload
        submit(formData); // Call submit function if provided
        onClose(); // Close modal after submitting
        setFormData({ code: "", name: "", qty: "", price: "", file: "", urlFile: "" });
    }

    return (
        <div className="modals">
            <form onSubmit={handleSubmit} method="post">
                <h3 className="text-center">Add Product</h3>

                <div className="form-group">
                    <label htmlFor="code" className="form-label">Code</label>
                    <input type="text" name="code" id="code" className="form-control" value={formData.code} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" id="name" className="form-control" value={formData.name} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="qty" className="form-label">Qty</label>
                    <input type="text" name="qty" id="qty" className="form-control" value={formData.qty} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="text" name="price" id="price" className="form-control" value={formData.price} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="file" className="form-label">Image</label>
                    <input type="file" name="file" id="file" className="form-control" onChange={handleChange} />
                    {formData.urlFile && <img width={80} src={formData.urlFile} alt="Preview" />}
                </div>

                <div className="form-group d-flex justify-content-end mt-3">
                    <button type="submit" className="btn btn-primary me-2">Save</button>
                    <button type="button" className="btn btn-danger" onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Modal;
