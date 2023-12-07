/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import * as carService from '../../services/carService';
import CarListItem from './car-list-item/CarListItem';

import "../../../public/styles/all-cars.css"
import CarListCard from './car-list-item/CarListCard';

export default function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then(result => setCars(result))
            .catch(err => {
                console.log(err);
            });
    }, []);
    // let car2 = cars[0]
    // console.log(car2)
    return (
        <section id="catalog1-page">
            {/* <h1>All Cars</h1> */}
            <p className="text-center mt-4">Car List</p>
            {/* {cars.map(car => (
                <CarListCard key={car._id} {...car} />
            ))} */}
            <div className="container mt-5">
                <div className="row">
                    {cars.map((car, index) => (
                        // <div key={index} className="col-md-6 mb-4">
                        <CarListCard key={index} {...car} />
                        // </div>
                    ))}
                </div>
            </div>

            {cars.length === 0 && (
                <h3 className="no-cars">No cars yet</h3>
            )}
        </section>
    );
}
