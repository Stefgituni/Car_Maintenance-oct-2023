import { useEffect, useState, useContext } from 'react';
import Table from 'react-bootstrap/Table';
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";
import * as carService from '../../services/carService';
import tableHeadingLabels from "../../utils/constants";
import styles from "./MyCars.Module.css";
import maintenanceCheck from '../maintenance/maintenance-check/maintenanceCheck';

import 'bootstrap/dist/js/bootstrap.bundle.min';//toggle

export default function MyCars() {
    const { userId } = useContext(AuthContext);
    const [ownCars, setOwnCars] = useState([]);

    useEffect(() => {
        carService.getOwnedCars(userId)
            .then(result => setOwnCars(result))
            .catch(err => {
                console.log(err);
            });
    }, [userId]);
    let noResult = !ownCars || ownCars.length === 0;
    const sortOwnCars = ownCars.slice().sort((a,b)=>{
        return Number(b.mileage)- Number(a.mileage);
    })
    const allOwnCars = maintenanceCheck(sortOwnCars)
    return (
        <>
            
            {!noResult && (<p className={styles.myCar}>Please update mileage for each car</p>)}
            {!noResult&&(<Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                        {tableHeadingLabels?.map((head, index) =>
                            <th key={index} style={{ maxWidth: '150px' }}>{head}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {allOwnCars?.map((car) => (
                        <tr key={car._id}>
                            <td data-toggle="tooltip" title="Registration Number">{car.regNumber}</td>
                            <td data-toggle="tooltip" title="Driver">{car.driver}</td>
                            <td data-toggle="tooltip" title="Car Brand">{car.carBrand}</td>
                            <td data-toggle="tooltip" title="Car Model">{car.carModel}</td>
                            <td data-toggle="tooltip" title="Mileage">{car.mileage}</td>
                            <td style={{ ...car.colorMileage }} data-toggle="tooltip" title={ car.leftKilometers }>{car.technicalService}</td>
                            <td style={{ ...car.colorVehicleInspection }} data-toggle="tooltip" title={ car.leftDaysVI }>{car.vehicleInspection}</td>
                            <td style={{ ...car.colorCarLiability }} data-toggle="tooltip" title={ car.leftDaysCL }>{car.carLiability}</td>
                            <td style={{ ...car.colorCasco }} data-toggle="tooltip" title={car.leftDaysC}>{car.casco}</td>
                            <td style={{ ...car.colorVignette }} data-toggle="tooltip" title={car.leftDaysV}>{car.vignette}</td>
                            <td data-toggle="tooltip" title="Summary information">{car.summary}</td>
                            <td> <Link to={`/cars/${car._id}`} className="btn btn-primary">Details</Link></td>
                        </tr>
                    ))}
                </tbody>
            </Table>)}
            {!noResult && ( <div className={styles.legend}>
                <p className={styles.legend}>Legend:</p>
                <div className={styles.cubeContainer}>
                    <h5>Technical service: </h5>
                    <div className={styles.coloredSquareKm}></div>
                    <h6> Kilometers past due!</h6>
                    <div className={styles.coloredSquareYKm}></div>
                    <h6> Kilometers left!</h6>
                </div>
                <div className={styles.cubeContainer}>
                    <h5>Vehicle inspection </h5>
                    <div className={styles.coloredSquareD}></div>
                    <h6> Days past due!</h6>
                    <div className={styles.coloredSquareYD}></div>
                    <h6> Days left!</h6>
                </div>

            </div>)}
            {noResult && (<p className={styles.myCar} >You don&#39;t have registered cars.</p >)
            }
        </>
    )
}