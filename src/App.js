import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import InfoPage from './pages/InfoPage'
import MoodsPage from './pages/MoodsPage'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="/info" element={<InfoPage />} />
						<Route path="/Moods" element={<MoodsPage />} />
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
