/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import CarView from "../car-view/CarView";

const CarouselItemCar = (data) => {
    console.log(data);
    return (
        <Carousel.Item key={data._id}>
            {/* <img
                className="mx-auto d-block"
                width="500" height="300"
                src={data.imageUrl}
                alt={data.carBrand}
            /> */}
            {/* <CarView key={data._id}/> */}
            {CarView(data)}
            {/* <Carousel.Caption>
                <h3>{data.carBrand} {data.carModel}</h3>
                <p>{data.summary}</p>
                <Link to={`/cars/${data._id}`} className="">Details</Link>
            </Carousel.Caption> */}
        </Carousel.Item>
    )
};


export default CarouselItemCar;


