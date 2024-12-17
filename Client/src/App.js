import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation, } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { Landing } from "./pages/landing-page";
import Contact from "./pages/contact";
import AboutDeveloper from "./pages/about-developer";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import ErrorBoundary from "./components/ErrorBoundary";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import { HomeIcon, ContactIcon, UserIcon, LayoutDashboardIcon, } from "lucide-react";
function PrivateRoute({ children }) {
    const { isSignedIn, isLoaded } = useUser();
    if (!isLoaded) {
        return _jsx("div", { children: "Loading..." });
    }
    return isSignedIn ? (_jsx(FinancialRecordsProvider, { children: children })) : (_jsx(Navigate, { to: '/auth', replace: true }));
}
function AppContent() {
    const location = useLocation();
    const { isSignedIn } = useUser();
    // Automatically redirect to dashboard if signed in and on root or auth page
    if (isSignedIn &&
        (location.pathname === "/" || location.pathname === "/auth")) {
        return _jsx(Navigate, { to: '/dashboard', replace: true });
    }
    return (_jsx("div", { className: 'app-container', children: _jsxs(ErrorBoundary, { children: [_jsxs("nav", { className: 'fixed top-0 left-0 w-full bg-gradient-to-r from-emerald-50 via-white to-cyan-50 bg-opacity-90 shadow-lg py-4 px-8 z-50 flex items-center justify-between', children: [_jsxs("div", { className: 'flex items-center space-x-4', children: [_jsx("img", { src: '/logo.png', alt: 'Mindful Money Logo', className: 'h-10 w-10' }), _jsx(Link, { to: '/', className: 'text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 tracking-tight hover:opacity-80 transition-opacity', children: "Mindful About Money" })] }), _jsxs("div", { className: 'flex items-center space-x-6', children: [_jsxs("div", { className: 'flex items-center space-x-4 bg-emerald-50 rounded-full p-1', children: [_jsx(SignedOut, { children: _jsxs(Link, { to: '/', className: `
                    flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300
                    ${location.pathname === "/"
                                                    ? "bg-emerald-600 text-white shadow-lg"
                                                    : "hover:bg-emerald-100 text-gray-700"}
                  `, children: [_jsx(HomeIcon, { className: `h-5 w-5 ${location.pathname === "/" ? "text-white" : "text-gray-500"}` }), _jsx("span", { className: 'text-sm font-medium', children: "Home" })] }) }), _jsx(SignedIn, { children: _jsxs(Link, { to: '/dashboard', className: `
                    flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300
                    ${location.pathname === "/dashboard"
                                                    ? "bg-emerald-600 text-white shadow-lg"
                                                    : "hover:bg-emerald-100 text-gray-700"}
                  `, children: [_jsx(LayoutDashboardIcon, { className: `h-5 w-5 ${location.pathname === "/dashboard"
                                                            ? "text-white"
                                                            : "text-gray-500"}` }), _jsx("span", { className: 'text-sm font-medium', children: "Dashboard" })] }) }), _jsxs(Link, { to: '/contact', className: `
                  flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300
                  ${location.pathname === "/contact"
                                                ? "bg-emerald-600 text-white shadow-lg"
                                                : "hover:bg-emerald-100 text-gray-700"}
                `, children: [_jsx(ContactIcon, { className: `h-5 w-5 ${location.pathname === "/contact"
                                                        ? "text-white"
                                                        : "text-gray-500"}` }), _jsx("span", { className: 'text-sm font-medium', children: "Contact" })] }), _jsxs(Link, { to: '/about-developer', className: `
                  flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300
                  ${location.pathname === "/about-developer"
                                                ? "bg-emerald-600 text-white shadow-lg"
                                                : "hover:bg-emerald-100 text-gray-700"}
                `, children: [_jsx(UserIcon, { className: `h-5 w-5 ${location.pathname === "/about-developer"
                                                        ? "text-white"
                                                        : "text-gray-500"}` }), _jsx("span", { className: 'text-sm font-medium', children: "Developer" })] })] }), _jsx("div", { className: 'bg-emerald-50 rounded-full p-1', children: _jsx(SignedIn, { children: _jsx(UserButton, { appearance: {
                                                elements: {
                                                    userButtonAvatarBox: "w-10 h-10 border-2 border-emerald-200 hover:border-emerald-400 transition-all",
                                                },
                                            } }) }) })] })] }), _jsx("div", { className: 'pt-24', children: _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(Landing, {}) }), _jsx(Route, { path: '/auth', element: _jsx(Auth, {}) }), _jsx(Route, { path: '/dashboard', element: _jsx(PrivateRoute, { children: _jsx(Dashboard, {}) }) }), _jsx(Route, { path: '/insights', element: _jsx("div", { className: 'text-center text-2xl text-gray-600 pt-16', children: "Insights Page (Coming Soon)" }) }), _jsx(Route, { path: '/contact', element: _jsx(Contact, {}) }), _jsx(Route, { path: '/about-developer', element: _jsx(AboutDeveloper, {}) })] }) })] }) }));
}
function App() {
    return (_jsx(Router, { children: _jsx(AppContent, {}) }));
}
export default App;
