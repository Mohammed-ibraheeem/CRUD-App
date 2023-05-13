import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

function Products() {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        GetAllProducts();
    }, [])
    const GetAllProducts = () => {
        fetch('http://localhost:9000/posts')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
    }

    const deleteproduct = (product) => {
        Swal.fire({
            title: `Are You Sure To Delete ${product.title} ?`,
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {
                fetch(`http://localhost:9000/posts/${product.id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => { GetAllProducts() })
            }
        })

    }

    return (
        <>
            <h1> Products Page</h1>

            <Link to="/products/add" className="btn btn-success mt-3"> Add New Product </Link>

            <table class="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {Products.map((product) => {
                        return (
                            <>
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price}$</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm" onClick={() => deleteproduct(product)}>Delete</button>
                                        <Link to={`/products/${product.id}`} className="btn btn-info btn-sm">View</Link>
                                        <button className="btn btn-primary btn-sm">Edit</button>
                                    </td>
                                </tr>

                            </>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}
export default Products;