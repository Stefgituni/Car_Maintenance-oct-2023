/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Carousel from 'react-bootstrap/Carousel';
import Image1 from './Cars';
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css'; 
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function CarouselTest({
    _id,
    title,
    category,
    imageUrl,
}) {

    return (
        <Carousel>
            <Carousel.Item>
                <img src={imageUrl} />
                <Carousel.Caption>
                    <h3>{title}</h3>
                    <p>{category}</p>
                    <Link to={`/cars/${_id}`} className="details-button">Details</Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}