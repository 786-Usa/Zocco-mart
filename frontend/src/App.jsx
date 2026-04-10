import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ActivationPage from "./pages/ActivationPage";
import Wishlist from "./pages/WishlistPage";
import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import Events from "./pages/EventsPage";
import FAQ from "./pages/FAQ";
import MyProfile from "./pages/MyProfile";
import ProductsPage from "./pages/ProductsPage";
import DetailProductPage from "./pages/DetailProductPage";
import BestSelling from "./components/Home/BestSelling";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from "./components/Home/Newsletter";
function App() {
  return (
    <>
      <div>
        <ToastContainer />
        {/* header and footer would go here (if we had them) */}
        <Header />

        <Routes>
          {/* Flat structure: All Routes are siblings */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/events" element={<Events />} />
          <Route path="/faq" element={<FAQ />} />
          <Route
            path="/products"
            element={<Navigate to="/products/all" replace />}
          />
          <Route path="/products/all" element={<ProductsPage />} />
          <Route path="/product/:id" element={<DetailProductPage />} />
          <Route path="/best-selling" element={<BestSelling />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/activate/:activationToken"
            element={<ActivationPage />}
            />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Newsletter/>
            <Footer/>
      </div>
    </>
  );
}

export default App;
