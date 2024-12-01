import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { Auth } from './pages/auth'
import { FinancialRecordsProvider } from './contexts/financial-record-context'

function App() {

  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* This is the default route */}
          <Route
          path="/"
          element={
            <FinancialRecordsProvider>
            <Dashboard />
            </FinancialRecordsProvider>
          }
          />
          {/* This is the route for the authentication page */}
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
