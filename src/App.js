import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
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


          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
