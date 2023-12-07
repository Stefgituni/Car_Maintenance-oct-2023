import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import * as carService from '../../services/carService';

export default function Search(cars) {
console.log(cars);

    const searchCarSubmitHandler = async (e) => {
        e.preventDefault();

        const searchData = Object.fromEntries(new FormData(e.currentTarget));
        // console.log("searchData",{searchData});
        try {
            const result = await carService.search(searchData);
            return result;
            
        } catch (err) {
            // Error notification
            console.log(err);
        }
    
    }
    return (
        <div className="container mt-3">
            <form className="form-inline" style={{ display: 'flex', justifyContent: 'center' }} onSubmit={searchCarSubmitHandler}>
                {/* Search Criteria 1 */}
                <div className="form-group mx-2" style={{ display: 'flex', width: "1500px", height: "30px" }}>
                    {/* <label htmlFor="criteria1" className="sr-only">Reg number</label> */}
                    <input type="text" className="form-control" id="regNumber" name="regNumber" placeholder="Registration number" />
                </div>

                {/* Search Criteria 2 */}
                <div className="form-group mx-2" style={{ display: 'flex', width: "1500px", height: "30px" }}>
                    {/* <label htmlFor="criteria2" className="sr-only">Driver name</label> */}
                    <input type="text" className="form-control" id="carBrand" name="carBrand" placeholder="Car brand" />
                </div>

                {/* Search Criteria 3 */}
                <div className="form-group mx-2" style={{ display: 'flex', width: "1500px", height: "30px" }}>
                    {/* <label htmlFor="criteria3" className="sr-only">Driver names</label> */}
                    <input type="text" className="form-control" id="driver" name="driver" placeholder="Driver names" />
                </div>

                {/* Search Criteria 4 */}
                <div className="form-group mx-2" style={{ display: 'flex', width: "1500px", height: "30px" }}>
                    {/* <label htmlFor="car-model" className="sr-only">Car model</label> */}
                    <input type="text" className="form-control" id="carModel" name="carModel" placeholder="Car model" />
                </div>

                {/* Search Button */}
                <button type="submit" className="btn btn-outline-success">Search</button>
            </form>
        </div>
    );
};

