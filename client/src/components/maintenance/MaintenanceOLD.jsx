/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import tableHeadingLabels from "../../utils/constants"
import Search from "../search/Search";

import * as carService from '../../services/carService';

// import "../../../public/styles/all-cars.css"
export default function Maintenance() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    carService.getAll()
      .then(result => setCars(result))
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log("CARS",cars);
  return (
    <>
      <Search {...cars}/>
      <Table responsive>
        <thead>
          <tr>
            {tableHeadingLabels.map((head, index) =>
                <th key={index} style={{  maxWidth: '150px' }}>{head}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={car._id}>
              <td>{car.regNumber}</td>
              <td>{car.driver}</td>
              <td>{car.carBrand}</td>
              <td>{car.carModel}</td>
              <td>{car.mileage}</td>
              <td>{car.technicalService}</td>
              <td>{car.vehicleInspection}</td>
              <td>{car.carLiability}</td>
              <td>{car.casco}</td>
              <td>{car.vignette}</td>
              <td> <Link to={`/cars/${car._id}`} className="btn btn-primary">Details</Link></td>
            </tr>
          ))}
        </tbody>
      </Table>
      </>
  );
}