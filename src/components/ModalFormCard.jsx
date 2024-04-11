import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ModalFormCard({data,fetchData}) {
  fetchData()
let array = data.length -1 

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" alt ={data[array]?.name}  src={data[array]?.image} />
      <Card.Body>
        <Card.Title>{data[array]?.name} </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default  ModalFormCard;