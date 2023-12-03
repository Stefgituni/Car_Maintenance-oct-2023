import { useEffect, useState } from 'react';
import CarView from "../car-view/CarView";
import * as carService from '../../services/carService';

import { Carousel } from 'react-bootstrap';
import CarouselItemCar from '../carousel/CarouselItemCar'
import "../../../public/styles/home.css"


export default function Home() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        carService.getAll()
            .then(result => setCars(result));
    }, []);


    return (


        <section >
             <p7 className="home-cars">All Cars</p7>
            <Carousel>
                {cars.map((cars) => (
                    CarouselItemCar (cars)
                ))}
            </Carousel>
            {/* <CarView /> */}

        </section>
       
    )
}