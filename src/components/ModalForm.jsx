import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { SlBasket } from "react-icons/sl";
import axios from "axios";

function ModalForm() {
  const [post, setPost] = useState({
    name: "",
    image: "",
    price: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postTutorial();
  };

  const postTutorial = async () => {
    try {
      const res = await axios.post(
        "https://6616880db8b8e32ffc7dc6e6.mockapi.io/Checkout",
        post
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="w-50 m-auto">
        <Form onSubmit={handleSubmit}>
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            className="m-2"
            placeholder="Enter Product Name"
            name="name"
            value={post.name}
            onChange={handleChange}
          />
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            className="m-2"
            placeholder="Enter Product Price"
            name="price"
            value={post.price}
            onChange={handleChange}
          />
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control
            type="number"
            className="m-2"
            placeholder="Enter Product Quantity"
            name="amount"
            value={post.amount}
            onChange={handleChange}
          />
          <InputGroup className="mt-2">
            <InputGroup.Text id="basic-addon3">
              https://example.com/users/
            </InputGroup.Text>
            <Form.Control
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="Enter product URL"
              onChange={handleChange}
              name="image"
              value={post.image}
            />
          </InputGroup>
          <Button
            variant="primary"
            type="submit"
            className="bg-success text-white mt-5 d-block m-auto border-0"
          >
            <SlBasket /> Add to Cart
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ModalForm;
