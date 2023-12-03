import { useNavigate } from 'react-router-dom';

import * as carService from '../../services/carService';

export default function CarCreate() {
    const navigate = useNavigate();

    const createCarSubmitHandler = async (e) => {
        e.preventDefault();

        const carData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await carService.create(carData);

            navigate('/');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createCarSubmitHandler}>
                <div className="container">
                    <h1>Create Car</h1>
                    <label htmlFor="reg-number">Registration number:</label>
                    <input type="text" id="reg-number" name="regNumber" placeholder="Enter registration number of the car..." />

                    <label htmlFor="car-brand">Car brand:</label>
                    <input type="text" id="car-brand" name="carBrand" placeholder="Enter car brand..." />

                    <label htmlFor="car-model">Car model:</label>
                    <input type="text" id="car-model" name="carModel" placeholder="Enter car model..." />

                    <label htmlFor="mileage">Mileage:</label>
                    <input type="number" id="mileage" name="mileage" min="1" placeholder="1" />

                    <label htmlFor="car-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="vehicle-inspection">Vehicle inspection:</label>
                    <input type="date" id="vehicle-inspection" name="vehicleInspection" min="1" placeholder="1" />

                    <label htmlFor="technical-service">Тechnical service:</label>
                    <input type="number" id="technical-service" name="technicalService" min="1" placeholder="1" />

                    <label htmlFor="car-liability">Car liability:</label>
                    <input type="date" id="car-liability" name="carLiability" min="1" placeholder="1" />

                    <label htmlFor="casco ">Casco:</label>
                    <input type="date" id="casco " name="casco" min="1" placeholder="1" />

                    <label htmlFor="vignette ">Vignette:</label>
                    <input type="date" id="vignette " name="vignette" min="1" placeholder="1" />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Car" />
                </div>
            </form>
        </section>
    );
}
