import AddNewProduct from './components/AddNewProduct.jsx';
import AllProducts from './components/AllProducts.jsx';
import SpecificProduct from './components/SpecificProduct.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdatePorduct from './components/UpdatePorduct.jsx';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/product" element={<AllProducts />} />
          <Route path="/product/:id" element={<SpecificProduct />} />
          <Route path='product/add' element={<AddNewProduct />}/>
          <Route path='product/update/:id' element={<UpdatePorduct />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App