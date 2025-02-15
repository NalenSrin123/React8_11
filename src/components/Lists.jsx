function Lists({products}){
    return(
        <table className="table text-center align-middle mt-5" style={{ tableLayout:'fixed' }}>
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((val,index)=>{
                    return (
                            <tr key={index}>
                                <td>{val.code}</td>
                                <td>{val.name}</td>
                                <td>{val.qty}</td>
                                <td>{val.price}</td>
                                <td><img width={80} src={val.urlFile} alt="" /></td>
                                <td>
                                    <button className="btn btn-success me-2">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
export default Lists;