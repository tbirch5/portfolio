import React from 'react';
import {blogPosts} from '../data/blogPosts';
import { Link } from 'react-router-dom';

export default function BlogPage() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-12 text-indigo-100 text-center">🧠 Machine Learning Blog</h1>
        <div className="flex flex-col gap-8">
          {blogPosts.map((post) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="block bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl transition-transform transform hover:scale-[1.02]"
            >
              <h2 className="text-2xl font-semibold text-indigo-200 mb-1">{post.title}</h2>
              <p className="text-sm text-gray-400">{post.date}</p>
              <p className="mt-3 text-gray-300 leading-relaxed">{post.summary}</p>
            </Link>
          ))}
        </div>
        </div>
    </section>
  );
}
