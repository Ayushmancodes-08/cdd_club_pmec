// app/components/ContactSection.tsx
"use client";

import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    // This section now gets the 'contact' id
    <section id="contact" className="container mx-auto px-6 py-20 md:py-24">
      <div className="text-center mb-16">
        <h3 className="text-lg font-semibold uppercase tracking-wider text-cyan-400">
          CONTACT US
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Get in Touch
        </h2>
      </div>

      {/* Responsive layout: 2 cols on desktop, 1 on mobile */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col gap-8">
          <h3 className="text-3xl font-bold text-white mb-2">
            Send Us a Message ✉️
          </h3>
          <p className="text-gray-400 text-lg">
            Feel free to reach out through the contact form or find our
            information below. Your feedback, questions, and suggestions are
            important to us.
          </p>
          <div className="space-y-6">
            <a
              href="mailto:codingclubpmec@gmail.com"
              className="flex items-center gap-4 group"
            >
              <Mail className="w-6 h-6 text-cyan-400" />
              <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                codingclubpmec@gmail.com
              </span>
            </a>
            <div className="flex items-center gap-4 group">
              <Phone className="w-6 h-6 text-cyan-400" />
              <span className="text-gray-300">
                +91 9438299027
              </span>
            </div>
            <div className="flex items-start gap-4 group">
              <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              <span className="text-gray-300">
                PMEC, Sitalapali, Berhampur, Odisha
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form className="w-full space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              placeholder="Enter Your Name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              placeholder="Enter Your Mobile Number"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Write Your Message Here
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            className="group w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2"
          >
            Submit Now
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;