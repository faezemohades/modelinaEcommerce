import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Admin from "./components/pages/Admin";
import EditModal from "./components/pages/Admin/EditModal";
import Inventory from "./components/pages/Admin/Inventory";
import Orders from "./components/pages/Admin/Orders";
import Produce from "./components/pages/Admin/Produce";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/Home/Aboutus";
import Contactus from "./components/pages/Home/Contactus";
import FinalCart from "./components/pages/Home/FinalCart";
import Login from "./components/pages/Home/Login";
import ShopingCart from "./components/pages/Home/ShopingCart";
import AllProducts from "./components/Products/AllProducts";
import ProductDetail from "./components/Products/ProductDetail";
 

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<Aboutus />} />
            <Route exact path="/contact" element={<Contactus />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/shop" element={<ShopingCart />} />
            <Route exact path="/finalcart" element={<FinalCart />} />
            <Route exact path="/products/:id" element={<ProductDetail />} />
            <Route exact path="/products" element={<AllProducts />} />

            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/admin/produce" element={<Produce />} />
            <Route exact path="/admin/editproduce/:id" element={<EditModal />} />

            <Route exact path="/admin/inventory" element={<Inventory />} />
            <Route exact path="/admin/orders" element={<Orders />} />



          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
