/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from 'react';
import * as carService from '../../services/carService';

import { Carousel } from 'react-bootstrap';
import CarouselItemCar from '../carousel/CarouselItemCar'
import "../../../public/styles/home.css"

import withAuth from "../../HOC/withAuth";
import AuthContext from "../../contexts/authContext";

function Home() {
    const { isAuthenticated } = useContext(AuthContext);
    const { userId } = useContext(AuthContext);
    const [ownCars, setOwnCars] = useState([]);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getOwnedCars(userId)
            .then(result => setOwnCars(result))
            .catch(err => {
                console.log(err);
            });
    }, []);
    useEffect(() => {
        carService.getAll()
            .then(result => setCars(result))
            .catch(err => {
                console.log(err);
            });
    }, []);


    return (
        <section >
            {isAuthenticated && (
                <>
                    <p className="home-cars">All My Cars</p>
                    <Carousel>
                        {ownCars.map((cars) => (
                            CarouselItemCar(cars)
                        ))}
                    </Carousel>
                </>
                )}
            {!isAuthenticated && (
                <>
                <p className="home-cars">All Cars</p>
                <Carousel>
                    {cars.map((cars) => (
                        CarouselItemCar(cars)
                    ))}
                </Carousel>
                </>
                )}

        </section>

    )
}
const EnhancedHome = withAuth(Home);

export default EnhancedHome;