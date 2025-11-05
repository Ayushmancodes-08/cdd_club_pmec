// app/components/EventsPreview.tsx
"use client";

import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

// Define the structure for an event
interface Event {
  type: "Hackathon" | "Workshop" | "Seminar";
  title: string;
  date: string;
  time: string;
  duration: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  tagColor: string;
}

// Event data - easy to update
const eventData: Event[] = [
  {
    type: "Hackathon",
    title: "InnoHack 2025",
    date: "Monday, December 15, 2025",
    time: "9:00 AM",
    duration: "48 hours",
    description: "Annual 48-hour hackathon focusing on sustainable technology solutions and innovation.",
    ctaText: "Register Now",
    ctaLink: "#", // Add registration link here
    tagColor: "bg-purple-500/20 text-purple-300 border-purple-400",
  },
  {
    type: "Workshop",
    title: "AI/ML Workshop Series",
    date: "Friday, November 28, 2025",
    time: "2:00 PM",
    duration: "3 hours",
    description: "Hands-on workshop covering fundamentals of artificial intelligence and machine learning.",
    ctaText: "Add to Calendar",
    ctaLink: "#", // Add calendar link here
    tagColor: "bg-blue-500/20 text-blue-300 border-blue-400",
  },
  {
    type: "Seminar",
    title: "Tech Talk: Future of Web3",
    date: "Friday, December 5, 2025",
    time: "6:00 PM",
    duration: "2 hours",
    description: "Industry leaders discuss emerging technologies and career opportunities in blockchain.",
    ctaText: "Add to Calendar",
    ctaLink: "#", // Add calendar link here
    tagColor: "bg-pink-500/20 text-pink-300 border-pink-400",
  },
];

const EventsPreview: React.FC = () => {
  return (
    <section id="events" className="container mx-auto px-6 py-20 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Upcoming <span className="text-cyan-400">Events</span>
        </h2>
      </div>

      {/* Responsive Grid for Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventData.map((event, index) => (
          <div
            key={index}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col transform transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2"
          >
            {/* Tag */}
            <div className="flex justify-between items-center mb-4">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full border ${event.tagColor}`}
              >
                {event.type}
              </span>
            </div>

            {/* Title and Date */}
            <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
            <p className="font-semibold text-cyan-400 mb-4">{event.date}</p>

            {/* Time and Duration */}
            <div className="flex items-center space-x-6 text-gray-400 mb-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{event.duration}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 flex-grow">{event.description}</p>

            {/* Call to Action Button */}
            <a
              href={event.ctaLink}
              className="group mt-6 bg-cyan-500/10 text-cyan-300 py-3 px-6 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors w-full text-center inline-flex items-center justify-center gap-2"
            >
              {event.ctaText}
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsPreview;