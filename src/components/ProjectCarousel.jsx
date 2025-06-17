import { useRef, useState, useEffect } from "react";


export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();

  const projects = [
    {
      title: "Clearlog – HR Case Tracking",
      desc: "An HR/legal ticketing SaaS app for internal issue tracking and resolution management.",
      tech: "Django, React, PostgreSQL, Tailwind",
      github: "https://github.com/YOUR_REPO",
      demo: "https://clearlog.live",
      image: "/screenshots/clearlog.png"
    },
    {
      title: "Fraud Detection ML Model",
      desc: "Supervised learning project using Decision Tree classifier to flag suspicious financial transactions.",
      tech: "Python, Scikit-learn, Pandas, Matplotlib",
      github: "https://github.com/YOUR_REPO",
      demo: "https://frauddemo.live",
      image: "/screenshots/frauddetection.png"
    },
    {
      title: "Recipe Vault App",
      desc: "A CRUD web application to save and manage your favorite recipes.",
      tech: "React, Django REST, PostgreSQL",
      github: "https://github.com/YOUR_REPO",
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
    <section id="projects" className="w-full overflow-x-hidden bg-white/10 dark:bg-black/20 backdrop-blur-md">
      <h2 className="text-3xl text-gray-500 dark:text-gray-100 font-semibold text-center mb-10">Featured Projects</h2>
      <div ref={carouselRef} className="overflow-x-auto flex gap-6 px-6 pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth">
        {projects.map((project, i) => (
          <div
            key={i}
            className="snap-start min-w-[320px] max-w-sm flex-shrink-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl rounded-xl transform hover:scale-105 transition duration-300 p-6 text-gray-800 dark:text-gray-200"
          >
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                className="rounded-md bd-4 w-full h-40 object-cover"
              />
            )}
            <h3 className="text-xl font-semibold mt-4 mb-2 text-center text-gray-500 dark:text-gray-300">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{project.desc}</p>
            <p className="text-xs text-gray-600 mb-4">Stack: {project.tech}</p>
            <div className="flex gap-4">
              <a href={project.github} className="text-indigo-400 hover:text-sm px-3 py-1 rounded-md hover:bg-indigo-500/20 transition">GitHub</a>
              <a href={project.demo} className="text-indigo-400 hover:text-sm px-3 py-1 rounded-md hover:bg-indigo-500/20 transition">Live Demo</a>
            </div>
          </div>
        ))}
      </div>

      {/* Mini dot indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const container = carouselRef.current;
              const child = container?.children[i];
              if (child) container.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
            }}
            className={`h-2 w-2 rounded-full transition-all duration-300 focus:outline-none ${
              i === activeIndex ? 'bg-indigo-500' : 'bg-gray-400/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
