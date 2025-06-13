import React from 'react';

export default function WhoopProject() {
  return (
    <main className="text-white bg-gradient-to-br from-indigo-300 via-black to-indigo-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-extrabold mb-4">🧠 Decoding My Body with Machine Learning</h1>
        <p className="text-lg text-indigo-200 max-w-3xl mx-auto">
          Using HRV and health data from my Whoop band, I built a model to predict recovery and discover insights about my wellness and biological rhythms.
        </p>
      </section>

      {/* HRV Graph Snapshot */}
      <section className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-white my-12 mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold mb-4 text-indigo-300">📈 Recovery Score Trends</h2>
        <img src="/assets/hrv-trend-graph.png" alt="HRV Trend Graph" className="rounded-xl shadow-md w-full" />
      </section>

      {/* Model Summary */}
      <section className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-white my-12 mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold mb-4 text-indigo-300">🧠 Machine Learning Insights</h2>
        <p className="text-gray-300 mb-4">
          I trained a Decision Tree Classifier on my daily HRV, RHR, sleep, and strain scores to predict whether I would have a good or poor recovery the next day.
        </p>
        <ul className="list-disc list-inside text-gray-400">
          <li>Features: HRV, Resting Heart Rate, Sleep Performance, Strain</li>
          <li>Target: Recovery Score (Green/Yellow/Red)</li>
          <li>Model Accuracy: 85%</li>
        </ul>
      </section>

      {/* Personal Learnings */}
      <section className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-white my-12 mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold mb-4 text-indigo-300">👀 What I Learned About Myself</h2>
        <ul className="list-disc list-inside text-gray-400">
          <li>Overtraining drops my HRV by 20+ points</li>
          <li>Sleep less than 6 hours almost guarantees poor recovery</li>
          <li>Cold exposure + meditation improves HRV consistently</li>
        </ul>
      </section>

      {/* Links to Code and Demo */}
      <div className="text-center mt-8">
        <a href="https://github.com/youruser/whoop-ml" className="text-indigo-400 underline">View Code on GitHub</a>
        <span className="mx-4 text-white">|</span>
        <a href="https://whoopml.streamlit.app" className="text-indigo-400 underline">Live Demo</a>
      </div>
    </main>
  );
} 