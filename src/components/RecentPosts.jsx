import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, Tag, ChevronRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
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
import Week11Image from '../assets/Week10/week10.5.JPG';
import Week12Image from '../assets/Week12/week12.1.png';

// All 12 weeks of internship
const posts = [
  {
    week: 'Week 1',
    title: 'First Week Orientation',
    excerpt: 'Wireframing and prototyping of the possible design of our knowledge management portal for our client.',
    image: Thumbnail1,
    link: '/week1',
    date: 'February 24-28 2025',
    author: 'Kenneth Espela',
    category: 'Week 1'
  },
  {
    week: 'Week 2',
    title: 'Project Progressions',
    excerpt: 'Exploring my designing capabilities and continuing to develop wireframes for our knowledge management portal.',
    image: Thumbnail2,
    link: '/week2',
    date: 'March 3-7 2025',
    author: 'Kenneth Espela',
    category: 'Week 2'
  },
  {
    week: 'Week 3',
    title: 'Learning New Skills',
    excerpt: 'Diving deeper into development tools and methodologies while working on the knowledge management portal.',
    image: Week3Image,
    link: '/week3',
    date: 'March 10-14 2025',
    author: 'Kenneth Espela',
    category: 'Week 3'
  },
  {
    week: 'Week 4',
    title: 'Server Upgrades & Farewells',
    excerpt: 'Learning technical server skills and celebrating team connections through a special farewell for a DOST-V employee.',
    image: Week4Image,
    link: '/week4',
    date: 'March 17-21 2025',
    author: 'Kenneth Espela',
    category: 'Week 4'
  },
  {
    week: 'Week 5',
    title: 'Employee Dashboard',
    excerpt: 'Frontend development of the employee dashboard and progress report meetings with the project manager.',
    image: Week5Image,
    link: '/week5',
    date: 'March 24-28 2025',
    author: 'Kenneth Espela',
    category: 'Week 5'
  },
  {
    week: 'Week 6',
    title: 'Next.js Migration',
    excerpt: 'Facing challenges with migrating to Next.js tech stack and learning TypeScript for our project.',
    image: Week6Image,
    link: '/week6',
    date: 'March 31-Apr 4 2025',
    author: 'Kenneth Espela',
    category: 'Week 6'
  },
  {
    week: 'Week 7',
    title: 'Employee Side Development',
    excerpt: 'Learning more about Next.js, developing the employee side, and making UI/UX adjustments to improve user experience.',
    image: Week7Image,
    link: '/week7',
    date: 'April 7-11 2025',
    author: 'Kenneth Espela',
    category: 'Week 7'
  },
  {
    week: 'Week 8',
    title: 'HR Frontend & PC Maintenance',
    excerpt: 'Starting frontend development for the HR side and participating in PC maintenance and troubleshooting activities.',
    image: Week8Image,
    link: '/week8',
    date: 'April 14-18 2025',
    author: 'Kenneth Espela',
    category: 'Week 8'
  },
  {
    week: 'Week 9',
    title: 'HR Frontend & Event Tech',
    excerpt: 'Developing HR interfaces and preparing for the DOST-V Innovation Summit during my ninth week.',
    image: Week9Image,
    link: '/week9',
    date: 'April 21-25 2025',
    author: 'Kenneth Espela',
    category: 'Week 9'
  },
  {
    week: 'Week 10',
    title: 'Innovation Summit & IT Admin',
    excerpt: 'Attending the Innovation Summit event and developing the IT admin side frontend with pages for each menu item.',
    image: Week10Image,
    link: '/week10',
    date: 'April 28-May 2 2025',
    author: 'Kenneth Espela',
    category: 'Week 10'
  },
  {
    week: 'Week 11',
    title: 'UI/UX Adjustments',
    excerpt: 'Making final UI/UX adjustments and completing the internship project before wrapping up the experience.',
    image: Week11Image,
    link: '/week11',
    date: 'May 5-9 2025',
    author: 'Kenneth Espela',
    category: 'Week 11'
  },
  {
    week: 'Week 12',
    title: 'Debugging & UI Polishing',
    excerpt: 'Debugging and fine-tuning UI/UX components in the HR and IT admin interfaces to ensure a polished final product.',
    image: Week12Image,
    link: '/week12',
    date: 'May 12-16 2025',
    author: 'Kenneth Espela',
    category: 'Week 12'
  }
];

