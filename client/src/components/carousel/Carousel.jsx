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
        // <Accordion defaultActiveKey="0">
        //     <Accordion.Item eventKey="0">
        //         <Accordion.Header>Accordion Item #1</Accordion.Header>
        //         <Accordion.Body>
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        //             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        //             aliquip ex ea commodo consequat. Duis aute irure dolor in
        //             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        //             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        //             culpa qui officia deserunt mollit anim id est laborum.
        //         </Accordion.Body>
        //     </Accordion.Item>
        //     <Accordion.Item eventKey="1">
        //         <Accordion.Header>Accordion Item #2</Accordion.Header>
        //         <Accordion.Body>
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        //             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        //             aliquip ex ea commodo consequat. Duis aute irure dolor in
        //             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        //             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        //             culpa qui officia deserunt mollit anim id est laborum.
        //         </Accordion.Body>
        //     </Accordion.Item>
        // </Accordion>
        //----------------------------------------------------------------
        //     <Carousel>
        //     <Carousel.Item>
        //     <img
        //       className=" w-50"
        //       src={ExampleCarouselImage}
        //       alt="First slide"
        //     />
        //       <Carousel.Caption>
        //         <h3>First slide label</h3>
        //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //       </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //     <img
        //       className="d-block w-50"
        //       src={ExampleCarouselImage}
        //       alt="Second slide"
        //     />
        //       <Carousel.Caption>
        //         <h3>Second slide label</h3>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //       </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //     <img
        //       className="d-block w-50"
        //       src={ExampleCarouselImage}
        //       alt="Third slide"
        //     />
        //       <Carousel.Caption>
        //         <h3>Third slide label</h3>
        //         <p>
        //           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //         </p>
        //       </Carousel.Caption>
        //     </Carousel.Item>
        //   </Carousel>
        <Carousel>
            <Carousel.Item>
                <img src={imageUrl}  />
                <Carousel.Caption>
                    <h3>{title}</h3>
                    <p>{category}</p>
                    <Link to={`/games/${_id}`} className="details-button">Details</Link>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
                <Image1 text="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image1 text="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    )
}