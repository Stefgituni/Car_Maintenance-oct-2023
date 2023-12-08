import { useNavigate, useParams } from 'react-router-dom';

import * as carService from '../../services/carService';
import { useEffect, useState } from 'react';

export default function CarEdit() {
    const navigate = useNavigate();
    const { carId } = useParams();
    const [car, setCar] = useState({
        regNumber: '',
        carBrand: '',
        carModel: '',
        mileage: '',
        driver: '',
        email: '',
        imageUrl: '',
        vehicleInspection: '',
        technicalService: '',
        carLiability: '',
        casco: '',
        vignette: '',
        summary: '',
    });

    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCar(result);
            });
    }, [carId]);

    const editCarSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await carService.edit(carId, values);

            navigate('/cars');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const onChange = (e) => {
        setCar(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={editCarSubmitHandler}>
                <div className="container">
                    <h1>Create Car</h1>
                    <label htmlFor="reg-number">Registration number:</label>
                    <input type="text" id="reg-number" name="regNumber" value={car.regNumber} onChange={onChange} placeholder="Enter registration number of the car..." />

                    <label htmlFor="car-brand">Car brand:</label>
                    <input type="text" id="car-brand" name="carBrand" value={car.carBrand} onChange={onChange} placeholder="Enter car brand..." />

                    <label htmlFor="car-model">Car model:</label>
                    <input type="text" id="car-model" name="carModel" value={car.carModel} onChange={onChange} placeholder="Enter car model..." />

                    <label htmlFor="mileage">Mileage:</label>
                    <input type="number" id="mileage" name="mileage" value={car.mileage} onChange={onChange} min="1" placeholder="1" />
                   
                    <label htmlFor="driver">Driver:</label>
                    <input type="text" id="driver" name="driver" value={car.driver} onChange={onChange} placeholder="Driver" />
                    
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" value={car.email} onChange={onChange} placeholder="Email" />

                    <label htmlFor="car-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={car.imageUrl} onChange={onChange} placeholder="Upload a photo of the car..." />

                    <label htmlFor="vehicle-inspection">Vehicle inspection:</label>
                    <input type="date" id="vehicle-inspection" name="vehicleInspection" value={car.vehicleInspection} onChange={onChange} min="1" placeholder="1" />

                    <label htmlFor="technical-service">Тechnical service:</label>
                    <input type="number" id="technical-service" name="technicalService" value={car.technicalService} onChange={onChange} min="1" placeholder="1" />

                    <label htmlFor="car-liability">Car liability:</label>
                    <input type="date" id="car-liability" name="carLiability" value={car.carLiability} onChange={onChange} min="1" placeholder="1" />

                    <label htmlFor="casco ">Casco:</label>
                    <input type="date" id="casco" name="casco" value={car.casco} onChange={onChange} min="1" placeholder="1" />

                    <label htmlFor="vignette ">Vignette:</label>
                    <input type="date" id="vignette " name="vignette" value={car.vignette} onChange={onChange} min="1" placeholder="1" />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={car.summary} onChange={onChange} ></textarea>
                    <input className="btn submit" type="submit" value="Edit Car" />
                </div>
            </form>
        </section>
    );
}
