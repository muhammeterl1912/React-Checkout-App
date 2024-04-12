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
      await axios.delete(`https://6616880db8b8e32ffc7dc6e6.mockapi.io/Checkout/${id+1}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row xs={1} md={2} className="g-4 container">
      {data?.map((item, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={item?.image} alt={item?.name} />
            <Card.Body>
              <Card.Title className="text-center">{item?.name}</Card.Title>
              <h5 className="mt-3">Quantity: {item?.amount}</h5>
              <h3 className="mt-3">
                Price: <span className="text-danger">${item?.price}</span>
              </h3>
              <Button
                variant="primary"
                type="button" 
                className="bg-danger text-white mt-5 d-block m-auto border-0"
                onClick={() => handleDelete(idx)} 
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
