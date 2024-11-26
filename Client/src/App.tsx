import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { Auth } from './pages/auth'

function App() {

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* This is the default route */}
          <Route path="/auth" element={<Auth />} /> {/* This is the route for the authentication page */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
