import React, { useState } from "react";
import {
  Camera,
  Gamepad2,
  Car,
  Bike,
  Coffee,
  Laptop,
  Users,
} from "lucide-react";

const AboutDeveloper: React.FC = () => {
  const [activeGallery, setActiveGallery] = useState<"bikes" | "friends">(
    "bikes",
  );

  const interestSections = [
    {
      icon: Camera,
      title: "Photography",
      description:
        "Capturing moments and exploring visual storytelling through my lens.",
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description:
        "Immersive gaming experiences and strategic multiplayer challenges.",
    },
    {
      icon: Laptop,
      title: "Tech Enthusiast",
      description:
        "Always exploring the latest in technology and innovative solutions.",
    },
    {
      icon: Car,
      title: "Automobiles",
      description:
        "Passionate about automotive design, engineering, and performance.",
    },
  ];

  const bikeImages = [
    { src: "/api/placeholder/400/300", alt: "First Bike Adventure" },
    { src: "/api/placeholder/400/300", alt: "Mountain Road Ride" },
    { src: "/api/placeholder/400/300", alt: "Sunset Ride" },
  ];

  const friendsImages = [
    { src: "/api/placeholder/400/300", alt: "College Hangout" },
    { src: "/api/placeholder/400/300", alt: "Group Trip" },
    { src: "/api/placeholder/400/300", alt: "Weekend Meetup" },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-6">
            About Me
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Exploring life through technology, creativity, and passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Personal Introduction */}
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-emerald-50">
            <div className="text-center mb-6">
              <img
                src="/api/placeholder/400/400"
                alt="Sajit Profile"
                className="w-64 h-64 object-cover rounded-full mx-auto mb-6 border-4 border-emerald-100 shadow-lg"
              />
              <h2 className="text-3xl font-bold text-slate-800">Sajit</h2>
              <p className="text-slate-600">Tech Enthusiast & Developer</p>
            </div>

            <div className="space-y-4 text-slate-700">
              <p>
                Hey there! I'm a 22-year-old computer science student based in
                Bangalore, currently in my second year of college. When I'm not
                coding or building digital solutions, you'll find me exploring
                my passions.
              </p>
              <div className="flex items-center space-x-3">
                <Coffee className="text-emerald-600 h-6 w-6" />
                <span>Chai lover and social enthusiast</span>
              </div>
              <div className="flex items-center space-x-3">
                <Bike className="text-emerald-600 h-6 w-6" />
                <span>Weekend bike rides and adventures</span>
              </div>
            </div>
          </div>

          {/* Interests Section */}
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-emerald-50">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              My Interests
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {interestSections.map((interest, index) => (
                <div
                  key={index}
                  className="bg-emerald-50 p-4 rounded-xl text-center transform transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-white p-3 rounded-full inline-block mb-4">
                    <interest.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo Galleries */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-emerald-50">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveGallery("bikes")}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeGallery === "bikes"
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
              }`}
            >
              My Bikes
            </button>
            <button
              onClick={() => setActiveGallery("friends")}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeGallery === "friends"
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
              }`}
            >
              Friends
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {(activeGallery === "bikes" ? bikeImages : friendsImages).map(
              (image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDeveloper;
