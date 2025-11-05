// app/components/TeamSection.tsx
"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

// --- 1. Data ---
type TeamCategory = "Core Members" | "Members" | "Alumni";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  linkedin: string;
  email: string;
  category: TeamCategory;
}

// Add all your team members here
const allTeamData: TeamMember[] = [
  // Core Members
  {
    id: 1,
    name: "Alex Rivera",
    title: "President",
    description: "Computer Science senior passionate about AI and entrepreneurship.",
    image: "/team/alex.png",
    linkedin: "#",
    email: "#",
    category: "Core Members",
  },
  {
    id: 2,
    name: "Jamie Liu",
    title: "Vice President",
    description: "Software Engineering student with focus on mobile development.",
    image: "/team/jamie.png",
    linkedin: "#",
    email: "#",
    category: "Core Members",
  },
  {
    id: 3,
    name: "Sam Patel",
    title: "Technical Lead",
    description: "IoT and embedded systems enthusiast with hardware experience.",
    image: "/team/sam.png",
    linkedin: "#",
    email: "#",
    category: "Core Members",
  },
  {
    id: 4,
    name: "Casey Wong",
    title: "Events Coordinator",
    description: "Event management specialist and community building expert.",
    image: "/team/casey.png",
    linkedin: "#",
    email: "#",
    category: "Core Members",
  },
  // Add more members for other categories
  {
    id: 5,
    name: "David Kim",
    title: "Member",
    description: "Sophomore exploring web development and cloud computing.",
    image: "/team/david.png", // Placeholder
    linkedin: "#",
    email: "#",
    category: "Members",
  },
  {
    id: 6,
    name: "Emily Chen",
    title: "Alumni",
    description: "Now a Software Engineer at Google, focusing on distributed systems.",
    image: "/team/emily.png", // Placeholder
    linkedin: "#",
    email: "#",
    category: "Alumni",
  },
];

const filterCategories: TeamCategory[] = ["Core Members", "Members", "Alumni"];

// --- 2. Main Component ---
const TeamSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<TeamCategory>("Core Members");

  const filteredMembers = useMemo(
    () => allTeamData.filter((member) => member.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="team" className="container mx-auto px-6 py-20 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Our <span className="text-cyan-400">Team</span>
        </h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        {filterCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`py-2 px-6 rounded-full font-semibold transition-all ${
              activeFilter === category
                ? "bg-cyan-500 text-black"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center flex flex-col items-center transform transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
              className="rounded-full w-24 h-24 object-cover mb-4 border-2 border-gray-700"
            />
            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-cyan-400 text-sm mb-3">{member.title}</p>
            <p className="text-gray-400 text-sm mb-5 flex-grow">
              {member.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={member.linkedin}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${member.email}`}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;