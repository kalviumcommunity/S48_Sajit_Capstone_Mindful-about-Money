import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { SignInButton, SignUpButton, SignedIn, SignedOut, } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { WalletIcon, TrendingUp, ChartBarIcon, CreditCardIcon, ChevronRightIcon, CheckCircleIcon, TrendingUpIcon, ShieldCheckIcon, } from "lucide-react";
const Landing = () => {
    return (_jsxs("div", { className: 'bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen overflow-x-hidden', children: [_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1 }, className: 'relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8', children: _jsxs("div", { className: 'grid grid-cols-1 md:grid-cols-2 gap-16 items-center', children: [_jsxs(motion.div, { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { duration: 0.8, type: "spring", stiffness: 50 }, className: 'space-y-8', children: [_jsxs("div", { className: 'relative', children: [_jsxs("h2", { className: 'text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 tracking-tight mb-6 leading-tight', children: ["Unlock Your Financial Zen", _jsx("span", { className: 'absolute -top-4 -right-4 text-xl bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full', children: "Beta" })] }), _jsx("p", { className: 'text-xl text-slate-600 font-medium tracking-wide', children: "Empower mindful budgeting, effortless expense tracking, and elevate financial literacy. Join a community pursuing conscious money management." })] }), _jsx("div", { className: 'grid grid-cols-2 gap-4', children: [
                                        { icon: CheckCircleIcon, text: "Smart Tracking" },
                                        { icon: TrendingUpIcon, text: "Growth Insights" },
                                        { icon: ShieldCheckIcon, text: "Secure Platform" },
                                        { icon: ChevronRightIcon, text: "Future-Ready" },
                                    ].map((feature, index) => (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, whileHover: { scale: 1.05 }, viewport: { once: true }, transition: { duration: 0.5 }, className: 'flex items-center space-x-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl shadow-sm hover:shadow-md transition-all', children: [_jsx(feature.icon, { className: 'h-6 w-6 text-emerald-600' }), _jsx("span", { className: 'text-sm text-slate-700', children: feature.text })] }, index))) }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6, duration: 0.5 }, className: 'flex items-center space-x-4', children: [_jsx(SignUpButton, { mode: 'modal', children: _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: 'bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/50', children: "Join Now" }) }), _jsx("span", { className: 'text-slate-500', children: "or" }), _jsx(SignInButton, { mode: 'modal', children: _jsx("button", { className: 'text-emerald-600 hover:text-emerald-800 font-medium underline-offset-4 hover:underline transition-colors', children: "Sign In" }) })] })] }), _jsxs(motion.div, { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { duration: 0.8, type: "spring", stiffness: 50 }, className: 'relative group', children: [_jsx("div", { className: 'absolute -inset-2 bg-emerald-400/20 rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-300 ease-out' }), _jsx("img", { src: 'src/assets/hero-illustration.jpg', alt: 'Mindful Money Illustration', className: 'w-full transform transition-all duration-500 hover:scale-105 hover:rotate-2 perspective-1000 hover:shadow-2xl rounded-3xl' }), _jsx("div", { className: 'absolute bottom-2 left-2 bg-white/70 px-2 py-1 rounded-md text-xs text-slate-600', children: "Image by Freepik" }), _jsx("div", { className: 'absolute -bottom-8 -right-8 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg', children: _jsxs("div", { className: 'flex items-center space-x-3', children: [_jsx("div", { className: 'bg-emerald-100 p-2 rounded-full', children: _jsx(CheckCircleIcon, { className: 'h-6 w-6 text-emerald-600' }) }), _jsxs("div", { children: [_jsx("p", { className: 'text-sm font-semibold text-slate-800', children: "100% Data Privacy" }), _jsx("p", { className: 'text-xs text-slate-500', children: "Encrypted & Secure" })] })] }) })] })] }) }), _jsx(motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: 'bg-white/10 backdrop-blur-xl py-24 px-4 sm:px-6 lg:px-8', children: _jsxs("div", { className: 'max-w-7xl mx-auto', children: [_jsxs("div", { className: 'text-center mb-16', children: [_jsx("h2", { className: 'text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-4', children: "Powerful Features" }), _jsx("p", { className: 'text-xl text-slate-600 max-w-3xl mx-auto', children: "Unlock financial insights with our comprehensive tools" })] }), _jsx("div", { className: 'grid md:grid-cols-3 gap-8', children: [
                                {
                                    icon: WalletIcon,
                                    title: "Smart Tracking",
                                    description: "Automated income and expense categorization with AI-powered insights.",
                                    color: "bg-emerald-100",
                                    textColor: "text-emerald-600",
                                },
                                {
                                    icon: ChartBarIcon,
                                    title: "Visual Analytics",
                                    description: "Interactive dashboards that transform complex data into clear visuals.",
                                    color: "bg-purple-100",
                                    textColor: "text-purple-600",
                                },
                                {
                                    icon: CreditCardIcon,
                                    title: "Financial Health",
                                    description: "Comprehensive net worth and spending trend analysis.",
                                    color: "bg-blue-100",
                                    textColor: "text-blue-600",
                                },
                            ].map((feature, index) => (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, whileHover: { scale: 1.05 }, viewport: { once: true }, transition: { duration: 0.5 }, className: 'relative group', children: [_jsx("div", { className: 'absolute -inset-1 bg-emerald-400/20 rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-300 ease-out' }), _jsxs("div", { className: `bg-white/80 backdrop-blur-sm p-6 rounded-3xl space-y-4
                  transform transition-all duration-300 border border-emerald-50
                  hover:shadow-2xl relative overflow-hidden`, children: [_jsx("div", { className: `${feature.color} ${feature.textColor} p-3 rounded-xl inline-block`, children: _jsx(feature.icon, { className: 'h-8 w-8' }) }), _jsx("h3", { className: 'text-xl font-bold text-slate-800', children: feature.title }), _jsx("p", { className: 'text-slate-600', children: feature.description }), _jsx("div", { className: 'absolute bottom-0 left-0 w-full h-1 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left' })] })] }, index))) })] }) }), _jsxs(motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: 'py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden', children: [_jsx("div", { className: 'absolute inset-0 bg-emerald-50/30 -skew-y-6 z-0' }), _jsxs("div", { className: 'max-w-7xl mx-auto relative z-10', children: [_jsxs("div", { className: 'text-center mb-16', children: [_jsx("h2", { className: 'text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-4', children: "How It Works" }), _jsx("p", { className: 'text-xl text-slate-600 max-w-3xl mx-auto', children: "Simple steps to transform your financial management" })] }), _jsx("div", { className: 'grid md:grid-cols-3 gap-8 mb-16', children: [
                                    {
                                        step: "1",
                                        title: "Log Transactions",
                                        description: "Effortlessly input your financial data with intuitive categorization.",
                                        icon: WalletIcon,
                                    },
                                    {
                                        step: "2",
                                        title: "Visualize Insights",
                                        description: "Explore interactive graphs and comprehensive financial overviews.",
                                        icon: ChartBarIcon,
                                    },
                                    {
                                        step: "3",
                                        title: "Track Progress",
                                        description: "Monitor your financial growth and make informed decisions.",
                                        icon: TrendingUp,
                                    },
                                ].map((item, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: {
                                        duration: 0.6,
                                        delay: index * 0.2,
                                    }, className: 'bg-white/70 backdrop-blur-sm p-6 rounded-2xl text-center space-y-4\n                  shadow-md hover:shadow-xl transition-all duration-300\n                  border border-emerald-50/50 hover:border-emerald-100', children: [_jsx("div", { className: 'bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4', children: _jsx(item.icon, { className: 'w-8 h-8 text-emerald-600' }) }), _jsx("h3", { className: 'text-xl font-bold text-slate-800', children: item.title }), _jsx("p", { className: 'text-slate-600', children: item.description })] }, index))) }), _jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.7 }, viewport: { once: true }, className: 'relative grid md:grid-cols-2 gap-8 items-center\n              bg-white/60 backdrop-blur-sm rounded-3xl p-8\n              shadow-xl border border-emerald-50/50\n              overflow-hidden group', children: [_jsxs("div", { className: 'space-y-6 z-10', children: [_jsx("h3", { className: 'text-3xl font-bold text-slate-800', children: "Comprehensive Financial Tracking" }), _jsx("p", { className: 'text-slate-600 text-lg', children: "Our intuitive platform transforms complex financial data into clear, actionable insights. From transaction logging to advanced analytics, we simplify your financial journey." }), _jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: _jsx("button", { className: 'bg-emerald-600 text-white px-6 py-3 rounded-full\n                  hover:bg-emerald-700 transition-colors shadow-lg', children: "Start Your Financial Journey" }) })] }), _jsxs("div", { className: 'relative', children: [_jsx("div", { className: 'absolute -inset-4 bg-emerald-400/10 rounded-3xl\n                group-hover:scale-105 transition-transform duration-300 ease-out -z-10' }), _jsx("img", { src: '/src/assets/process-illustration-2.jpg', alt: 'Finance Tracking Process', className: 'rounded-2xl shadow-2xl\n                  transform transition-all duration-300\n                  group-hover:scale-105 group-hover:rotate-1\n                  perspective-1000' }), _jsx("div", { className: 'absolute bottom-2 right-2 bg-white/70 px-2 py-1 rounded-md text-xs text-slate-600', children: "Image by Freepik" })] })] })] })] }), _jsx("footer", { className: 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16 px-4 sm:px-6 lg:px-8', children: _jsxs("div", { className: 'max-w-7xl mx-auto grid md:grid-cols-4 gap-32', children: [_jsxs("div", { className: 'space-y-4', children: [_jsx("h3", { className: 'text-2xl font-bold mb-4', children: "Mindful About Money" }), _jsx("p", { className: 'text-emerald-100', children: "Simplifying personal finance tracking for everyone." })] }), _jsxs("div", { children: [_jsx("h4", { className: 'font-semibold mb-4', children: "Quick Links" }), _jsx("ul", { className: 'space-y-2', children: ["Dashboard", "About", "Contact"].map((link) => (_jsx("li", { children: _jsx("a", { href: `/${link.toLowerCase()}`, className: 'hover:text-emerald-100 transition-colors', children: link }) }, link))) })] }), _jsxs("div", { children: [_jsx("h4", { className: 'font-semibold mb-4', children: "Legal" }), _jsx("ul", { className: 'space-y-2', children: [
                                        {
                                            name: "Privacy Policy",
                                            content: `
                    1. Data Collection: We collect minimal personal information
                    2. User Data Protection: Encrypted storage and secure handling
                    3. No Third-Party Sharing: Your financial data remains private
                    4. Transparent Practices: Clear communication about data use
                  `,
                                        },
                                        {
                                            name: "Terms of Service",
                                            content: `
                    1. User Responsibilities: Accurate financial reporting
                    2. Service Usage: Personal finance tracking only
                    3. Account Security: Maintain confidentiality of login credentials
                    4. Limitation of Liability: Financial advice is suggestive, not definitive
                  `,
                                        },
                                        {
                                            name: "Cookie Policy",
                                            content: `
                    1. Essential Cookies: Used for app functionality
                    2. No Tracking Cookies: Minimal browser storage
                    3. User Consent: Transparent cookie usage
                    4. Data Privacy: No personal data stored in cookies
                  `,
                                        },
                                    ].map((link) => (_jsx("li", { children: _jsx("a", { href: '#', className: 'hover:text-emerald-100 transition-colors', title: link.content, children: link.name }) }, link.name))) })] }), _jsxs("div", { children: [_jsx("h4", { className: 'font-semibold mb-4', children: "Connect" }), _jsx("div", { className: 'flex space-x-4 mb-4', children: [
                                        { name: "Twitter", url: "https://twitter.com/tednotswarley" },
                                        { name: "LinkedIn", url: "https://linkedin.com/in/heysajit" },
                                        { name: "GitHub", url: "https://github.com/maverickOG" },
                                    ].map((social) => (_jsx("a", { href: social.url, target: '_blank', rel: 'noopener noreferrer', className: 'text-white hover:text-emerald-100 transition-colors', children: social.name }, social.name))) }), _jsxs("p", { className: 'text-sm text-emerald-100', children: ["\u00A9 ", new Date().getFullYear(), " Mindful About Money. All rights reserved."] })] })] }) })] }));
};
const Auth = () => {
    return (_jsxs("div", { className: "sign-in-container", children: [_jsx(SignedIn, { children: _jsx(Navigate, { to: "/Dashboard" }) }), _jsxs(SignedOut, { children: [_jsx(SignInButton, { mode: "modal" }), _jsx(SignUpButton, { mode: "modal" })] })] }));
};
export { Landing, Auth };
