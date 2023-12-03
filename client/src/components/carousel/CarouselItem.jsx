/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

// export default function CarouselItem({
//     index,
//     title,
//     category,
//     summary,
//     imageUrl,
// }) {
//     return (
//         <Carousel.Item>
//             <img
//                 className="d-block w-10"
//                 src={imageUrl}
//                 alt={title}
//             />
//             <Carousel.Caption>
//                 <h3>{category}</h3>
//                 <p>{summary}</p>
//             </Carousel.Caption>
//         </Carousel.Item>
//     );
// }
// const CarouselItem = React.forwardRef(({ data }, ref) => {
//     return(
//     <Carousel.Item>
//       <img
//         className="d-block w-10"
//         src={data.image}
//         alt={data.text}
//         ref={ref} 
//       />
//       <Carousel.Caption>
//         <h3>{data.text}</h3>
//         <p>{data.caption}</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//   )});
//   CarouselItem.displayName = 'CarouselItem';

//   export default CarouselItem;


const CarouselItem1 = (data) => {
    // console.log(data.item.id);
    return (
        <Carousel.Item key={data.item.id}>
            <img
                className="d-block w-5"
                src={data.item.image}
                alt={data.item.text}
            // ref={ref} 
            />
            <Carousel.Caption>
                <h3>{data.item.text}</h3>
                <p>{data.item.caption}</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
};

export default CarouselItem1;


