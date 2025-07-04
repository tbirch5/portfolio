# 🌌 Tedra's — Personal Portfolio Website

Welcome to my personal portfolio website! This frontend project is built to showcase my skills as a full-stack developer and machine learning enthusiast, with a creative UI, backend django integrations and some of my recent models.

This site reflects my passion for tech, storytelling through software, and solving real problems. Thanks for visiting!

## 🌍 Live Site Deployed at: 

[https://tedra.netlify.app/](https://tedra.netlify.app/)

![Screenshot](public/screenshots/preview-home.png)

## 🔮 Features

- 🧠 **Matrix Background Animation** — Unique animated canvas backdrop for a cyber-inspired aesthetic.
- ✍️ **Typewriter Introduction** — Dynamic title rotating through roles like *ML Enthusiast*, *Software Engineer*, etc.
- 📂 **Interactive Projects Carousel** — Smooth scroll-snap carousel of my top projects with GitHub and Live Demo links.
- 📄 **Interactive Resume Preview** — Quick resume preview on hover for recruiters and visitors.
- 🌐 **Navigation Anchors** — Clean navbar linking to `Projects`, `About`, and `Contact` sections.
- 📉 **Mini Analytics** — Light stats component to show GitHub or other metrics.
- 💬 **Toast Notification Component** — Reusable toast alerts system.
- 🎯 **Tech Badges** — Frontend and backend technologies shown visually under the hero section.
- 📱 **Fully Responsive** — Optimized for desktop and mobile.

## 🧰 Built With

- **React.js** — Frontend UI
- **Django** — Backend
- **Tailwind CSS** — Styling and layout
- **Framer Motion** — Smooth transitions and animations
- **React Simple Typewriter** — Typewriter intro text
- **React Icons** — GitHub, LinkedIn, and document icons
- **Custom Canvas** — Matrix-style background animation


## 🚧 Upcoming Backend Integration
## 💡 Future Enhancements

- ✅ Contact form with email backend via Django
- ⏳ Blog section with Markdown support or CMS integration
- 🔐 Admin login to manage featured projects dynamically
- 🧠 ML-powered project recommender
- 🧩 Connect Django backend to serve projects via REST API

## 🚀 Deployment

## 🛠️ Build Added Details

- **Frontend:** React.js + Vite + Tailwind CSS
- **UI/UX:** Custom animations, glassmorphism, typewriter
- **Icons:** React-Icons
- **Extras:** `react-simple-typewriter`, responsive layout
Site deployed via **Netlify**, connected to GitHub for continuous deployment.


## 📁 Project Structure

frontend/
├── public/
│ └── screenshots/
├── src/
│ ├── components/
│ ├── pages/
│ ├── styles/
│ ├── App.jsx
│ ├── main.jsx
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md



## 🌗 Dark Mode Support

This site supports dark/light themes with a smooth toggle.

- **Dark mode logic:**  
  Implemented via Tailwind’s `darkMode: 'class'` setting in `tailwind.config.js`.

- **Initial load script:**  
  Dark mode is applied immediately on page load by checking:
  ```js
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }


- Theme toggle button:
- Implemented in Navbar.jsx using React state and localStorage sync.

- Extras:
    - Smooth transition applied with:

html {
  transition: background-color 0.5s ease, color 0.5s ease;
}

    - All containers use bg-white and dark:bg-black variants for styling consistency.

Heads-up: If you’re troubleshooting and theme toggling doesn’t work:

- Restart your dev server (Ctrl+C then npm run dev or yarn dev)

- Hard refresh your browser (Cmd+Shift+R)

- Make sure the root <html> element has class="dark" when expected