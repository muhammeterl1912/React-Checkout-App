import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { SlBasket } from "react-icons/sl";
import axios from "axios";
import ModalFormCard from "./ModalFormCard";

function ModalForm({ fetchData }) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postDataApi();
    setPost({ name: "", image: "", price: "", amount: "" });
    setShowCard(true);
  };

  const postDataApi = async () => {
    try {
      const data = await axios.post(
        "https://6616880db8b8e32ffc7dc6e6.mockapi.io/Checkout",
        post
      );
      setPostdata(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex mx justify-content-center align-items-center" style={{ minWidth: "100vh" }}>
      <div className="p-3 p-md-5">
        <div className="row">
          <div className="col-md-6">
            <div className="text-center">
            <Form onSubmit={handleSubmit} style={!showCard ? { minWidth: "100vh" } : {}}>

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
                  className="bg-success text-white mt-4 mt-md-5 d-block mx-auto border-0"
                >
                  <SlBasket /> Add to Cart
                </Button>
              </Form>
            </div>
          </div>
          <div className="col-6 mt-3 mt-md-0">
            {showCard && <ModalFormCard postData={postData} fetchData={fetchData} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
