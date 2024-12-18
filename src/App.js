// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer'
// import Home from './components/Home'
// import About from './components/About'
// import Product from './components/Product'
// import Contact from './components/Contact'
// import { Redirect, Route, Switch } from 'react-router-dom';
// import ProductDetail from './components/ProductDetail';
// import Cart from './components/Cart';
// import Checkout from './components/Checkout'

// function App() {
//   return (
//     <>
//       <Header/>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/products" component={Product} />
//         <Route exact path="/products/:id" component={ProductDetail} />
//         <Route exact path="/cart" component={Cart} />
//         <Route exact path="/checkout" component={Checkout} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/contact" component={Contact} />
//         <Redirect to="/" />
//       </Switch>
//       <Footer/>
//     </>
//   );
// }

// export default App;

// import "./App.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import About from "./components/About";
// import Product from "./components/Product";
// import Contact from "./components/Contact";
// import { Redirect, Route, Switch } from "react-router-dom";
// import ProductDetail from "./components/ProductDetail";
// import Cart from "./components/Cart";
// import Checkout from "./components/Checkout";

// function App() {
//   return (
//     <>
//       <Header />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route
//           exact
//           path="/products/category/:category"
//           component={Product}
//         />{" "}
//         {/* Route for category */}
//         <Route exact path="/products/:id" component={ProductDetail} />
//         <Route exact path="/cart" component={Cart} />
//         <Route exact path="/checkout" component={Checkout} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/contact" component={Contact} />
//         <Redirect to="/" />
//       </Switch>
//       <Footer />
//       <div
//         class="fixed-bottom right-100 p-3"
//         style="zIndex: 0; left: 'initial' "
//       >
//         <a
//           href="https://wa.me/91XXXXXXXXXX?text=Hello How can I help you ?"
//           target="_blank"
//         >
//           <img src="/assets/images/home/img1.jpg" width="60" alt="aaa" />
//         </a>
//       </div>
//     </>
//   );
// }

// export default App;
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
