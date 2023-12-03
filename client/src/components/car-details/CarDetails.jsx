import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as carService from '../../services/carService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import reducer from './commentReducer';
import useForm from '../../hooks/useForm';
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

import "../../../public/styles/details.css";

export default function CarDetails() {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext);
    const [car, setCar] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);
    const { carId } = useParams();

    useEffect(() => {
        carService.getOne(carId)
            .then(setCar);

        commentService.getAll(carId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            });
    }, [carId]);

    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            carId,
            values.comment
        );

        newComment.owner = { email };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${car.title}`);

        if (hasConfirmed) {
            await carService.remove(carId);

            navigate('/cars');
        }
    }

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });

    return (
        <section id="car-details">
            <h1>Car Details</h1>
            <div className="info-section">
                <div className="car-header">
                    <img className="car-img" src={car.imageUrl} alt={car.carBrand} />
                    <h1>{car.carBrand} {car.carModel}</h1>
                    <span className="levels">Mileage: {car.mileage}</span>
                    <p className="type">{car.regNumber}</p>
                </div>

                <p className="text">{car.summary}</p>

                {/* <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div> */}

                {userId === car._ownerId && (
                    <div className="buttons">
                        <Link to={pathToUrl(Path.CarEdit, { carId })} className="button">Edit</Link>
                        <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                    </div>
                )}
            </div>

            {/* <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article> */}
        </section>
    );
}
