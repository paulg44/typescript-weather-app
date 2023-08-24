// Component for Shopping Cart
import { Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import ShoppingHome from "./ShopingPages/ShoppingHome";
import ShoppingAbout from "./ShopingPages/ShoppingAbout";
import ShoppingStore from "./ShopingPages/ShoppingStore";
import Navbar from "./ShoppingComponents/Navbar";
import { ShoppingCartProvider } from "./ShoppingContext/ShoppingCartContext";
import BackButton from "../BackButton/BackButton";

function ShoppingCartDisplay() {
  console.log("ShoppingCartDisplay rendering");
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<ShoppingHome />}></Route>
          <Route path="/store" element={<ShoppingStore />}></Route>
          <Route path="/about" element={<ShoppingAbout />}></Route>
        </Routes>
        <Link to={"/"}>Homepage</Link>
        <BackButton />
      </Container>
    </ShoppingCartProvider>
  );
}

export default ShoppingCartDisplay;
