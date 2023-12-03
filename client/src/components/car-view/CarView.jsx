/* eslint-disable no-unused-vars */
import { Button, Card, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function CarView(data) {
  // console.log(data);
  return (
    <Card key={data._id} style={{ width: '40rem' }} className="mx-auto">
      <Card.Img
        variant="top"
        className="mx-auto d-block"
        width="900"
        height="300"
        src={data.imageUrl}
        alt={data.carBrand}
      />
      <Card.Body className="text-center">
        <Card.Title>{data.carBrand} {data.carModel}</Card.Title>
        <Table striped className="mx-auto ">
          <thead >
            <tr>
              <th>Registration number</th>
              <th>{data.regNumber}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Driver</td>
              <td>Petar</td>
            </tr>
            <tr>
              <td>Mileage</td>
              <td>{data.mileage} km</td>
            </tr>
          </tbody>
        </Table>
        {/* <Button variant="primary" Link to={`/cars/${data._id}`}>Details</Button> */}
        {/* <Button variant="primary">Details</Button> */}
        {/* <Link to={`/cars/${data._id}`} ><Button variant="primary">Details</Button></Link> */}
        {/* <Link to={`/cars/${data._id}`} variant="primary">Details</Link> */}
        {/* <Link to={`/cars/${data._id}`} variant="primary" >Details</Link> */}
        <Link to={`/cars/${data._id}`} className="btn btn-primary">Details</Link>
        <h1></h1>
      </Card.Body>
    </Card>

  );
}

export default CarView;