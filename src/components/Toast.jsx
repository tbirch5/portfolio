import React, { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';

export default function Toast() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    //const hasSeenToast = localStorage.getItem('seenToast');
    //if (!hasSeenToast) {
      setShow(true);
      //localStorage.setItem('seenToast', 'true');
    //}
  }, []);

  const handleClose = () => setShow(false);

  if (!show) return null;

  return (
    <div className="fixed top-24 right-6 z-50 max-w-xs px-4 py-3 bg-indigo-600 text-white rounded-lg shadow-lg animate-slide-in-up">
      <div className="flex items-start justify-between">
        <div className="flex-1 pr-4">
          <p className="text-sm leading-snug">
            💡 Tedra built this site with <strong>React</strong>, <strong>Tailwind CSS</strong>, and deployed via <strong>Vercel</strong>.
            <br />
            <a
              href="https://linkedin.com/in/tedrab"
              className="inline-flex items-center mt-1 underline text-white hover:text-indigo-200"
              target="_blank" rel="noopener noreferrer"
            >
              <FaLinkedin className="mr-1" /> Let’s connect on LinkedIn
            </a>
          </p>
        </div>
        <button
          onClick={handleClose}
          className="text-gray-500 hover:text-gray-300 text-sm font-bold ml-1 px-1 py-0 leading-none"
        >
          ×
        </button>
      </div>
    </div>
  );
}
