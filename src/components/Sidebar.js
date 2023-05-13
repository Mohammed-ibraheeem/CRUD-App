import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <>
            <ul className="list-unstyled">
                <li>
                    <Link to="/products">Get All Products</Link>
                </li>

            </ul>
        </>
    );

} export default Sidebar;