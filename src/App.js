import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Pages/Home';
import Products from './components/Pages/products';
import Addproducts from './components/Pages/Addproducts';
import ProductDetails from './components/Pages/ProductDetails';
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
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Outlet />}>
              <Route path='/products' element={<Products />} />
              <Route path='/products/add' element={<Addproducts />} />
              <Route path='/products/:productID' element={<ProductDetails />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
/* 
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/products' element={<Products />} />
  <Route path='/products/add' element={<Addproducts />} />
  <Route path='/products/:productID' element={<ProductDetails />} />
</Routes>*/