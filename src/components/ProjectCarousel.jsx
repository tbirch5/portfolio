import { useRef, useState, useEffect } from "react";


export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();

  const projects = [
    {
      title: "Clearlog – HR Case Tracking",
      desc: "An HR/legal ticketing SaaS app for internal issue tracking and resolution management.",
      tech: "Django, React, PostgreSQL, Tailwind",
      github: "https://github.com/tbirch5/clearlog",
      demo: "https://clearlog.live",
      image: "/screenshots/clearlog.png"
    },
    {
      title: "Fraud Detection ML Model",
      desc: "Supervised learning project using Decision Tree classifier to flag suspicious financial transactions.",
      tech: "Python, Scikit-learn, Pandas, Matplotlib",
      github: "https://github.com/tbirch5/fraud-detection-decision-tree",
      demo: "https://frauddemo.live",
      image: "/screenshots/frauddetection.png"
    },
    {
      title: "Recipe Vault App",
      desc: "A CRUD web application to save and manage your favorite recipes.",
      tech: "React, Django REST, PostgreSQL",
      github: "https://github.com/tbirch5/recipe-vault",
      demo: "https://recipevault.live",
      image: "/screenshots/recipevault.png"
    },
    {
      title: "Travel Booking App",
      desc: "A modern, responsive travel platform for booking and managing trips.",
      tech: "Angular, TypeScript, Tailwind CSS, Node.js, MongoDB",
      github: "https://github.com/tbirch5/travel-booking-app",
      demo: "https://gotraveltoday.netlify.app",
      image: "/screenshots/preview-travel.png"
    },
    {
      title: "Language Immersion Tracker",
      desc: "Track immersion hours, flashcards, and input sessions for language learning.",
      tech: "Vue.js, Firebase, Chart.js",
      github: "https://github.com/YOUR_REPO",
      demo: "https://lingotrack.live",
      image: "/screenshots/preview-language.png"
    }
  ];

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      const children = container.querySelectorAll('div.snap-start');
      let closestIndex = 0;
      let closestOffset = Infinity;

      children.forEach((child, index) => {
        const offset = Math.abs(child.offsetLeft - container.scrollLeft);
        if (offset < closestOffset) {
          closestOffset = offset;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="relative z-10 py-16 px-4 bg-gradient-to-b from-white/5 via-white/0 to-white/5 dark:from-black/5 dark:via-black/0 dark:to-black/5 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-gray-100 mb-10">
        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent dark:text-white">
          Featured Projects
        </span>
      </h2>
      <div ref={carouselRef} className="overflow-x-auto flex gap-6 px-6 pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth">
        {projects.map((project, i) => (
          <div
            key={i}
            className="snap-start min-w-[90%] md:min-w-[48%] max-w-md flex-shrink-0 rounded-2xl p-[0.5px]
             bg-gradient-to-br from-slate-800 via-slate-900 to-gray-950"
          >
            <div className="bg-white dark:bg-gray-900/60 backdrop-blur-md 
                  hover:shadow-lg
                  rounded-2xl p-6 border border-indigo-700 text-gray-800 dark:text-gray-200 h-full">
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className="rounded-lg border border-white/10 shadow-md hover:shadow-lg transition duration-300 object-cover h-40 w-full"
                />
              )}
              <h3 className="text-lg font-semibold mt-4 mb-2 text-center text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-white mb-2">{project.desc}</p>
              <p className="text-md text-gray-500 dark:text-gray-100 mb-4">{project.tech}</p>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-1 bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 rounded-md hover:bg-indigo-200 dark:hover:bg-indigo-500/20 transition">GitHub</a>
                <a href={project.demo} className="text-indigo-400 hover:text-sm px-3 py-1 rounded-md hover:bg-indigo-500/20 transition">Live Demo</a>
              </div>
          </div>
        </div>
        ))}
      </div>

      {/* Progress Bar Indicator */}
      <div className="mt-6 h-[3px] w-full max-w-xs mx-auto bg-gray-300/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500 transition-all duration-500"
            style={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }}
        ></div>
      </div>
    </section>
  );
}
