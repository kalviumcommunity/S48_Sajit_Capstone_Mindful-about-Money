import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from "react";
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service here
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (_jsxs("div", { style: { textAlign: "center", marginTop: "20px" }, children: [_jsx("h1", { children: "Something went wrong." }), _jsx("p", { children: this.state.error?.message || "Please try again later." })] }));
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
