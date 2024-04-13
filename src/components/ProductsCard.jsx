import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { MdDelete } from "react-icons/md";
import axios from "axios";

function ProductsCard({ data, fetchData }) {
  const handleDelete = async (id) => {
    try {
      fetchData();
      await axios.delete(
        `https://6616880db8b8e32ffc7dc6e6.mockapi.io/Checkout/${id}`
      );
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row className="container d-flex gap-4 ">
      {data?.map((item, idx) => (
        <Col key={idx} xs={12} sm={6} md={4} lg={3}>
          <Card className="d-flex flex-column h-100">
            <Card.Img
              variant="top"
              src={item?.image}
              alt={item?.name}
              className="mx-auto d-block"
            />
            <Card.Body>
              <Card.Title className="text-center">{item?.name}</Card.Title>
              <h5 className="mt-3">Quantity: {item?.amount}</h5>
              <h3 className="mt-3">
                Price: <span className="text-danger">${item?.price}</span>
              </h3>
              <Button
                variant="primary"
                type="button"
                className="bg-danger text-white mt-5 d-block mx-auto border-0"
                onClick={() => handleDelete(item.id)}
              >
                <MdDelete /> Delete
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProductsCard;
