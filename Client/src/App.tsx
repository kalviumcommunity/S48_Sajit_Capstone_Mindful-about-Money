import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import ErrorBoundary from "./components/ErrorBoundary";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import {
  HomeIcon,
  WalletIcon,
  ChartPieIcon,
  LayoutDashboardIcon,
} from "lucide-react";

function App() {
  const [activeRoute, setActiveRoute] = useState("/");

  return (
    <Router>
      <div className='app-container'>
        <ErrorBoundary>
          {/* Enhanced Navbar */}
          <nav className='fixed top-0 left-0 w-full bg-gradient-to-r from-emerald-50 via-white to-cyan-50 bg-opacity-90 shadow-lg py-4 px-8 z-50 flex items-center justify-between'>
            {/* Logo and Brand */}
            <div className='flex items-center space-x-4'>
              <img
                src='/logo.png'
                alt='Mindful Money Logo'
                className='h-10 w-10'
              />
              <h1 className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 tracking-tight'>
                Mindful About Money
              </h1>
            </div>

            {/* Navigation Links */}
            <div className='flex items-center space-x-6'>
              <div className='flex items-center space-x-4 bg-emerald-50 rounded-full p-1'>
                {[
                  {
                    path: "/",
                    icon: (
                      <LayoutDashboardIcon
                        className={`h-5 w-5 ${
                          activeRoute === "/"
                            ? "text-white" // Changed to white when active
                            : "text-gray-500"
                        }`}
                      />
                    ),
                    label: "Dashboard",
                  },
                  {
                    path: "/insights",
                    icon: (
                      <ChartPieIcon
                        className={`h-5 w-5 ${
                          activeRoute === "/insights"
                            ? "text-white" // Changed to white when active
                            : "text-gray-500"
                        }`}
                      />
                    ),
                    label: "Insights",
                  },
                ].map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    onClick={() => setActiveRoute(route.path)}
                    className={`
                      flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300
                      ${
                        activeRoute === route.path
                          ? "bg-emerald-600 text-white shadow-lg"
                          : "hover:bg-emerald-100 text-gray-700"
                      }
                    `}
                  >
                    {route.icon}
                    <span className='text-sm font-medium'>{route.label}</span>
                  </Link>
                ))}
              </div>

              {/* User Button */}
              <div className='bg-emerald-50 rounded-full p-1'>
                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox:
                          "w-10 h-10 border-2 border-emerald-200 hover:border-emerald-400 transition-all",
                      },
                    }}
                  />
                </SignedIn>
              </div>
            </div>
          </nav>

          {/* Offset for navbar */}
          <div className='pt-24'>
            <Routes>
              <Route
                path='/'
                element={
                  <FinancialRecordsProvider>
                    <Dashboard />
                  </FinancialRecordsProvider>
                }
              />
              <Route path='/auth' element={<Auth />} />
              {/* Optional: Add an Insights route if needed */}
              <Route
                path='/insights'
                element={
                  <div className='text-center text-2xl text-gray-600 pt-16'>
                    Insights Page (Coming Soon)
                  </div>
                }
              />
            </Routes>
          </div>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
