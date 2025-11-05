// app/components/ProjectsPreview.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// --- 1. Project Data ---
// Define types for our data
type ProjectStatus = "In Progress" | "Completed" | "Deployed";
type ProjectTag = {
  name: string;
  color: string;
};

interface Project {
  image: string;
  title: string;
  type: ProjectTag;
  description: string;
  status: {
    name: ProjectStatus;
    color: string;
  };
  tech: string[];
}

// Placeholder data based on screenshot 2
const projectData: Project[] = [
  {
    image: "/projects/project-nav-ai.jpg",
    title: "Campus Navigator AI",
    type: { name: "AI/ML", color: "bg-blue-500/20 text-blue-300 border-blue-400" },
    description: "An AI-powered autonomous rover that navigates campus and delivers packages using computer vision.",
    status: { name: "In Progress", color: "border-yellow-400 text-yellow-300" },
    tech: ["Python", "TensorFlow", "+3"],
  },
  {
    image: "/projects/project-study-app.jpg",
    title: "StudyBuddy Mobile App",
    type: { name: "Mobile App", color: "bg-cyan-500/20 text-cyan-300 border-cyan-400" },
    description: "A comprehensive mobile app helping students connect with peers, join study groups, and stay updated.",
    status: { name: "Completed", color: "border-green-400 text-green-300" },
    tech: ["React Native", "Firebase", "+2"],
  },
  {
    image: "/projects/project-energy.jpg",
    title: "Smart Energy Management",
    type: { name: "IoT", color: "bg-purple-500/20 text-purple-300 border-purple-400" },
    description: "IoT-based system that monitors and optimizes energy consumption across campus buildings.",
    status: { name: "Deployed", color: "border-blue-400 text-blue-300" },
    tech: ["Arduino", "Raspberry Pi", "+3"],
  },
  {
    image: "/projects/project-ar-tour.jpg",
    title: "AR Campus Tour",
    type: { name: "AR/VR", color: "bg-pink-500/20 text-pink-300 border-pink-400" },
    description: "An augmented reality experience that overlays historical facts and event info onto campus landmarks.",
    status: { name: "In Progress", color: "border-yellow-400 text-yellow-300" },
    tech: ["Unity", "ARCore", "+4"],
  },
];

// --- 2. The Project Card Component ---
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_31%] mx-3">
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl h-full flex flex-col transform transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
          <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full border ${project.type.color}`}>
            {project.type.name}
          </span>
        </div>
        
        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${project.status.color}`}>
              {project.status.name}
            </span>
            {project.tech.map((tag) => (
              <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-700 text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 3. The Main Projects Preview Component ---
const ProjectsPreview: React.FC = () => {
  // Set up Embla carousel with autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section id="projects" className="container mx-auto px-6 py-20 md:py-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-semibold uppercase tracking-wider text-cyan-400">
            PROJECTS
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Check out our Projects
          </h2>
        </div>
        <div className="flex items-center gap-4">
          {/* Carousel Controls */}
          <button
            onClick={scrollPrev}
            className="p-3 rounded-full bg-gray-800 border border-gray-700 text-white hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="p-3 rounded-full bg-gray-800 border border-gray-700 text-white hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Embla Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-3">
          {projectData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {/* "See All" Button */}
      <div className="text-center mt-16">
        <Link
          href="/projects" // Will link to the dedicated projects page
          className="group bg-gray-800 text-white py-3 px-8 rounded-lg border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-all inline-flex items-center gap-2"
        >
          See All Projects
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPreview;