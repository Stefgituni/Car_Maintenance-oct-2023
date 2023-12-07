/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import tableHeadingLabels from "../../utils/constants"
import * as carService from '../../services/carService';

// import { useNavigate,  } from "react-router-dom";

// import "../../../public/styles/all-cars.css"
export default function Maintenance() {
  const [cars, setCars] = useState([]);
  const [tempCars, setTempCars] = useState([]);
  const [searchData, setSearchData] = useState({
    regNumber: '',
    carBrand: '',
    driver: '',
    carModel: '',
  });
  useEffect(() => {
    carService.getAll()
      .then(result => { setCars(result); setTempCars(result) })
      .catch(err => {
        console.log(err);
      });
  }, []);
  
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
    
    console.log(searchData);
  }
 
  let noResult = !cars || cars.length === 0;
  return (
    <>
      <div className="container mt-3">
        <form className="form-inline" style={{ display: 'flex', justifyContent: 'center' }} onSubmit={searchCarSubmitHandler}>
          {/* Search Criteria 1 */}
          <div className="form-group mx-2" style={{ display: 'flex', width: "1500px", height: "30px" }}>
            {/* <label htmlFor="criteria1" className="sr-only">Reg number</label> */}
            <input type="text" className="form-control" id="regNumber" name="regNumber" placeholder="Registration number" />
          </div>

          {/* Search Criteria 2 */}
          <div className="form-group mx-2" style={{ display: 'flex', width: "1500px", height: "30px" }}>
            {/* <label htmlFor="criteria2" className="sr-only">Driver name</label> */}
            <input type="text" className="form-control" id="carBrand" name="carBrand" placeholder="Car brand" />
          </div>

          {/* Search Criteria 3 */}
          <div className="form-group mx-2" style={{ display: 'flex', width: "1500px", height: "30px" }}>
            {/* <label htmlFor="criteria3" className="sr-only">Driver names</label> */}
            <input type="text" className="form-control" id="driver" name="driver" placeholder="Driver names" />
          </div>

          {/* Search Criteria 4 */}
          <div className="form-group mx-2" style={{ display: 'flex', width: "1500px", height: "30px" }}>
            {/* <label htmlFor="car-model" className="sr-only">Car model</label> */}
            <input type="text" className="form-control" id="carModel" name="carModel" placeholder="Car model" />
          </div>

          {/* Search Button */}
          <button type="submit" className="btn btn-outline-success">Search</button>
          {/* <button type="submit" className="btn btn-outline-success" onClick={clearButton} >Clear</button> */}
          <button type="button" className="btn btn-outline-success" onClick={clearButton}>Clear</button>
        </form>
      </div>

      <Table responsive>
        <thead>
          <tr>
            {tableHeadingLabels?.map((head, index) =>
              <th key={index} style={{ maxWidth: '150px' }}>{head}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {cars?.map((car, index) => (
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
      {noResult && (<h1 className="home-cars">There are no result matching your criteria</h1>)}
    </>
  );
}