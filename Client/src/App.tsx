import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard"; // Import Dashboard component
import { Auth } from "./pages/auth"; // Import Auth component
import { FinancialRecordsProvider } from "./contexts/financial-record-context"; // Import FinancialRecordsProvider component
import ErrorBoundary from "./components/ErrorBoundary"; // Import ErrorBoundary component

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Wrap the Routes component with the ErrorBoundary component */}
        <ErrorBoundary>
          <Routes>
            {/* Default route */}
            <Route
              path="/"
              element={
                <FinancialRecordsProvider>
                  <Dashboard />
                </FinancialRecordsProvider>
              }
            />
            {/* Authentication page route */}
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