const PostCard = ({ post }) => {
  return (
    <div className="group h-full relative overflow-hidden bg-black/80 border border-white/10 w-full">
      {/* Full image background */}
      <div className="w-full h-full">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/20" />
      </div>

      {/* Category tag */}
      <div className="absolute top-4 left-4 z-10">
        <span className="flex items-center gap-1.5 text-white/90 bg-black/50 px-2 py-1 backdrop-blur-sm">
          <Tag size={16} className="text-color-3" />
          <span className="text-sm font-medium">{post.category}</span>
        </span>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3">{post.title}</h3>

        {/* Description */}
        <p className="text-sm text-white/80 mb-6 line-clamp-2">{post.excerpt}</p>

        {/* Footer with date and view button */}
        <div className="flex justify-between items-center">
          {/* Date */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-white/70" />
              <span className="text-xs text-white/70">{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={14} className="text-color-3" />
              <span className="text-xs text-white/70">{post.author}</span>
            </div>
          </div>

          {/* View button */}
          <div className="inline-flex items-center gap-1 cursor-pointer bg-color-3/20 px-2 py-1 hover:bg-color-3/40 transition-all duration-normal">
            <span className="text-xs font-medium text-white">VIEW</span>
            <ArrowRight
              size={14}
              className="text-white group-hover:translate-x-1 transition-transform duration-normal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentPosts = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const postsPerPage = windowWidth >= 1280 ? 3 : windowWidth >= 1024 ? 2 : windowWidth >= 640 ? 2 : 1;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Refs for dragging functionality
  const carouselRef = useRef(null);
  const controls = useAnimation();

  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Get current posts
  const getCurrentPosts = () => {
    const startIndex = currentPage * postsPerPage;
    return posts.slice(startIndex, startIndex + postsPerPage);
  };

  // Handle page navigation
  const nextPage = () => {
    setDirection(1);
    controls.start("exit").then(() => {
      setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
      controls.start("center");
    });
  };

  const prevPage = () => {
    setDirection(-1);
    controls.start("exit").then(() => {
      setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
      controls.start("center");
    });
  };

  // Handle drag end
  const handleDragEnd = (_, info) => {
    const dragDistance = info.offset.x;
    const dragThreshold = 100; // Minimum drag distance to trigger page change

    if (dragDistance > dragThreshold) {
      setDirection(-1);
      controls.start("exit").then(() => {
        setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
        controls.start("center");
      });
    } else if (dragDistance < -dragThreshold) {
      setDirection(1);
      controls.start("exit").then(() => {
        setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
        controls.start("center");
      });
    } else {
      // Reset position if drag wasn't far enough
      controls.start("center");
    }
  };

  // Handle window resize and animation
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
      controls.start("center");
    }, 300);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [controls]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:px-10 md:py-24 relative overflow-hidden">
      {/* We're using Tailwind CSS, so we'll add the styles directly to the component */}

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-color-3/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-color-3/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex mt-12 flex-col md:flex-row md:items-start md:justify-between mb-12 md:mb-16 gap-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Recent Updates</h2>
            <div className="w-full md:w-auto border-l-2 border-color-3 pl-5">
              <p className="text-color-2 max-w-2xl text-sm md:text-base">
                Follow my weekly journey through this internship experience
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <motion.div
          ref={carouselRef}
          className={`relative max-w-6xl mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          custom={direction}
          variants={variants}
          initial="enter"
          animate={controls}
          exit="exit"
        >
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${
            getCurrentPosts().length === 2
              ? 'lg:grid-cols-2 xl:grid-cols-2 lg:max-w-5xl xl:max-w-5xl mx-auto'
              : 'lg:grid-cols-3 xl:grid-cols-3'
          } gap-6`}>
            {getCurrentPosts().map((post, index) => (
              <motion.div
                key={index}
                className="h-[350px] w-full"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={post.link} className="block h-full">
                  <PostCard post={post} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pagination controls */}
        <div className="flex justify-center items-center mt-12">
          <div className="flex items-center">
            <button
              onClick={prevPage}
              className="w-14 h-14 flex items-center justify-center border border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              aria-label="Previous page"
            >
              <ChevronRight size={20} className="rotate-180 text-white" />
            </button>

            <div className="px-6 py-3 border-t border-b border-white/20 bg-transparent">
              <span className="text-sm font-medium text-white">{currentPage + 1} / {totalPages}</span>
            </div>

            <button
              onClick={nextPage}
              className="w-14 h-14 flex items-center justify-center border border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              aria-label="Next page"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>

      </div>

      <div className={`mt-16 md:mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Link
          to="/week1"
          className="inline-flex mb-12 z-10 items-center px-6 py-3 md:px-8 md:py-4 bg-transparent text-color-3 border-2 border-color-3 transition-all duration-normal group hover:bg-color-3 hover:text-bg-primary cursor-pointer"
        >
          <span className="text-sm md:text-base font-bold tracking-wider">VIEW ALL WEEKLY LOGS</span>
          <ChevronRight size={windowWidth < 640 ? 18 : 22} className="ml-3 transition-transform duration-normal group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default RecentPosts;