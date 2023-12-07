/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import * as carService from '../../services/carService';

import { Carousel } from 'react-bootstrap';
import CarouselItemCar from '../carousel/CarouselItemCar'
import "../../../public/styles/home.css"

import withAuth from "../../HOC/withAuth";


import AuthContext from "../../contexts/authContext";
import { useContext, } from "react";

// export default function Home() {
function Home() {
    // const [cars, setCars] = useState([]);
    // useEffect(() => {
    //     carService.getAll()
    //         .then(result => setCars(result));
    // }, []);
    const { username, email, userId } = useContext(AuthContext);
    const [ownCars, setOwnCars] = useState([]);
    useEffect(() => {
        carService.getOwnedCars(userId)
            .then(result => setOwnCars(result))
            .catch(err => {
                console.log(err);
            });
    }, []);
    console.log(username, email);
    return (
        <section >
            <p className="home-cars">All Cars</p>
            <Carousel>
                {ownCars.map((car) => (
                    CarouselItemCar(car, username)
                ))}
            </Carousel>

        </section>

    )
}
const EnhancedHome = withAuth(Home);

export default EnhancedHome;