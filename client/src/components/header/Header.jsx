/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

export default function Header() {
    const {
        isAuthenticated,
        email,
    } = useContext(AuthContext);
    return (
        <>

            <header>
                <div className="main wrap">
                    {/* <h1><a href="/"><img src="images/logo.png" alt="" /></a></h1> */}
                    <h1><Link to="/"><img src="images/logo.png" alt="" /></Link></h1>
                    <p>Petar Petrov <span> +359 (88) 123456, petar.petrov@one.com</span></p>
                </div>
                <nav>
                    <ul className="menu">
                        <li className="current"><Link to="/" className="home"><img src="images/home.jpg" alt="" /></Link></li>
                        <li><Link to="/cars">All Cars</Link></li>

                        {isAuthenticated && (
                            <>
                                <li><Link to="/maintenance">Maintenance</Link></li>
                                <li><Link to="/mycars">My cars</Link></li>
                                <li><Link to="/logout">Logout</Link></li>
                                <li><Link to="/cars/create">Add New Car</Link></li>
                            </>
                        )}
                        {!isAuthenticated && (
                            <div id="guest">
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </div>
                        )}
                        <li><a href="/about">About</a></li>
                    </ul>
                    <div className="clear"></div>
                </nav>
            </header>
        </>
    )
}