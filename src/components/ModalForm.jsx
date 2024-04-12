import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { SlBasket } from "react-icons/sl";
import axios from "axios";
import ModalFormCard from "./ModalFormCard";

function ModalForm({ data, fetchData }) {
  const [post, setPost] = useState({
    name: "",
    image: "",
    price: "",
    amount: "",
  });
  const [showCard, setShowCard] = useState(false);
  const [postData, setPostdata] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postDataApi();
    setPost({ name: "", image: "", price: "", amount: "" });
  };

  const postDataApi = async () => {
    try {
      const data=  await  axios.post(
        "https://6616880db8b8e32ffc7dc6e6.mockapi.io/Checkout",
        post
      );
      setPostdata(data.data)
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    if (
      post?.name !== "" &&
      post?.image !== "" &&
      post?.price !== "" &&
      post?.amount !== ""
    ) {
      setShowCard(!showCard);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className={showCard ? "col-6" : "col-12"}>
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
                required
              />
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                className="m-2"
                placeholder="Enter Product Price"
                name="price"
                value={post.price}
                onChange={handleChange}
                required
              />
              <Form.Label>Product Quantity</Form.Label>
              <Form.Control
                type="number"
                className="m-2"
                placeholder="Enter Product Quantity"
                name="amount"
                value={post.amount}
                onChange={handleChange}
                required
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
                  required
                />
              </InputGroup>
              <Button
                variant="primary"
                type="submit"
                className="bg-success text-white mt-5 d-block m-auto border-0"
                onClick={handleClick}
              >
                <SlBasket /> Add to Cart
              </Button>
            </Form>
          </div>
        </div>{" "}
        {showCard && (
          <div className="col-6">
            <ModalFormCard postData={postData} fetchData={fetchData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalForm;
