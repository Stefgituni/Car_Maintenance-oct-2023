/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import Path from './paths';

import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Maintanence from './components/maintenance/Maintenance';
import ErrorBoundary from './components/ErrorBoundary';
import AuthGuard from './components/guards/AuthGuard';

function App() {
	return (
		// <div className="bg">

		// 	<Header />
		// 	<Routes>
		// 		<Route path="/" element={<Home />} />
		// 		<Route path="/maintenance" element={<Maintanence />} />
		// 		<Route path="/login" element={<Login />} />
        //         {/* <Route path="/register" element={<Register />} /> */}

		// 	</Routes>
		// 	<Footer />

		// </div>

		<ErrorBoundary>
		<AuthProvider>
			<div id="box">
				<Header />

				<Routes>
					<Route path={Path.Home} element={<Home />} />
					{/* <Route path="/games" element={<GameList />} /> */}
					<Route path="/maintenance" element={<Maintanence />}/>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					{/* <Route path="/games/:gameId" element={<GameDetails />} /> */}

					<Route element={<AuthGuard />}>
						{/* <Route path="/games/create" element={<GameCreate />} /> */}
						{/* <Route path={Path.GameEdit} element={<GameEdit />} /> */}
						<Route path={Path.Logout} element={<Logout />} />
					</Route>
				</Routes>
			</div>
		</AuthProvider>
	</ErrorBoundary>

	)
}

export default App
