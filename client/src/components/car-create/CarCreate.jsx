import { useNavigate } from 'react-router-dom';

import * as gameService from '../../services/gameService';

export default function GameCreate() {
    const navigate = useNavigate();
    
    const createGameSubmitHandler = async (e) => {
        e.preventDefault();

        const gameData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await gameService.create(gameData);

            navigate('/');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createGameSubmitHandler}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="reg-number">Registration number:</label>
                    <input type="text" id="reg-number" name="reg-number" placeholder="Enter registration number of the car..." />

                    <label htmlFor="car-brand">Car brand:</label>
                    <input type="text" id="car-brand" name="car-brand" placeholder="Enter car brand..." />

                    <label htmlFor="car-model">Car model:</label>
                    <input type="text" id="car-model" name="car-model" placeholder="Enter car model..." />

                    <label htmlFor="mileage">Mileage:</label>
                    <input type="number" id="mileage" name="mileage" min="1" placeholder="1" />

                    <label htmlFor="car-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="vehicle-inspection">Vehicle inspection:</label>
                    <input type="date" id="vehicle-inspection" name="vehicle-inspection" min="1" placeholder="1" />

                    <label htmlFor="technical-service">Тechnical service:</label>
                    <input type="number" id="technical-service" name="technical-service" min="1" placeholder="1"/>

                    <label htmlFor="car-liability">Car liability:</label>
                    <input type="date" id="car-liability" name="car-liability" min="1" placeholder="1" />

                    <label htmlFor="casco ">Casco:</label>
                    <input type="date" id="casco " name="casco " min="1" placeholder="1" />
                    
                    <label htmlFor="vignette ">Vignette:</label>
                    <input type="date" id="vignette " name="vignette " min="1" placeholder="1" />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    );
}
