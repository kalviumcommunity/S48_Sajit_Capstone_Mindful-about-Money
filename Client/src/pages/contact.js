import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import axios from "axios"; // Make sure to install axios: npm install axios
import { Twitter, Linkedin, Github, Mail, MapPin } from "lucide-react";
const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submissionStatus, setSubmissionStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const socialLinks = [
        {
            name: "Twitter",
            url: "https://twitter.com/tednotswarley",
            icon: Twitter,
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/heysajit",
            icon: Linkedin,
        },
        {
            name: "GitHub",
            url: "https://github.com/maverickOG",
            icon: Github,
        },
    ];
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus("sending");
        setErrorMessage("");
        try {
            // Adjust the URL to match your backend endpoint
            const response = await axios.post("http://localhost:3001/contact/send", formData);
            console.log(response.data);
            setSubmissionStatus("success");
            // Reset form
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }
        catch (error) {
            setSubmissionStatus("error");
            // More explicit error handling
            if (axios.isAxiosError(error)) {
                // Check if error.response exists and has a data property
                const errorDetails = error.response?.data;
                // Convert error to a string, handling different possible error structures
                const errorMsg = typeof errorDetails === "object"
                    ? JSON.stringify(errorDetails)
                    : errorDetails?.error || error.message || "Failed to send message";
                setErrorMessage(String(errorMsg));
            }
            else {
                // Ensure error is converted to a string
                setErrorMessage(String(error));
            }
            console.error("Submission error:", error);
        }
    };
    return (_jsx("div", { className: 'bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen overflow-x-hidden', children: _jsxs("div", { className: 'max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8', children: [_jsxs("div", { className: 'text-center mb-16', children: [_jsx("h1", { className: 'text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-6', children: "Get In Touch" }), _jsx("p", { className: 'text-xl text-slate-600 max-w-2xl mx-auto', children: "Have a question or want to collaborate? I'd love to hear from you." })] }), _jsxs("div", { className: 'grid md:grid-cols-2 gap-16', children: [_jsxs("div", { className: 'bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-emerald-50', children: [_jsxs("div", { className: 'mb-8 text-center', children: [_jsx("img", { src: '/src/assets/about developer/developer2.png', alt: 'Sajit Profile', className: 'w-64 h-64 object-cover rounded-full mx-auto mb-6 border-4 border-emerald-100 shadow-lg' }), _jsx("h2", { className: 'text-3xl font-bold text-slate-800', children: "Sajit" }), _jsx("p", { className: 'text-slate-600', children: "Founder, Mindful About Money" })] }), _jsxs("div", { className: 'space-y-4', children: [_jsxs("div", { className: 'flex items-center space-x-4', children: [_jsx(Mail, { className: 'text-emerald-600 h-6 w-6' }), _jsx("a", { href: 'mailto:heysajit@outlook.com', className: 'text-slate-700 hover:text-emerald-600 transition-colors', children: "heysajit@outlook.com" })] }), _jsxs("div", { className: 'flex items-center space-x-4', children: [_jsx(MapPin, { className: 'text-emerald-600 h-6 w-6' }), _jsx("span", { className: 'text-slate-700', children: "Remote / Bengaluru" })] }), _jsx("div", { className: 'flex space-x-4 pt-4 justify-center', children: socialLinks.map((social) => (_jsx("a", { href: social.url, target: '_blank', rel: 'noopener noreferrer', className: 'text-slate-600 hover:text-emerald-600 transition-all duration-300 transform hover:scale-110', children: _jsx(social.icon, { className: 'h-8 w-8' }) }, social.name))) })] })] }), _jsxs("div", { className: 'bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-emerald-50', children: [_jsx("h3", { className: 'text-2xl font-bold text-slate-800 mb-6 text-center', children: "Send Me a Message" }), _jsxs("form", { onSubmit: handleSubmit, className: 'space-y-4', children: [_jsxs("div", { children: [_jsx("label", { htmlFor: 'name', className: 'block text-slate-700 mb-2', children: "Name" }), _jsx("input", { type: 'text', id: 'name', value: formData.name, onChange: handleChange, className: 'w-full px-4 py-3 rounded-lg border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500', placeholder: 'Your Name', required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: 'email', className: 'block text-slate-700 mb-2', children: "Email" }), _jsx("input", { type: 'email', id: 'email', value: formData.email, onChange: handleChange, className: 'w-full px-4 py-3 rounded-lg border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500', placeholder: 'you@example.com', required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: 'message', className: 'block text-slate-700 mb-2', children: "Message" }), _jsx("textarea", { id: 'message', rows: 4, value: formData.message, onChange: handleChange, className: 'w-full px-4 py-3 rounded-lg border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500', placeholder: 'Your message here...', required: true })] }), submissionStatus === "error" && (_jsxs("div", { className: 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative', role: 'alert', children: [_jsx("strong", { className: 'font-bold', children: "Error: " }), _jsx("span", { className: 'block sm:inline', children: errorMessage })] })), _jsx("button", { type: 'submit', disabled: submissionStatus === "sending", className: 'w-full bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50', children: submissionStatus === "sending" ? "Sending..." : "Send Message" }), submissionStatus === "success" && (_jsx("div", { className: 'bg-emerald-100 border border-emerald-400 text-emerald-700 px-4 py-3 rounded relative', role: 'alert', children: "Message sent successfully! I'll get back to you soon." }))] })] })] })] }) }));
};
export default ContactPage;
