import { useEffect, useState } from 'react';

import * as carService from '../../services/carService';
import CarListItem from './car-list-item/CarListItem';

import "../../../public/styles/all-cars.css"

export default function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then(result => setCars(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Cars</h1>

            {cars.map(car => (
                <CarListItem key={car._id} {...car} />
            ))}

            {cars.length === 0 && (
                <h3 className="no-cars">No cars yet</h3>
            )}
        </section>
    );
}
