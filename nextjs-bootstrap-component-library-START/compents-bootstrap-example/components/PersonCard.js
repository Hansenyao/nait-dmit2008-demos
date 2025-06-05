import { Card,ListGroup } from "react-bootstrap";
export default function PersonCard({data}) {
  return (
    <div><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{data.fname} {data.lname}</Card.Title>
        <Card.Text>
         {data.phone} - {data.email}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {data.skills.map((item,index)=><ListGroup.Item key={index}>{item}</ListGroup.Item>)}
      </ListGroup>
    </Card></div>
  )
}
