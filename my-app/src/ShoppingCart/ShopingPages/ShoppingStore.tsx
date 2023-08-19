// Commponet for shopping cart store page
import { Col, Row } from "react-bootstrap";
import storeItems from "../ShoppingData/items.json";
import StoreItem from "../ShoppingComponents/StoreItem";

function ShoppingStore() {
  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
        {/* Maps through store item json file */}
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

console.log("render");

export default ShoppingStore;
