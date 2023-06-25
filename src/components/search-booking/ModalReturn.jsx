import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function ModalReturn({ show, onClose, selectedDate, onSelectDate }) {
  const [date, setDate] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSelectDate(date);
    onClose();
  };
  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header style={{ border: "0 none" }}>
          <div style={{ width: "400px" }}>
            <h3 style={{ fontWeight: "700", textAlign: "left" }}>
              Select Date Return
            </h3>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="row">
              <div className="col-md-4">
                <Form controlId="dob" onSubmit={handleSubmit}>
                  <Form.Control
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                    type="date"
                    name="dob"
                    placeholder="Date Return"
                  />
                  <Button type="submit" variant="oriented">
                    Save
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalReturn;
