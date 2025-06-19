import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import MatrixBackground from "../components/MatrixBackground"
import { HiDocumentText } from 'react-icons/hi';
import Toast from '../components/Toast';
// import TechBadges from '../components/TechBadges';
import MiniAnalytics from '../components/MiniAnalytics';
import { Typewriter } from 'react-simple-typewriter';
import Navbar from '../components/Navbar';
import ProjectCarousel from '../components/ProjectCarousel';
import React, { useEffect, useRef, useState} from 'react';
import Footer from '../components/Footer';


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
        }

        return () => {
            if (ref) {
                ref.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);


    return (
        <div className="relative bg-transparent dark:bg-black/10 dark:text-gray-100 transition-colors duration-500">
        <MatrixBackground />
        <Navbar />
        <Toast />

        <div className="min-h-screen bg-white dark:bg-[#0f0f12] text-gray-900 dark:text-white transition-colors duration-300">
            {/* Hero Section */}
            {/* See through section included to allow matrix exposure */}
            <section className="relative z-10 text-center px-6 py-24 min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-b from-white/5 via-white/0 to-white/5 dark:from-black/5 dark:via-black/0 dark:to-black/5 backdrop-blur-sm">
            {/* Glow background */}
            <div className="absolute -top-10 -left-10 w-[600px] h-[600px] bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-100 dark:from-indigo-800 dark:via-purple-900 dark:to-black rounded-full opacity-30 blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-200 via-indigo-100 to-purple-200 dark:from-purple-900 dark:via-indigo-900 dark:to-black rounded-full opacity-40 blur-[100px] -z-10" />
            <h1 className="text-5xl font-bold mb-4 leading-tight text-gray-500 dark:text-white">
                Tedra  
                <span className="block mt-2 text-indigo-500 dark:text-indigo-300 text-xl md:text-2xl font-mono">
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
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 dark:text-white text-center leading-relaxed">
                <span className="block">Full-Stack Dev | Systems Thinker</span>
                <span className="block">React, Django, ML | Building Scalable Solutions for Real-World Problems</span>
            </p>

            <div className="flex justify-center gap-6 mt-4">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/tedrab/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl text-indigo-500 dark:text-white hover:text-gray-600 dark:hover:text-indigo-300 transform hover:scale-110 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500" />
                </a>
                {/* Github */}
                <a href="https://github.com/tbirch5" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl text-indigo-500 dark:text-white hover:text-gray-600 dark:hover:text-indigo-300 transform hover:scale-110 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500" />
                </a>
                {/* Resume with preview */}
                <div className="relative group">
                <a href="/Tedra_Resume.pdf" target="_blank" rel='noopener noreferrer'>
                    <HiDocumentText className="text-3xl text-indigo-500 dark:text-white hover:text-gray-600 dark:hover:text-indigo-300 transform hover:scale-110 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500" />
                </a>

                {/* Hover Preview */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-48 p-2 bg-white/90 text-sm shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    <img src="/resume-preview.png" alt="Resume Preview" className="rounded" />
                </div>
                </div>
                 <a href="tbirch955@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaRegEnvelope className="text-3xl text-indigo-500 dark:text-white hover:text-gray-600 dark:hover:text-indigo-300" />
                </a>
            </div>
                {/* <TechBadges /> */}
            </section>
            <ProjectCarousel />

            {/* About Section 
            <section id="about" className="bg-white/20 dark:bg-black/20 backdrop-blur-sm">
            <h2 className="text-3xl text-gray-500 dark:text-gray-300 font-semibold text-center mb-10">About Me</h2>
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-4">
                I build tools that prioritize usability, solve real-world problems, and blend human-centered thinking with modern software development. Tech stack includes React, Django, Python, Tailwind, and Machine Learning libraries like TensorFlow.
            </p>
            </section> */}
            <MiniAnalytics />
            <Footer />
            {/* Contact Section 
            <section id="contact" className="bg-white/20 dark:bg-black/20 backdrop-blur-sm">
            <h2 className="text-3xl text-gray-500 dark:text-gray-300 font-semibold text-center mb-10">Get in Touch</h2>
            <p className=" text-center text-gray-400 dark:text-gray-300 mb-4">
                Reach out via LinkedIn or email me directly at <a href="mailto:youremail@example.com" className="text-indigo-400 hover:underline">tbirch955@gmail.com</a>
            </p>
            </section> */}
        </div>
        </div>
    );
}