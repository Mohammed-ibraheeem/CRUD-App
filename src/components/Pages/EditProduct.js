import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
    let { productID } = useParams();
    const [values, setValues] = useState({
        title: '',
        price: ''
    });
    let navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://test-api-ln2g.onrender.com/product/` + productID)
            .then(res => {
                setValues(res.data)
            })
            .catch(err => console.log(err));
    }, [productID])
    const formsubmit = (e) => {
        e.preventDefault();
        axios.put(`https://test-api-ln2g.onrender.com/product/` + productID, values)
            .then((data) => {
                console.log(data);
                navigate('/products');
            })
            .catch(err => console.log(err));
    }


    return (
        <>
            <h1>Edit Product page</h1>
            <form onSubmit={formsubmit}>
                <div className="mb-3">
                    <label htmlFor="ProductTitle" classNameName="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="ProductTitle"
                        placeholder="Product Title"
                        value={values.title}
                        aria-describedby="Product Title"
                        onChange={(e) => setValues({ ...values, title: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="ProductPrice" classNameName="form-label">
                        Price
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="ProductPrice"
                        placeholder="Product Price"
                        value={values.price} aria-describedby="Product Price"
                        onChange={(e) => setValues({ ...values, price: e.target.value })}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Edit Product
                </button>
            </form>
        </>
    )
}
export default EditProduct;