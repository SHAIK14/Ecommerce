import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Header from "./components/Header";

import Error from "./components/Pages/Error";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Store from "./components/Pages/Store";
import ContactUs from "./components/Pages/ContactUs";
import Products from "./components/Pages/Products";

import Spinner from "./components/Spinner";
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
      <ModalPortal />
    </div>
  );
};

export default App;
