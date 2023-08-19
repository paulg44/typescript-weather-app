// Component for Shopping Cart

import "./ShoppingCart.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import ShoppingHome from "./ShopingPages/ShoppingHome";
import ShoppingAbout from "./ShopingPages/ShoppingAbout";
import ShoppingStore from "./ShopingPages/ShoppingStore";

function ShoppingCartDisplay() {
  return (
    <div>
      <Container className="mb-4">
        <Routes>
          <Route path="/shoppinghome" element={<ShoppingHome />}></Route>
          <Route path="/shoppingstore" element={<ShoppingStore />}></Route>
          <Route path="/shoppingabout" element={<ShoppingAbout />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default ShoppingCartDisplay;
