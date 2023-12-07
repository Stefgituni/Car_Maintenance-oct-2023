/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import CarView from "../car-view/CarView";

const CarouselItemCar = (ownCars,username) => {
    return (
        <Carousel.Item key={ownCars._id}>
            {CarView(ownCars,username)}
        </Carousel.Item>
    )
};


export default CarouselItemCar;


