import { useState } from "react";
import { Button } from "react-bootstrap";

function ModalPassenger() {
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    count < 7 ? setCount(count + 1) : alert("maksimal 7 penumpang");
  };
  const handleMinus = () => {
    count > 0 ? setCount(count - 1) : alert("at least 1 penumpang");
  };

  return (
    <>
      <div
        className="counter"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Button onClick={handlePlus} variant="success">
          +
        </Button>{" "}
        <input
          value={count}
          style={{
            height: "30px",
            margin: "3px",
            textAlign: "center",
            fontSize: "20px",
            width: "60px",
          }}
          type="text"
        />
        <Button onClick={handleMinus} variant="success">
          -
        </Button>{" "}
      </div>
    </>
  );
}

export default ModalPassenger;
