/* eslint-disable no-unused-vars */
import { Button, Card, Table } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import TableItem from './car-table-item/TableItem';

function CarView(ownCars, username) {
  const keys = {
    _ownerId: "Owner ID",
    regNumber: "Registration Number",
    carBrand: "Car Brand",
    carModel: "Car Model",
    mileage: "Mileage",
    email: "Email",
    driver: "Driver",
    technicalService: "Technical Service",
    imageUrl: "Image Url",
    vehicleInspection: "Vehicle Inspection",
    carLiability: "Car Liability",
    casco: "Casco",
    vignette: "Vignette",
    summary: "Summary",
  }
  const dataMap = Object.entries(ownCars);
  let dataMapMod = dataMap.map(x => {
    if (keys[x[0]]) x[0] = keys[x[0]];
    return x;
  });

  return (
    <Card key={ownCars._id} style={{ width: '40rem', backgroundColor: 'transparent' }} className="mx-auto" >
      <Card.Img
        variant="top"
        className="mx-auto d-block"
        width="900"
        height="300"
        src={ownCars.imageUrl}
        alt={ownCars.carBrand}
      />
      <Card.Body className="text-center" >
        <Card.Title style={{ color: 'white', fontSize: 50 }}>{ownCars.carBrand} {ownCars.carModel}</Card.Title>
        <Table striped className="mx-auto">
          <tbody>
            {dataMapMod.map((car, index) => (
              TableItem(car, index)
            ))}
          </tbody>
        </Table>
        <Link to={`/cars/${ownCars._id}`} className="btn btn-primary" style={{ marginBottom: '50px', marginTop: '50px' }}>Details</Link>

      </Card.Body>
    </Card>

  );
}

export default CarView;