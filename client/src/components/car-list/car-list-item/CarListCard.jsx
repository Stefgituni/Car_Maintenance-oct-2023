/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function CarListCard({
  _id,
  regNumber,
  carBrand,
  carModel,
  mileage,
  imageUrl,
  vehicleInspection,
  technicalService,
  carLiability,
  casco,
  vignette,
  summary,
  index,
}) {
  // console.log(casco, vignette)

  return (
    // <div className="col-md-5 mb-5 d-flex justify-content-center">
    <div className="col-md-3 mb-1">
      <div className="card h-100 d-flex flex-column">
        <img src={imageUrl} className="card-img-top img-fluid" alt={carBrand} style={{ objectFit: 'cover', height: '200px' }} />
        <div className="card-body text-center d-flex flex-column">
          <h5 className="card-title">{carBrand} {carModel}</h5>
          <ul className="list-group list-group-flush flex-grow-1">
            <li className="list-group-item"><strong>Registration Number:</strong> {regNumber}</li>
            <li className="list-group-item"><strong>Car Brand:</strong> {carBrand}</li>
            <li className="list-group-item"><strong>Car Model:</strong> {carModel}</li>
            <li className="list-group-item"><strong>Mileage:</strong> {mileage}</li>
            <li className="list-group-item"><strong>Vehicle Inspection:</strong> {vehicleInspection}</li>
            <li className="list-group-item"><strong>Technical Service:</strong> {technicalService}</li>
            <li className="list-group-item"><strong>Car Liability:</strong> {carLiability}</li>
            <li className="list-group-item"><strong>Casco:</strong> {casco}</li>
            <li className="list-group-item"><strong>Vignette:</strong> {vignette}</li>
            <li className="list-group-item"><strong>Summary:</strong> {summary}</li>
            <div className="mt-auto">
              <Link to={`/cars/${_id}`} className="btn btn-primary">Details</Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CarListCard;