import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarView() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="../images/Mitsubishi_l200_2015.png" />
      <Card.Body>
        <Card.Title>Mitsubishi L200</Card.Title>
        {/* <Card.Text>Рег. Номер СА9058РХ</Card.Text>
        <Card.Text>248293 km</Card.Text> */}
        <Table striped>
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>Registration number</th>
          <th>CA1234AA</th>
          {/* <th>Username</th> */}
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* <td>1</td> */}
          <td>Driver</td>
          <td>Petar</td>
          {/* <td>@mdo</td> */}
        </tr>
        <tr>
          {/* <td>2</td> */}
          <td>Mileage</td>
          <td>248293 km</td>
          {/* <td>@fat</td> */}
        </tr>
      </tbody>
    </Table>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
    
  );
}

export default CarView;