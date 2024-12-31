import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createClient } from "@supabase/supabase-js";
import AdminSection from "./Admin";
import WhatsAppButton from "./components/WhatsAppButton";

const supabaseUrl = "https://xduejiadxdhlxveqsfwz.supabase.co";
const anonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkdWVqaWFkeGRobHh2ZXFzZnd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0OTI2NjgsImV4cCI6MjA1MTA2ODY2OH0.FBCsSDsskHLCezTaM60cr5Gttwo1qvF2B-fdQrLQs6U";
export const imageBaseUrl =
  "https://xduejiadxdhlxveqsfwz.supabase.co/storage/v1/object/public/";
export const supabase = createClient(supabaseUrl, anonKey);

function App() {
  const location = useLocation();

  const isAdminRoute = location.pathname === "/admin";

  return (
    <>
      {!isAdminRoute && <Header />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/category/:category" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/admin" component={AdminSection} />

        <Redirect to="/" />
      </Switch>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <WhatsAppButton />}
    </>
  );
}

export default App;
