import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Admin from "./components/pages/Admin";
import Inventory from "./components/pages/Admin/Inventory";
import Orders from "./components/pages/Admin/Orders";
import Produce from "./components/pages/Admin/Produce";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/Home/Aboutus";
import Contactus from "./components/pages/Home/Contactus";
import Login from "./components/pages/Home/Login";

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
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/admin/produce" element={<Produce />} />
            <Route exact path="/admin/inventory" element={<Inventory />} />
            <Route exact path="/admin/orders" element={<Orders />} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
