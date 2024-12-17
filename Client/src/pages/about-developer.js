import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Camera, Gamepad2, Car, Bike, Coffee, Laptop } from "lucide-react";
const AboutDeveloper = () => {
    const [activeGallery, setActiveGallery] = useState("bikes");
    const [hoveredInterest, setHoveredInterest] = useState(null);
    const interestSections = [
        {
            icon: Camera,
            title: "Photography",
            description: "Capturing moments and exploring visual storytelling through my lens.",
        },
        {
            icon: Gamepad2,
            title: "Gaming",
            description: "Immersive gaming experiences and strategic multiplayer challenges.",
        },
        {
            icon: Laptop,
            title: "Tech Enthusiast",
            description: "Always exploring the latest in technology and innovative solutions.",
        },
        {
            icon: Car,
            title: "Automobiles",
            description: "Passionate about automotive design, engineering, and performance.",
        },
    ];
    const bikeImages = [
        {
            src: "/src/assets/about developer/bike/bike1.png",
            alt: "Old School Vintage Vibe",
        },
        {
            src: "/src/assets/about developer/bike/bike2.png",
            alt: "Bike Ride Home",
        },
        {
            src: "/src/assets/about developer/bike/bike3.png",
            alt: "Into the Wilderness",
        },
    ];
    const friendsImages = [
        {
            src: "/src/assets/about developer/frens/frens1.png",
            alt: "Peak Heat Moment",
        },
        {
            src: "/src/assets/about developer/frens/frens3.png",
            alt: "Random Meetup",
        },
        {
            src: "/src/assets/about developer/frens/frens2.png",
            alt: "Failed Plan to Hike",
        },
    ];
    const doggos = [
        {
            src: "/src/assets/about developer/doggos/chainz.png",
            alt: "Chainz",
        },
        {
            src: "/src/assets/about developer/doggos/dusty.png",
            alt: "Dusty",
        },
        {
            src: "/src/assets/about developer/doggos/campus-pups.png",
            alt: "Pups of RVU",
        },
    ];
    return (_jsx("div", { className: 'relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100', children: _jsx("div", { className: 'max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8', children: _jsxs("div", { className: 'bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl', children: [_jsxs("div", { className: 'flex flex-col md:flex-row items-center p-8 bg-emerald-50/50', children: [_jsx("div", { className: 'w-64 h-64 mb-6 md:mb-0 md:mr-10 relative', children: _jsx("img", { src: '/src/assets/about developer/developer.png', alt: 'Sajit Profile', className: 'w-full h-full object-cover rounded-full border-4 border-emerald-100 shadow-lg transform hover:scale-105 transition-transform duration-300' }) }), _jsxs("div", { className: 'text-center md:text-left', children: [_jsx("h1", { className: 'text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-4', children: "Sajit" }), _jsx("h2", { className: 'text-slate-600 mb-4', children: "Tech Enthusiast & Developer" }), _jsx("p", { className: 'text-slate-700 max-w-md', children: "Hey there! I'm a 22-year-old computer science student based in Bangalore, currently in my second year of college. When I'm not coding or building digital solutions, you'll find me exploring my passions." }), _jsxs("div", { className: 'flex justify-center md:justify-start space-x-4 mt-6', children: [_jsxs("div", { className: 'flex items-center space-x-3', children: [_jsx(Coffee, { className: 'text-emerald-600 h-6 w-6' }), _jsx("span", { className: 'text-slate-700', children: "Chai runs in the blood" })] }), _jsxs("div", { className: 'flex items-center space-x-3', children: [_jsx(Bike, { className: 'text-emerald-600 h-6 w-6' }), _jsx("span", { className: 'text-slate-700', children: "Biker" })] })] })] })] }), _jsxs("div", { className: 'p-8 bg-emerald-50/50', children: [_jsx("h3", { className: 'text-2xl font-bold text-slate-800 text-center mb-8', children: "My Interests" }), _jsx("div", { className: 'grid md:grid-cols-2 gap-6', children: interestSections.map((interest, index) => (_jsx("div", { className: `relative group overflow-hidden rounded-xl p-6 transition-all duration-300 ${hoveredInterest === index ? "bg-emerald-100" : "bg-white"}`, onMouseEnter: () => setHoveredInterest(index), onMouseLeave: () => setHoveredInterest(null), children: _jsxs("div", { className: 'relative z-10 text-center', children: [_jsx("div", { className: `bg-white p-3 rounded-full inline-block mb-4 transform transition-transform ${hoveredInterest === index ? "scale-110" : ""}`, children: _jsx(interest.icon, { className: `h-8 w-8 ${hoveredInterest === index
                                                        ? "text-emerald-700"
                                                        : "text-emerald-600"}` }) }), _jsx("h4", { className: 'font-bold text-slate-800 mb-2', children: interest.title }), _jsx("p", { className: 'text-slate-600 text-sm', children: interest.description })] }) }, index))) })] }), _jsxs("div", { className: 'p-8 bg-white/50', children: [_jsxs("div", { className: 'flex justify-center space-x-4 mb-8', children: [_jsx("button", { onClick: () => setActiveGallery("bikes"), className: `px-6 py-2 rounded-lg transition-all ${activeGallery === "bikes"
                                            ? "bg-emerald-600 text-white"
                                            : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"}`, children: "Artemis" }), _jsx("button", { onClick: () => setActiveGallery("friends"), className: `px-6 py-2 rounded-lg transition-all ${activeGallery === "friends"
                                            ? "bg-emerald-600 text-white"
                                            : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"}`, children: "People & Travel" }), _jsx("button", { onClick: () => setActiveGallery("doggos"), className: `px-6 py-2 rounded-lg transition-all ${activeGallery === "doggos"
                                            ? "bg-emerald-600 text-white"
                                            : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"}`, children: "Doggos" })] }), _jsx("div", { className: 'grid md:grid-cols-3 gap-6', children: (activeGallery === "bikes"
                                    ? bikeImages
                                    : activeGallery === "friends"
                                        ? friendsImages
                                        : doggos).map((image, index) => (_jsxs("div", { className: 'overflow-hidden rounded-2xl group relative', children: [_jsx("img", { src: image.src, alt: image.alt, className: 'w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300' }), _jsx("div", { className: 'absolute inset-0 bg-gradient-to-b from-transparent to-emerald-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4', children: _jsx("p", { className: 'text-white text-sm', children: image.alt }) })] }, index))) })] })] }) }) }));
};
export default AboutDeveloper;
