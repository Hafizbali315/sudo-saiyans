import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import HomePage from './pages/Home'
import InfoPage from './pages/Info'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="/info" element={<InfoPage />} />
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
