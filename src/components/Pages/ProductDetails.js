import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    let { productID } = useParams();
    const [Product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://test-api-ln2g.onrender.com/product/${productID}`)
            .then((res) => res.json())
            .then((Product) => {
                console.log(Product);
                setProduct(Product);

            })
    }, [Product, productID])
    return (
        <>
            <h1>View page</h1>
            {Product &&
                <>
                    <h1>title: {Product.title}</h1>
                    <h2>category: {Product.category}</h2>
                    <h3>description: {Product.description}</h3>
                    <h4>price: {Product.price}$</h4>


                </>
            }
        </>
    )
}
export default ProductDetails;