// Component for return to home button
import { Button } from "react-bootstrap";

function BackButton() {
  return (
    <Button
      href="/"
      variant="info"
      className="shadow m-3"
      style={{ position: "absolute", bottom: "0", right: "0" }}
    >
      Return to Home
    </Button>
  );
}

export default BackButton;
