/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import Path from './paths';

import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import CarCreate from './components/car-create/CarCreate';
import CarList from './components/car-list/CarList';
import CarDetails from './components/car-details/CarDetails';
import CarEdit from './components/car-edit/CarEdit';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Maintanence from './components/maintenance/Maintenance';
import ErrorBoundary from './components/ErrorBoundary';
import AuthGuard from './components/guards/AuthGuard';

function App() {
	return (
		<ErrorBoundary>
		<AuthProvider>
			<div id="box">
				<Header />

				<Routes>
					<Route path={Path.Home} element={<Home />} />
					<Route path="/cars" element={<CarList />} />
					<Route path="/maintenance" element={<Maintanence />}/>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/cars/:carId" element={<CarDetails />} />

					<Route element={<AuthGuard />}>
						<Route path={Path.CarCreate} element={<CarCreate />} />
						<Route path={Path.CarEdit} element={<CarEdit />} />
						<Route path={Path.Logout} element={<Logout />} />
					</Route>
				</Routes>
				<Footer />
			</div>
		</AuthProvider>
	</ErrorBoundary>

	)
}

export default App
