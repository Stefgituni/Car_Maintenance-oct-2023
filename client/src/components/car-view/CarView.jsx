/* eslint-disable no-unused-vars */
import { Button, Card, Table } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import TableItem from './car-table-item/TableItem';

import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import * as carService from '../../services/carService';


function CarView(ownCars,username) {

  const dataMap = Object.entries(ownCars)//.map((x)=>console.log(x));
 
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
            {dataMap.map((car, index) => (
              TableItem(car, index)
            ))}
            {/* <tr>
              <td>Registration number</td>
              <td>{ownCars.regNumber}</td>
            </tr>
            <tr>
              <td>Driver</td>
              <td>{username}</td>
            </tr>
            <tr>
              <td>Mileage</td>
              <td>{ownCars.mileage} km</td>
            </tr> */}
          </tbody>
        </Table>
        <Link to={`/cars/${ownCars._id}`} className="btn btn-primary" style={{ marginBottom: '50px', marginTop: '50px' }}>Details</Link>

      </Card.Body>
    </Card>

  );
}

export default CarView;