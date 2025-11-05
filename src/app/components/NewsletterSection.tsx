// app/components/NewsletterSection.tsx
"use client";

import React from "react";
import { Send } from "lucide-react";

const NewsletterSection: React.FC = () => {
  return (
    // --- THIS IS THE FIX ---
    // Removed all background color, it will now inherit
    // the semi-transparent background from page.tsx
    <section className="border-y border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Stay <span className="text-cyan-400">Updated</span>
            </h2>
            <p className="text-gray-400 mt-3 text-lg">
              Get the latest news, event updates, and project showcases
              delivered straight to your inbox.
            </p>
          </div>

          {/* Right Side: Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full"
          >
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                id="email"
                className="flex-grow w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="group bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                Subscribe
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
