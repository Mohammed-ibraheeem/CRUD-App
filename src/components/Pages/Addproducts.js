import { useState } from "react";
//import axios from "axios";
import { useNavigate } from "react-router-dom";
function Addproducts() {
    const [title, settitle] = useState("");
    const [price, setprice] = useState(0);

    let navigate = useNavigate();

    const formsubmit = (e) => {
        e.preventDefault();
        //axios==fetch 
        /* axios.post("http://localhost:9000/posts", {
             title,
             price,
         })
             .then((data) => {
                 console.log(data);
                 navigate('/products');
             })*/
        fetch("http://localhost:9000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify({
                title,
                price,
            }),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                navigate('/products');
            })
    }
    return (
        <>
            <h1> Add products </h1>
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
                        aria-describedby="Product Title"
                        onChange={(e) => settitle(e.target.value)}
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
                        aria-describedby="Product Price"
                        onChange={(e) => setprice(e.target.value)}

                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Add product
                </button>
            </form>
        </>
    )
}
export default Addproducts;