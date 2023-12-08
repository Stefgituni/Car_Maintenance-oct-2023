import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as carService from '../../services/carService';
import AuthContext from "../../contexts/authContext";
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

import "../../../public/styles/details.css";

export default function CarDetails() {
    const navigate = useNavigate();
    const {  userId } = useContext(AuthContext);
    const [car, setCar] = useState({});
    const { carId } = useParams();

    useEffect(() => {
        carService.getOne(carId)
            .then(setCar);
    }, [carId]);


    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${car.title}`);

        if (hasConfirmed) {
            await carService.remove(carId);

            navigate('/cars');
        }
    }

    return (
        <section id="car-details">
            <h1>Car Details</h1>
            <div className="info-section">
                <div className="car-header">
                    <img className="car-img" src={car.imageUrl} alt={car.carBrand} />
                    <h1>{car.carBrand} {car.carModel}</h1>
                    <span className="levels">Mileage: {car.mileage}</span>
                    <p className="type">{car.regNumber}</p>
                </div>

                <p className="text">{car.summary}</p>

                {userId === car._ownerId && (
                    <div className="buttons">
                        <Link to={pathToUrl(Path.CarEdit, { carId })} className="button">Edit</Link>
                        <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                    </div>
                )}
            </div>
            
        </section>
    );
}
