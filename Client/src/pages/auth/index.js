import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
export const Auth = () => {
    return (_jsx("div", { className: 'sign-in-container flex flex-col items-center justify-center space-y-4 p-8', children: _jsxs("div", { className: 'text-center', children: [_jsx("h2", { className: 'text-2xl font-bold mb-4', children: "Welcome to Mindful Money" }), _jsx("p", { className: 'mb-6', children: "Please sign in or create an account to continue" }), _jsxs("div", { className: 'space-x-4', children: [_jsx(SignInButton, { mode: 'modal' }), _jsx(SignUpButton, { mode: 'modal' })] })] }) }));
};
