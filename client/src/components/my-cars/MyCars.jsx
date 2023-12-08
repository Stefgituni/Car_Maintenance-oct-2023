import { useEffect, useState, useContext } from 'react';
import Table from 'react-bootstrap/Table';
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";
import * as carService from '../../services/carService';
import tableHeadingLabels from "../../utils/constants"
import styles from "./MyCars.Module.css"
import maintenanceCheck from '../maintenance/maintenance-check/maintenanceCheck'
export default function MyCars() {
    const { userId } = useContext(AuthContext);
    const [ownCars, setOwnCars] = useState([]);

    // const currentDate = new Date();
    // const year = currentDate.getFullYear();
    // const month = currentDate.getMonth() + 1;
    // const day = currentDate.getDate();
    // const todayDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
    // const currentDay = new Date(todayDate).getTime();
    // const days = 1000 * 60 * 60 * 24;
    // const daysLeft = 20;

    // const typeOfColor = {
    //     red: { backgroundColor: "red" },
    //     white: { backgroundColor: "white" },
    //     orange: { backgroundColor: "orange" },
    // }

    useEffect(() => {
        carService.getOwnedCars(userId)
            .then(result => setOwnCars(result))
            .catch(err => {
                console.log(err);
            });
    }, []);
    let noResult = !ownCars || ownCars.length === 0;
    const allOwnCars = maintenanceCheck(ownCars)
    //coloring

    // ownCars.map(car => {
    //     const keysArray = Object.keys(car);
    //     keysArray.map(key => {
    //         switch (key) {
    //             case "mileage": {
    //                 if (Number(car.technicalService) - Number(car.mileage) <= 1000 && Number(car.technicalService) - Number(car.mileage) > 0) {
    //                     car.colorMileage = typeOfColor.orange;
    //                     return;
    //                 }
    //                 car.colorMileage = Number(car.mileage) > Number(car.technicalService) ? typeOfColor.red : typeOfColor.white;
    //                 break;
    //             }
    //             case "vehicleInspection": {
    //                 let date = new Date(car.vehicleInspection);
    //                 if (currentDay >= date.getTime()) {
    //                     car.colorVehicleInspection = typeOfColor.red;
    //                     return;
    //                 }
    //                 car.colorVehicleInspection = (date.getTime() - currentDay) / days < daysLeft ? typeOfColor.orange : typeOfColor.white;
    //                 break;
    //             }
    //             case "carLiability": {
    //                 let date = new Date(car.carLiability);
    //                 if (currentDay >= date.getTime()) {
    //                     car.colorCarLiability = typeOfColor.red;
    //                     return;
    //                 }
    //                 car.colorCarLiability = (date.getTime() - currentDay) / days < daysLeft ? typeOfColor.orange : typeOfColor.white;
    //                 break;
    //             }
    //             case "casco": {
    //                 let date = new Date(car.casco);
    //                 if (currentDay >= date.getTime()) {
    //                     car.colorCasco = typeOfColor.red;
    //                     return;
    //                 }
    //                 car.colorCasco = (date.getTime() - currentDay) / days < daysLeft ? typeOfColor.orange : typeOfColor.white;
    //                 break;
    //             }
    //             case "vignette": {
    //                 let date = new Date(car.vignette);
    //                 if (currentDay >= date.getTime()) {
    //                     car.colorVignette = typeOfColor.red;
    //                     return;
    //                 }
    //                 car.colorVignette = (date.getTime() - currentDay) / days < daysLeft ? typeOfColor.orange : typeOfColor.white;
    //                 break;
    //             }
    //         }
    //     });
    // })
    // console.log(ownCars)
    return (
        <>
            <p className={styles.myCar}>Please update mileage for each car</p>
            <Table striped bordered hover size="sm" >
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
                            <td >{car.regNumber}</td>
                            <td>{car.driver}</td>
                            <td>{car.carBrand}</td>
                            <td >{car.carModel}</td>
                            <td >{car.mileage}</td>
                            <td style={{ ...car.colorMileage }}>{car.technicalService}</td>
                            <td style={{ ...car.colorVehicleInspection }}>{car.vehicleInspection}</td>
                            <td style={{ ...car.colorCarLiability }}>{car.carLiability}</td>
                            <td style={{ ...car.colorCasco }}>{car.casco}</td>
                            <td style={{ ...car.colorVignette }}>{car.vignette}</td>
                            <td> <Link to={`/cars/${car._id}`} className="btn btn-primary">Details</Link></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {noResult && (<p className={styles.myCar} >You don&#39;t have registered cars.</p >)
            }
        </>
    )
}