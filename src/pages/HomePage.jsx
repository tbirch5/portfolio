import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import MatrixBackground from "../components/MatrixBackground"
import { HiDocumentText } from 'react-icons/hi';
import Toast from '../components/Toast';
import TechBadges from '../components/TechBadges';
import MiniAnalytics from '../components/MiniAnalytics';
import { Typewriter } from 'react-simple-typewriter';


export default function HomePage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef();


    useEffect(() => {
    const handleScroll = () => {
        const container = carouselRef.current;
        if (!container) return;

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

    const ref = carouselRef.current;
    if (ref) {
        ref.addEventListener('scroll', handleScroll);
        return () => ref.removeEventListener('scroll', handleScroll);
    }
    }, []);

    return (
        <div className="relative bg-transparent">
        <MatrixBackground />
        <Toast />

         {/* Sticky Navbar */}
        <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-transparent">
            <div className="text-lg font-bold text-indigo-400">Tedra</div>
            <div className="space-x-6 text-sm">
                <a href="/Whoop" className="relative group text-gray-500 px-3 py-1 rounded transition duration-300 hover:bg-indigo-500/20 transition">Whoop ML</a>
                <a href="#projects" className="relative group text-gray-500 px-3 py-1 rounded transition duration-300 hover:bg-indigo-500/20 transition">Projects</a>
                <a href="#about" className="relative group text-gray-500 px-3 py-1 rounded transition duration-300 hover:bg-indigo-500/20 transition">About</a>
                <a href="#contact" className="relative group text-gray-500 px-3 py-1 rounded transition duration-300 hover:bg-indigo-500/20 transition">Contact</a>
                <a href="/Tedra_Resume.pdf" className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600 transition">Resume</a>
            </div>
        </nav>

        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative z-10 text-center px-6 py-24 min-h-[80vh] flex flex-col justify-center items-center bg-white/10 backdrop-blur-md">
            {/* Glow background */}
            <div className="absolute -top-10 -left-10 w-[600px] h-[600px] bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-100 rounded-full opacity-30 blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-200 via-indigo-100 to-purple-200 rounded-full opacity-40 blur-[100px] -z-10" />
            <h1 className="text-5xl font-bold mb-4 leading-tight text-gray-500">
                Tedra  
                <span className="block mt-2 text-indigo-400 text-xl md:text-2xl font-mono">
                    <Typewriter
                        words={['Software Engineer', 'ML Enthusiast', 'Expert Googler', 'Expert ChatGPT Prompter']}
                        loop={0} // 0 = infinite loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </span>

            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6">
                Bridging Human Resources & Software Engineering | React, Django, ML | Focused on Building Human-Centered Solutions
            </p>
            <div className="flex justify-center gap-6 mt-4">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/tedrab/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl text-indigo-400 hover:text-gray-600 transition duration-300" />
                </a>
                {/* Github */}
                <a href="https://github.com/tbirch5" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl text-indigo-400 hover:text-gray-600 transition duration-300" />
                </a>
                {/* Resume with preview */}
                <div className="relative group">
                <a href="/Tedra_Resume.pdf" target="_blank" rel='noopener noreferrer'>
                    <HiDocumentText className="text-3xl text-indigo-400 hover:text-gray-600 transition duration-300" />
                </a>

                {/* Hover Preview */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-48 p-2 bg-white/90 text-sm shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    <img src="/resume-preview.png" alt="Resume Preview" className="rounded" />
                </div>
                </div>
            </div>
                <TechBadges />
            </section>

            {/* Projects Carousel */}
            <section id="projects" className="w-full overflow-x-hidden bg-white/10 backdrop-blur-md py-16 px-4">
            <h2 className="text-3xl text-gray-500 font-semibold text-center mb-10">Projects</h2>
            <div ref={carouselRef} className="overflow-x-auto flex gap-6 px-6 pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth">
                {[
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
                    desc: "A modern, responsive travel platform where users can browse, book, and manage trips with authentication and admin dashboard features.",
                    tech: "Angular, TypeScript, Tailwind CSS, Node.js, MongoDB",
                    github: "https://github.com/tbirch5/travel-booking-app",
                    demo: "https://gotraveltoday.netlify.app",
                    image: "/screenshots/preview-travel.png" 
                },
                {
                    title: "Language Immersion Tracker",
                    desc: "Tool to help language learners track immersion hours, flashcards, and input sessions.",
                    tech: "Vue.js, Firebase, Chart.js",
                    github: "https://github.com/YOUR_REPO",
                    demo: "https://lingotrack.live",
                    image: "/screenshots/preview-language.png"
                }

                ].map((project, i) => (
                <div
                    key={i}
                    className="snap-start min-w-[320px] max-w-sm flex-shrink-0 bg-white/5 backdrop-blur-sm hover:shadow-xl rounded-xl transform hover:scale-105 transition-transform duration-300 p-6"
                >
                    {/* Image Preview */}
                    {project.image && (
                        <img
                            src={project.image}
                            alt={`${project.title} Preview`}
                            className="rounded-md bd-4 w-full h-40 object-cover"
                            />
                    )}

                    <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-500 text-center">{project.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{project.desc}</p>
                    <p className="text-xs text-gray-600 mb-4">Stack: {project.tech}</p>
                    <div className="flex gap-4">
                    <a href={project.github} className="text-indigo-400 hover:text-sm px-3 py-1 rounded-md hover:bg-indigo-500/20 transition">GitHub</a>
                    <a href={project.demo} className="text-indigo-400 hover:text-sm px-3 py-1 rounded-md hover:bg-indigo-500/20 transition">Live Demo</a>
                    </div>
                </div>
                ))}
            </div>
             <div className="flex justify-center mt-6 space-x-2">
                    {Array(5).fill().map((_, i) => (
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

            {/* About Section */}
            <section id="about" className="bg-white/10 backdrop-blur-md py-16 px-6 text-center">
            <h2 className="text-3xl text-gray-500 font-semibold mb-6">About Me</h2>
            <p className="max-w-3xl mx-auto text-gray-400">
                I build tools that prioritize usability, solve real-world problems, and blend human-centered thinking with modern software development. Tech stack includes React, Django, Python, Tailwind, and Machine Learning libraries like TensorFlow.
            </p>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-white/10 backdrop-blur-md py-16 text-center">
            <h2 className="text-3xl text-gray-500 font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-4">
                Reach out via LinkedIn or email me directly at <a href="mailto:youremail@example.com" className="text-indigo-400 hover:underline">tbirch955@gmail.com</a>
            </p>
            <MiniAnalytics />
            </section>

            {/* Footer Section */}
            <footer className="text-center py-6 mt-20 bg-transparent dark:bg-[#1a1a1a] text-gray-500 dark:text-gray-400">
                <p className="text-sm">
                    Built with 💻 by <span className="font-semibold text-indigo-500">Tedra B</span> &middot; 
                    <a href="/resume.pdf" className="hover:underline ml-1" target="_blank" rel="noopener noreferrer">Resume</a> &middot; 
                    <a href="https://github.com/YOUR_USERNAME" className="hover:underline ml-1" target="_blank">GitHub</a> &middot; 
                    <a href="mailto:your@email.com" className="hover:underline ml-1">Email</a>
                </p>
            </footer>
        </div>
        </div>
    );
}