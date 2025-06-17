import React from "react";


export default function Footer() {

    return (
        <footer className="text-center py-6 mt-20 bg-transparent dark:bg-transparent text-gray-500 dark:text-gray-400">
            <p className="text-sm">
                Built by <span className="font-semibold text-indigo-500">Tedra B</span> &middot; 
                <a href="/resume.pdf" className="hover:underline ml-1" target="_blank" rel="noopener noreferrer">Resume</a> &middot; 
                <a href="https://github.com/YOUR_USERNAME" className="hover:underline ml-1" target="_blank">GitHub</a> &middot; 
                <a href="mailto:your@email.com" className="hover:underline ml-1">Email</a>
            </p>
        </footer>
    )
}
