import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { SlBasket } from "react-icons/sl";
function ModalForm({handleClose}) {


  return (
    <div className="container">
  
      <div className="w-50 m-auto">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          className="m-2"
          placeholder="Enter Product Name "
        />
        <Form.Label>Product Price</Form.Label>
        <Form.Control
          type="number"
          className="m-2"
          placeholder="Enter Product Price "
        />
        <Form.Label>Product Quantity</Form.Label>
        <Form.Control
          type="number"
          className="m-2"
          placeholder="Enter Product Quantity "
        />
        <InputGroup className="mt-2">
          <InputGroup.Text id="basic-addon3">
            https://example.com/users/
          </InputGroup.Text>
          <Form.Control id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>
        <Button
          variant="primary"
         onClick={handleClose}
          className="bg-success text-black mt-5 d-block m-auto border-0"
        >
          <SlBasket /> Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ModalForm;
