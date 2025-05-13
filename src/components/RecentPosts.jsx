import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, ChevronRight } from 'lucide-react';
import Thumbnail from '../assets/ThumbnailWeek1.jpg'
import Thumbnail2 from '../assets/ThumbnailWeek2.jpg';

// All 11 weeks of internship
const posts = [
  {
    week: 'Week 1',
    title: 'Getting Started',
    excerpt: 'My first week of internship - orientation, team meetings, and Assigned Projects',
    image: Thumbnail,
    link: '/week1',
    date: 'February 24-28 2025',
    author: 'Intern',
    category: 'Orientation'
  },
  {
    week: 'Week 2',
    title: 'Project Progressions',
    excerpt: 'Exploring my designing capabilities',
    image: Thumbnail2,
    link: '/week2',
    date: 'March 3-7 2025',
    author: 'Intern',
    category: 'Wireframing & Development'
  },
  {
    week: 'Week 3',
    title: 'Learning New Skills',
    excerpt: 'Diving deeper into development tools and methodologies',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80',
    link: '/week3',
    date: 'March 10-14 2025',
    author: 'Intern',
    category: 'Development'
  },
  {
    week: 'Week 4',
    title: 'Team Collaboration',
    excerpt: 'Working with the team on collaborative projects and learning from peers',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80',
    link: '/week4',
    date: 'March 17-21 2025',
    author: 'Intern',
    category: 'Teamwork'
  },
  {
    week: 'Week 5',
    title: 'Project Milestones',
    excerpt: 'Reaching important milestones in my assigned projects',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80',
    link: '/week5',
    date: 'March 24-28 2025',
    author: 'Intern',
    category: 'Project Management'
  },
  {
    week: 'Week 6',
    title: 'Problem Solving',
    excerpt: 'Tackling challenges and finding innovative solutions',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=2000&q=80',
    link: '/week6',
    date: 'March 31-Apr 4 2025',
    author: 'Intern',
    category: 'Problem Solving'
  },
  {
    week: 'Week 7',
    title: 'Mid-Internship Review',
    excerpt: 'Reflecting on progress and setting goals for the second half',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80',
    link: '/week7',
    date: 'April 7-11 2025',
    author: 'Intern',
    category: 'Evaluation'
  },
  {
    week: 'Week 8',
    title: 'Advanced Techniques',
    excerpt: 'Learning and implementing advanced development techniques',
    image: 'https://images.unsplash.com/photo-1581092921461-7d65ca45393a?auto=format&fit=crop&w=2000&q=80',
    link: '/week8',
    date: 'April 14-18 2025',
    author: 'Intern',
    category: 'Technical Skills'
  },
  {
    week: 'Week 9',
    title: 'Project Leadership',
    excerpt: 'Taking on leadership responsibilities in team projects',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80',
    link: '/week9',
    date: 'April 21-25 2025',
    author: 'Intern',
    category: 'Leadership'
  },
  {
    week: 'Week 10',
    title: 'Final Project Phase',
    excerpt: 'Working on the final phase of my internship projects',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2000&q=80',
    link: '/week10',
    date: 'April 28-May 2 2025',
    author: 'Intern',
    category: 'Project Completion'
  },
  {
    week: 'Week 11',
    title: 'Wrapping Up',
    excerpt: 'Completing final tasks and reflecting on the entire internship experience',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=2000&q=80',
    link: '/week11',
    date: 'May 5-9 2025',
    author: 'Intern',
    category: 'Conclusion'
  }
];

const PostCard = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-full relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={post.link}
        className="bg-bg-secondary h-full flex flex-col border-l-2 border-t-2 border-color-3 overflow-hidden shadow-card transition-all duration-normal hover:shadow-elevated focus:shadow-elevated"
      >
        {/* Image container with fixed aspect ratio */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

          {/* Category tag - darker background for better readability */}
          <div className="absolute bottom-0 left-0 bg-black/85 px-3 py-1 z-10">
            <span className="text-white text-xs font-medium flex items-center gap-1">
              {post.category}
            </span>
          </div>
        </div>

        {/* Title and excerpt section */}
        <div className="p-4 flex-grow flex flex-col justify-center">
          <h3 className="text-base md:text-lg font-bold text-color-1 font-secondary mb-2">{post.title}</h3>
          <p className="text-xs text-color-2 line-clamp-2">{post.excerpt}</p>
        </div>

        {/* Card footer */}
        <div className="px-4 py-3 flex items-center justify-between border-t border-color-3/20">
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-color-3" />
            <span className="text-xs text-color-2">{post.date}</span>
          </div>
          <div className="flex items-center gap-1 text-color-3">
            <span className="text-xs font-bold">VIEW DETAILS</span>
            <ArrowRight size={12} />
          </div>
        </div>
      </Link>

      {/* Hover overlay - exactly matching screenshot */}
      <div
        className={`absolute inset-0 bg-black/95 z-30 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Simple white border around content */}
        <div className="absolute inset-4 border border-white/30 pointer-events-none"></div>

        {/* Content container */}
        <div className="h-full flex flex-col items-center justify-between py-8 px-4">
          {/* Week number at top */}
          <div className="text-center">
            <span className="text-white text-sm font-medium">{post.week}</span>
          </div>

          {/* Title and excerpt in middle */}
          <div className="text-center max-w-[90%]">
            <h3 className="text-2xl font-bold text-white font-secondary mb-3">{post.title}</h3>
            <p className="text-sm text-white/80">{post.excerpt}</p>
          </div>

          {/* View details button and date at bottom */}
          <div className="flex flex-col items-center">
            <Link
              to={post.link}
              className="text-white border border-white/70 px-6 py-2 inline-flex items-center gap-2 hover:bg-white/10 transition-colors mb-4"
            >
              <span className="text-sm font-medium">VIEW DETAILS</span>
              <ArrowRight size={14} />
            </Link>

            <div className="flex items-center gap-1.5 text-white/60 text-xs">
              <Clock size={12} />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentPosts = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);

  // Handle window resize and animation
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:px-8 md:py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-color-3/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-color-3/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-6">
          <div className="w-full md:w-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-color-1 mb-4 font-secondary bg-bg-secondary/80 backdrop-blur-sm inline-block px-3 py-1 md:px-4 md:py-2 border-l-4 border-color-3">WEEKLY LOGS</h2>
            <div className="w-full h-1 bg-color-3 mb-4" />
            <p className="text-color-2 max-w-2xl border-l-4 border-color-3 pl-3 py-1 md:pl-4 md:py-2 bg-bg-secondary/30 backdrop-blur-sm text-sm md:text-base">
              Follow my weekly journey through this internship experience
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {posts.map((post, index) => (
            <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.05}s` }}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>

      <div className={`mt-12 md:mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Link
          to="/week1"
          className="inline-flex z-10 items-center px-4 py-2 md:px-6 md:py-3 bg-color-3 text-bg-primary border-l-4 border-t-4 border-bg-primary transition-all duration-normal group hover:bg-color-accent-2 shadow-elevated"
        >
          <span className="text-sm md:text-base font-bold">VIEW ALL WEEKLY LOGS</span>
          <ChevronRight size={windowWidth < 640 ? 16 : 20} className="ml-2 transition-transform duration-normal group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default RecentPosts;