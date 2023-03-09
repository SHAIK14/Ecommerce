import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

import Home from "./components/Pages/Home";
import Store from "./components/Pages/Store";
import About from "./components/Pages/About";
import ContactUs from "./components/Pages/ContactUs";
import Products from "./components/Pages/Products";
import Error from "./components/Pages/Error";

import ModalPortal from "./components/modals/ModalPortal";
const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/products/:productId" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <Footer />
      <ModalPortal />
    </div>
  );
};

export default App;
