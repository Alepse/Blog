import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, Tag, ChevronRight } from 'lucide-react';
import Thumbnail1 from '../assets/Week1/ThumbnailWeek1.jpg';
import Thumbnail2 from '../assets/Week2/ThumbnailWeek2.jpg';
import Week3Image from '../assets/Week3/Week3.1.jpg';
import Week4Image from '../assets/Week4/week4.1.jpg';
import Week5Image from '../assets/Week5/week5.1.jpg';
import Week6Image from '../assets/Week6/week6.1.jpg';
import Week7Image from '../assets/Week7/week7.1.jpg';
import Week8Image from '../assets/Week8/week8.1.jpg';
import Week9Image from '../assets/Week9/week9.1.jpg';
import Week10Image from '../assets/Week10/week10.1.jpg';
import Week11Image from '../assets/Week10/week10.5.jpg';

// All 11 weeks of internship
const posts = [
  {
    week: 'Week 1',
    title: 'Getting Started',
    excerpt: 'My first week of internship - orientation, team meetings, and Assigned Projects',
    image: Thumbnail1,
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
    image: Week3Image,
    link: '/week3',
    date: 'March 10-14 2025',
    author: 'Intern',
    category: 'Development'
  },
  {
    week: 'Week 4',
    title: 'Team Collaboration',
    excerpt: 'Working with the team on collaborative projects and learning from peers',
    image: Week4Image,
    link: '/week4',
    date: 'March 17-21 2025',
    author: 'Intern',
    category: 'Teamwork'
  },
  {
    week: 'Week 5',
    title: 'Project Milestones',
    excerpt: 'Reaching important milestones in my assigned projects',
    image: Week5Image,
    link: '/week5',
    date: 'March 24-28 2025',
    author: 'Intern',
    category: 'Project Management'
  },
  {
    week: 'Week 6',
    title: 'Problem Solving',
    excerpt: 'Tackling challenges and finding innovative solutions',
    image: Week6Image,
    link: '/week6',
    date: 'March 31-Apr 4 2025',
    author: 'Intern',
    category: 'Problem Solving'
  },
  {
    week: 'Week 7',
    title: 'Mid-Internship Review',
    excerpt: 'Reflecting on progress and setting goals for the second half',
    image: Week7Image,
    link: '/week7',
    date: 'April 7-11 2025',
    author: 'Intern',
    category: 'Evaluation'
  },
  {
    week: 'Week 8',
    title: 'Advanced Techniques',
    excerpt: 'Learning and implementing advanced development techniques',
    image: Week8Image,
    link: '/week8',
    date: 'April 14-18 2025',
    author: 'Intern',
    category: 'Technical Skills'
  },
  {
    week: 'Week 9',
    title: 'Project Leadership',
    excerpt: 'Taking on leadership responsibilities in team projects',
    image: Week9Image,
    link: '/week9',
    date: 'April 21-25 2025',
    author: 'Intern',
    category: 'Leadership'
  },
  {
    week: 'Week 10',
    title: 'Final Project Phase',
    excerpt: 'Working on the final phase of my internship projects',
    image: Week10Image,
    link: '/week10',
    date: 'April 28-May 2 2025',
    author: 'Intern',
    category: 'Project Completion'
  },
  {
    week: 'Week 11',
    title: 'Wrapping Up',
    excerpt: 'Completing final tasks and reflecting on the entire internship experience',
    image: Week11Image,
    link: '/week11',
    date: 'May 5-9 2025',
    author: 'Intern',
    category: 'Conclusion'
  }
];

const PostCard = ({ post }) => {
  return (
    <div
      className="group h-full relative bg-bg-secondary border border-color-3/30 overflow-hidden rounded-sm shadow-lg transition-all duration-300 flex flex-col transform hover:-translate-y-2 hover:shadow-xl hover:border-color-3"
    >
      {/* Image container with fixed aspect ratio */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

        {/* Category tag */}
        <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1 z-10 border-l-2 border-color-3">
          <span className="text-color-3 text-xs font-medium">
            {post.category}
          </span>
        </div>

        {/* Week badge */}
        <div className="absolute top-3 right-3 bg-transparent px-2 py-1 z-10">
          <span className="text-white text-sm font-medium">
            {post.week}
          </span>
        </div>
      </div>

      {/* Content section */}
      <div className="p-4 flex flex-col h-[150px]">
        <h3 className="text-base font-bold text-white font-secondary mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-xs text-white/70 line-clamp-2 mb-4">{post.excerpt}</p>

        {/* Card footer */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10 mt-auto">
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-color-3" />
            <span className="text-xs text-white/70">{post.date}</span>
          </div>
          <div className="flex items-center gap-1 text-color-3">
            <span className="text-xs font-bold">VIEW DETAILS</span>
            <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
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
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 md:mb-12 gap-6">
          <div className="w-full md:w-auto border-l border-color-3 pl-4">
            <p className="text-color-2 max-w-2xl text-sm md:text-base">
              Follow my weekly journey through this internship experience
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {posts.map((post, index) => (
            <Link key={index} to={post.link} className="animate-fadeIn h-full block" style={{ animationDelay: `${index * 0.05}s` }}>
              <PostCard post={post} />
            </Link>
          ))}
        </div>
      </div>

      <div className={`mt-8 md:mt-12 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Link
          to="/week1"
          className="inline-flex z-10 items-center px-4 py-2 md:px-6 md:py-3 bg-transparent text-color-3 border border-color-3 transition-all duration-normal group hover:bg-color-3 hover:text-bg-primary cursor-pointer"
        >
          <span className="text-sm md:text-base font-bold">VIEW ALL WEEKLY LOGS</span>
          <ChevronRight size={windowWidth < 640 ? 16 : 20} className="ml-2 transition-transform duration-normal group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default RecentPosts;