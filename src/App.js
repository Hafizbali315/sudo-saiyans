import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import HomePage from './pages/Home'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="" element={<Layout />}>
						<Route index element={<HomePage />} />
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
