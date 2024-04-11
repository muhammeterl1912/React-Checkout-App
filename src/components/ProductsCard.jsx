
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ProductsCard({data}) {
  
  return (
    <Row xs={1} md={2} className="g-4">
      {data?.map((item, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={item?.img} alt ={item?.name}/>
            <Card.Body>
              <Card.Title>{item?.name}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProductsCard;
