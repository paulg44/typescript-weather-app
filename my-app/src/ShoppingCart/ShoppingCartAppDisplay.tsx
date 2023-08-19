// Component for Shopping Cart

import "./ShoppingCart.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import ShoppingHome from "./ShopingPages/ShoppingHome";
import ShoppingAbout from "./ShopingPages/ShoppingAbout";
import ShoppingStore from "./ShopingPages/ShoppingStore";
import Navbar from "./ShoppingComponents/Navbar";

function ShoppingCartDisplay() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/shoppinghome" element={<ShoppingHome />}></Route>
          <Route path="/shoppingstore" element={<ShoppingStore />}></Route>
          <Route path="/shoppingabout" element={<ShoppingAbout />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default ShoppingCartDisplay;
