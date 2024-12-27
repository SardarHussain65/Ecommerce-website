import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminSec from "./components/AdminSec";
import Admin from "./components/buttons/Admin";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/category/:category" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/" element={<Admin />} />
        <Route path="/AdminSec" element={<AdminSec />} />

        <Redirect to="/" />
      </Switch>
      <Footer />

      {/* WhatsApp Button */}
      <div
        className="fixed-bottom right-100 p-3"
        style={{ zIndex: 0, left: "initial" }}
      >
        <a
          href="https://wa.me/923369164460?text=Hello%20How%20can%20I%20help%20you%20?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/images/home/whatsapp.png"
            width="60"
            alt="WhatsApp"
          />
        </a>
      </div>
    </>
  );
}

export default App;
