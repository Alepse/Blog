import React from 'react';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import RecentPosts from '../components/RecentPosts';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <RecentPosts />
    </div>
  );
};

export default Home;