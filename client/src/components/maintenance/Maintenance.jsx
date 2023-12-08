/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import tableHeadingLabels from "../../utils/constants"
import * as carService from '../../services/carService';

import maintenanceCheck from './maintenance-check/maintenanceCheck'

// import { useNavigate,  } from "react-router-dom";

// import "../../../public/styles/all-cars.css"
export default function Maintenance() {
  const [cars, setCars] = useState([]);
  const [tempCars, setTempCars] = useState([]);
  const [searchData, setSearchData] = useState({
    regNumber: '',
    carBrand: '',
    carModel: '',
    driver: '',
  });
  useEffect(() => {
    carService.getAll()
      .then(result => { setCars(result); setTempCars(result) })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const allCars = maintenanceCheck(cars);

  // console.log(data);

  const searchCarSubmitHandler = async (e) => {
    e.preventDefault();

    const searchData = Object.fromEntries(new FormData(e.currentTarget));
    setSearchData(Object.fromEntries(new FormData(e.currentTarget)));
    try {
      const result = await carService.search(searchData);
      setCars(result);

    } catch (err) {
      // Error notification
      console.log(err);
    }

  }
  const clearButton = (e) => {
    e.preventDefault();
    setCars(tempCars);
    setSearchData({
      regNumber: '',
      carBrand: '',
      driver: '',
      carModel: '',
    });

    // console.log(searchData);
  }

  let noResult = !cars || cars.length === 0;
  return (
    <>
      <div className="container mt-3">
        <form className="form-inline" style={{ display: 'flex', justifyContent: 'center' }} onSubmit={searchCarSubmitHandler}>
          <div className="form-group mx-2" style={{ display: 'flex', width: "1500px", height: "30px" }}>
            <input type="text" className="form-control" id="regNumber" name="regNumber" placeholder="Registration number" />
          </div>

          <div className="form-group mx-2" style={{ display: 'flex', width: "1500px", height: "30px" }}>
            <input type="text" className="form-control" id="carBrand" name="carBrand" placeholder="Car brand" />
          </div>

          <div className="form-group mx-2" style={{ display: 'flex', width: "1500px", height: "30px" }}>
            <input type="text" className="form-control" id="driver" name="driver" placeholder="Driver names" />
          </div>

          <div className="form-group mx-2" style={{ display: 'flex', width: "1500px", height: "30px" }}>
            <input type="text" className="form-control" id="carModel" name="carModel" placeholder="Car model" />
          </div>

          <button type="submit" className="btn btn-outline-success">Search</button>
          <button type="button" className="btn btn-outline-success" onClick={clearButton}>Clear</button>
        </form>
      </div>

      <Table responsive variant="dark" bordered>
        <thead>
          <tr>
            {tableHeadingLabels?.map((head, index) =>
              <th key={index} style={{ maxWidth: '150px' }}>{head}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {allCars?.map((car) => (
            <tr key={car._id}>
              <td>{car.regNumber}</td>
              <td>{car.driver}</td>
              <td>{car.carBrand}</td>
              <td>{car.carModel}</td>
              <td>{car.mileage}</td>
              <td style={{ ...car.colorMileage }}>{car.technicalService}</td>
              <td style={{ ...car.colorVehicleInspection }}>{car.vehicleInspection}</td>
              <td style={{ ...car.colorCarLiability }}>{car.carLiability}</td>
              <td style={{ ...car.colorCasco }}>{car.casco}</td>
              <td style={{ ...car.colorVignette }}>{car.vignette}</td>
              {/* <td>{car.technicalService}</td>
              <td>{car.vehicleInspection}</td>
              <td>{car.carLiability}</td>
              <td>{car.casco}</td>
              <td>{car.vignette}</td> */}
              <td> <Link to={`/cars/${car._id}`} className="btn btn-primary">Details</Link></td>
            </tr>
          ))}
        </tbody>
      </Table>
      {noResult && (<p className="home-cars">There are no result matching your criteria</p>)}
    </>
  );
}