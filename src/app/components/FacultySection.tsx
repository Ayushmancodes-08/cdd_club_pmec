// app/components/FacultySection.tsx
"use client";

import React from "react";
import { Mail } from "lucide-react";

// You can edit this data with your actual faculty
const facultyData = [
  {
    initials: "SJ",
    name: "Dr. Sarah Johnson",
    title: "Professor, Computer Science",
    specialty: "AI & Machine Learning",
    email: "sarah.johnson@university.edu",
    bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
  },
  {
    initials: "MC",
    name: "Prof. Mike Chen",
    title: "Associate Professor, Engineering",
    specialty: "Innovation & Entrepreneurship",
    email: "mike.chen@university.edu",
    bgColor: "bg-gradient-to-br from-purple-500 to-pink-600",
  },
  {
    initials: "AD",
    name: "Dr. Anna Davis",
    title: "Professor, Design",
    specialty: "Human-Computer Interaction",
    email: "anna.davis@university.edu",
    bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
  },
];

const FacultySection: React.FC = () => {
  return (
    // We use slightly less padding to keep it closer to the section above
    <section id="faculty" className="container mx-auto px-6 py-20 md:py-24">
      <div className="relative z-10 text-center">
        {/* Title as requested */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Faculty <span className="text-cyan-400">Incharge</span>
        </h2>

        {/* Responsive grid: 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {facultyData.map((faculty) => (
            <div
              key={faculty.name}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2"
            >
              {/* Card content aligned with the image */}
              <div className="flex items-center space-x-5">
                {/* Circular Initials */}
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white ${faculty.bgColor}`}
                >
                  {faculty.initials}
                </div>

                {/* Text Content */}
                <div className="text-left">
                  <h3 className="text-xl font-bold text-cyan-400">
                    {faculty.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{faculty.title}</p>
                  <p className="text-gray-400 text-sm mt-1">
                    {faculty.specialty}
                  </p>
                  <a
                    href={`mailto:${faculty.email}`}
                    className="text-cyan-500 text-sm hover:text-cyan-300 transition-colors flex items-center gap-1.5 mt-2"
                  >
                    <Mail size={14} />
                    {/* Hides email text on small screens if it's too long */}
                    <span className="hidden sm:inline">{faculty.email}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;