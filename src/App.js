import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Pages/Home';
import Products from './components/Pages/products';
import Addproducts from './components/Pages/Addproducts';
import ProductDetails from './components/Pages/ProductDetails';
import EditProduct from './components/Pages/EditProduct';
function App() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className='col-10'>
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/CRUD-App' element={<Products />} />
            <Route path='/products/add' element={<Addproducts />} />
            <Route path='/products/:productID' element={<ProductDetails />} />
            <Route path='/products/edit/:productID' element={<EditProduct />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
