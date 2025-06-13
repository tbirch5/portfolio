import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center text-white bg-black">
        <p className="text-xl">Post not found.</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-3xl mx-auto bg-white/10 border border-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg">
        <Link
          to="/blog"
          className="text-indigo-300 hover:text-indigo-100 transition mb-4 inline-block"
        >
          ← Back to Blog
        </Link>
        <h1 className="text-4xl font-bold text-indigo-200 mb-2">{post.title}</h1>
        <p className="text-sm text-gray-400 mb-6">{post.date}</p>
        <div className="prose prose-invert max-w-none leading-relaxed text-gray-100">
          {post.content}
        </div>
      </div>
    </section>
  );
}
