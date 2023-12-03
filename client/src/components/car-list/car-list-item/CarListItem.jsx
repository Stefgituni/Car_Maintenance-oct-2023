/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function CarListItem({
    // eslint-disable-next-line react/prop-types
    _id,
    mileage,
    casco,
    vignette,
    summary,
    imageUrl
}) {
    return (
        <div className="allCars">
            <div className="allCars-info">
                <img src={imageUrl} />
                <h6>{mileage}</h6>
                <h2>{casco}</h2>
                <Link to={`/cars/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}
