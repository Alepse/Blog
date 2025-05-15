import { useState, useEffect } from 'react';
import Hero from '../components/hero';
import Nav from '../components/nav';
import RecentPosts from '../components/RecentPosts';
import Footer from '../components/Footer';
import { ArrowUp } from 'lucide-react';

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      <Nav />
      <Hero />
      <RecentPosts />
      <Footer />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-color-3 text-bg-primary rounded-full shadow-elevated hover:bg-color-accent-2 transition-all duration-normal hover:scale-110 z-40 border-l-2 border-t-2 border-bg-primary cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Home;