import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';
import Thumbnail from '../assets/ThumbnailWeek1.jpg'
import Thumbnail2 from '../assets/ThumbnailWeek2.jpg'

const posts = [
  {
    week: 'Week 1',
    title: 'Getting Started',
    excerpt: 'My first week of internship - orientation, team meetings, and Assigned Projects',
    image: Thumbnail,
    link: '/week1',
    date: 'February 24, 2025',
    author: 'Intern',
    category: 'Orientation'
  },
  {
    week: 'Week 2',
    title: 'Project Progressions',
    excerpt: 'Exploring my designing capabilities',
    image: Thumbnail2,
    link: '/week2',
    date: 'March 3, 2025',
    author: 'Intern',
    category: 'Wirframing & Development'
  }
];

const RecentPosts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-2 mb-4">Recent Updates</h2>
        <div className="w-20 h-1 bg-1 mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <Link 
            key={index} 
            to={post.link}
            className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl shadow-md transition-all duration-300 border border-2"
          >
            <div className="relative h-64">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 bg-2 text-white text-sm rounded-full mb-2">
                  {post.week}
                </span>
                <h3 className="text-2xl font-bold text-yellow-100 mb-2">{post.title}</h3>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-2 mb-4">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag size={16} />
                  <span>{post.category}</span>
                </div>
              </div>

              <p className="text-1 mb-4">{post.excerpt}</p>

              <div className="flex items-center text-2 group-hover:text-3 font-medium">
                Read more 
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;