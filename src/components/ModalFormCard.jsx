import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Table from "react-bootstrap/Table";
function ModalFormCard({ postData, fetchData }) {
  const [quantity, setQuantity] = useState(+"");

  useEffect(() => {
    fetchData();
    setQuantity(Number(postData?.amount));
  }, [postData]);

  return (
    <Card  style={{ width: "20rem", height: "25rem" }}>
      <Card.Img variant="top" alt={postData?.name} src={postData?.image} />
      <Card.Body className="h-100">
        <Card.Title>{postData?.name} </Card.Title>
        <h3 className="text-danger text-center mt-3">
          <span className="text-black">Price:</span> {postData?.price}$
        </h3>
        <div className=" m-auto mt-3 d-flex w-50 justify-content-between">
          <Button
            type="submit"
            className="bg-white text-black  d-block  border-0"
            disabled={quantity >= 10}
            onClick={() => setQuantity(quantity + 1)}
          >
            <FaPlus />
          </Button>
          <h5 className="mt-1">{+quantity}</h5>
          <Button
            type="submit"
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity < 1}
            className="bg-white text-black d-block border-0"
          >
            <FaMinus />
          </Button>
        </div>
        <h6 className="mt-4">Product Total: $ {postData?.price * +quantity}</h6>
      </Card.Body>
      <Table striped="columns" className="mb-5">
        <thead>
          <tr>
            <th>Subtotal</th>
            <th>Tax(18%)</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{postData?.price * +quantity}</td>
            <td>{postData?.price * +quantity * 0.18}</td>
            <td>
              {postData?.price * +quantity * 0.18 + postData?.price * +quantity}
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
}

export default ModalFormCard;
