import React from 'react';

const badges = [
  { name: 'React', icon: '/react-icon.svg' },
  { name: 'Tailwind', icon: '/tailwind-icon.svg' },
  { name: 'Vercel', icon: '/vercel-icon.svg' }
];

export default function TechBadges() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 p-2 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg">
      {badges.map((badge, i) => (
        <div
          key={i}
          className="group relative flex items-center justify-center w-10 h-10 bg-white/20 rounded-md hover:scale-110 transition-transform"
        >
          <img
            src={badge.icon}
            alt={badge.name}
            className="w-5 h-5" />
          <span className="absolute bottom-12 text-xs px-2 py-1 bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
            {badge.name}
          </span>
        </div>
      ))}
    </div>
  );
}