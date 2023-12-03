/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Carousel from 'react-bootstrap/Carousel';
import Image1 from './Cars';
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css'; 
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function CarouselTest(games) {

    return (
        <Carousel>
      {games.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image.src}
            alt={image.text}
          />
          <Carousel.Caption>
            <h3>{image.text}</h3>
            <p>{image.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    )
}