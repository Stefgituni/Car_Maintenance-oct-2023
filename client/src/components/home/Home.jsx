/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import * as carService from '../../services/carService';

import { Carousel } from 'react-bootstrap';
import CarouselItemCar from '../carousel/CarouselItemCar'
import "../../../public/styles/home.css"

import withAuth from "../../HOC/withAuth";


import AuthContext from "../../contexts/authContext";
import { useContext, } from "react";

function Home() {
   
    const { userId } = useContext(AuthContext);
    const [ownCars, setOwnCars] = useState([]);
    useEffect(() => {
        carService.getOwnedCars(userId)
            .then(result => setOwnCars(result))
            .catch(err => {
                console.log(err);
            });
    }, []);


    return (
        <section >
            <p className="home-cars">All Cars</p>
            <Carousel>
                {ownCars.map((cars) => (
                    CarouselItemCar (cars)
                ))}
            </Carousel>

        </section>

    )
}
const EnhancedHome = withAuth(Home);

export default EnhancedHome;