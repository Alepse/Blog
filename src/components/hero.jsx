import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(2); // Start with Week 3 (index 2)
  const heroRef = useRef(null);

  // State to track if user has manually interacted with carousel
  const [userInteracted, setUserInteracted] = useState(false);
  // Timer to reset user interaction state
  const interactionTimerRef = useRef(null);

  // Mouse position for interactive background (desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Transform mouse position to grid movement (subtle effect, disabled on mobile)
  const gridX = useTransform(mouseX, [0, window.innerWidth], [0, isMobile ? 0 : -15]);
  const gridY = useTransform(mouseY, [0, window.innerHeight], [0, isMobile ? 0 : -15]);

  const rotatingTexts = [
    "Learning",
    "Growing",
    "Coding",
    "Creating",
    "Innovating"
  ];

  // Weeks data for the carousel
  const weeks = [
    {
      number: 1,
      title: "Getting Started",
      date: "February 24-28, 2025",
      path: "/week1",
      category: "Orientation"
    },
    {
      number: 2,
      title: "Project Progressions",
      date: "March 3-7, 2025",
      path: "/week2",
      category: "Wireframing & Development"
    },
    {
      number: 3,
      title: "Learning New Skills",
      date: "March 10-14, 2025",
      path: "/week3",
      category: "Development"
    },
    {
      number: 4,
      title: "Team Collaboration",
      date: "March 17-21, 2025",
      path: "/week4",
      category: "Teamwork"
    },
    {
      number: 5,
      title: "Project Milestones",
      date: "March 24-28, 2025",
      path: "/week5",
      category: "Project Management"
    },
    {
      number: 6,
      title: "Problem Solving",
      date: "March 31-Apr 4, 2025",
      path: "/week6",
      category: "Problem Solving"
    },
    {
      number: 7,
      title: "Mid-Internship Review",
      date: "April 7-11, 2025",
      path: "/week7",
      category: "Evaluation"
    },
    {
      number: 8,
      title: "Advanced Techniques",
      date: "April 14-18, 2025",
      path: "/week8",
      category: "Technical Skills"
    },
    {
      number: 9,
      title: "Project Leadership",
      date: "April 21-25, 2025",
      path: "/week9",
      category: "Leadership"
    },
    {
      number: 10,
      title: "Final Project Phase",
      date: "April 28-May 2, 2025",
      path: "/week10",
      category: "Project Completion"
    },
    {
      number: 11,
      title: "Wrapping Up",
      date: "May 5-9, 2025",
      path: "/week11",
      category: "Conclusion"
    }
  ];

  // Add automatic carousel functionality
  useEffect(() => {
    // Auto-advance carousel every 5 seconds if user hasn't interacted
    const carouselInterval = setInterval(() => {
      if (!userInteracted) {
        setCurrentWeekIndex(prev => (prev === weeks.length - 1 ? 0 : prev + 1));
      }
    }, 5000); // Change week every 5 seconds

    return () => {
      clearInterval(carouselInterval);
    };
  }, [userInteracted]);

  // Function to handle user interaction with carousel
  const handleCarouselInteraction = (newIndex) => {
    // Set the new week index
    setCurrentWeekIndex(newIndex);

    // Mark that user has interacted with carousel
    setUserInteracted(true);

    // Clear any existing timer
    if (interactionTimerRef.current) {
      clearTimeout(interactionTimerRef.current);
    }

    // Reset interaction state after 10 seconds of inactivity
    interactionTimerRef.current = setTimeout(() => {
      setUserInteracted(false);
    }, 10000);
  };

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Set up text rotation
    const textInterval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % rotatingTexts.length);
    }, 2000);

    // Handle mouse movement for interactive background (desktop only)
    const handleMouseMove = (e) => {
      // Only track mouse movement on desktop
      if (!isMobile) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    // Add mouse move event listener (only meaningful on desktop)
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      clearInterval(textInterval);
      clearTimeout(interactionTimerRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative w-full min-h-screen overflow-x-hidden bg-black flex items-center justify-center py-20 sm:py-24 md:py-0">
      {/* Grid background - interactive only on desktop */}
      <motion.div
        className="absolute inset-0 z-0"
        style={isMobile ? {} : { x: gridX, y: gridY }}
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>

        {/* Main grid pattern - interactive with mouse movement */}
        <div className="absolute inset-0 grid grid-cols-12 opacity-[0.15]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full border-r border-color-3/30"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 opacity-[0.15]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-full border-b border-color-3/30"></div>
          ))}
        </div>


      </motion.div>

      {/* Main content container with minimal spacing */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-6 gap-6 lg:gap-8 pb-16 lg:pb-0">
        {/* Left column - Main text content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            {/* Main title with more compact typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-secondary tracking-tight text-white"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold relative">
                <span className="relative z-10">INTERNSHIP</span>
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-color-3 relative mt-2 md:mt-3">
                <span className="relative z-10">JOURNEY</span>
              </div>
            </motion.h1>

            {/* Year and rotating text with reduced spacing */}
            <div className="flex items-center h-12 overflow-hidden mt-3 md:mt-4">
              <div className="text-base sm:text-lg font-medium text-white mr-3">2025</div>
              <div className="h-6 w-px bg-color-3/50 mr-3"></div>
              <div className="relative h-full flex items-center">
                {rotatingTexts.map((text, index) => (
                  <motion.span
                    key={index}
                    className={`absolute text-base sm:text-lg ${
                      index === currentTextIndex
                        ? 'opacity-100 transform-none'
                        : 'opacity-0 translate-y-8'
                    }`}
                    animate={{
                      opacity: index === currentTextIndex ? 1 : 0,
                      y: index === currentTextIndex ? 0 : 8
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-color-3">{text}</span>
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Description with reduced spacing */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed"
            >
              Follow my 11-week professional development journey as I document my growth,
              challenges, and achievements during this transformative internship experience.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/week1'}
                className="group flex items-center gap-2 px-4 py-2 text-white border border-white/30 hover:border-white transition-all duration-normal cursor-pointer"
              >
                <span className="font-medium tracking-wide text-xs sm:text-sm">LATEST LOG</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-normal" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right column - Week Carousel - Responsive for all screen sizes */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20, x: 0 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-[350px] sm:max-w-[400px]"
          >
            {/* Week number badge - top right */}
            <div className="flex justify-end mb-4">
              <div className="px-3 py-1 border border-white/30">
                <span className="text-white text-xs font-medium">INTERNSHIP LOGS</span>
              </div>
            </div>

            {/* Week Carousel - Optimized for all screen sizes */}
            <div className="relative mb-3 sm:mb-4">
              {/* Week Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWeekIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-black/40 backdrop-blur-sm border border-white/20 p-3 sm:p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-white text-sm sm:text-base font-bold">{weeks[currentWeekIndex].title}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Calendar size={10} className="text-color-3" />
                        <p className="text-white/60 text-[10px] sm:text-xs">{weeks[currentWeekIndex].date}</p>
                      </div>
                    </div>
                    <div className="bg-color-3 px-2 py-1">
                      <span className="text-black text-[10px] sm:text-xs font-bold">WEEK</span>
                    </div>
                  </div>

                  <div className="mb-2 sm:mb-3">
                    <div className="flex items-center gap-1 mb-1">
                      <Clock size={10} className="text-color-3" />
                      <p className="text-white/80 text-[10px] sm:text-xs font-medium">{weeks[currentWeekIndex].category}</p>
                    </div>
                    <p className="text-white/70 text-[10px] sm:text-xs mt-1 sm:mt-2">
                      Focusing on {weeks[currentWeekIndex].category.toLowerCase()}
                      and professional development during my internship journey.
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-3">
                    <motion.button
                      whileHover={{ scale: 1.05, x: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCarouselInteraction(currentWeekIndex === 0 ? weeks.length - 1 : currentWeekIndex - 1)}
                      className="text-white/70 text-[10px] sm:text-xs flex items-center gap-1 hover:text-white cursor-pointer"
                    >
                      <ArrowRight size={10} className="rotate-180" />
                      <span>PREV</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        // Mark as interacted before navigating
                        setUserInteracted(true);
                        window.location.href = weeks[currentWeekIndex].path;
                      }}
                      className="bg-color-3 text-black px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium flex items-center gap-1 cursor-pointer"
                    >
                      <span>VIEW WEEK</span>
                      <ArrowRight size={10} />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCarouselInteraction(currentWeekIndex === weeks.length - 1 ? 0 : currentWeekIndex + 1)}
                      className="text-white/70 text-[10px] sm:text-xs flex items-center gap-1 hover:text-white cursor-pointer"
                    >
                      <span>NEXT</span>
                      <ArrowRight size={10} />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress bar - Ultra compact for all screens */}
            <div className="pt-2 border-t border-white/20">
              <div className="flex justify-between text-[10px] sm:text-xs mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-white/60">PROGRESS</span>
                  {!userInteracted && (
                    <span className="text-[8px] text-color-3 px-1 py-0.5 border border-color-3/50 animate-pulse">AUTO</span>
                  )}
                </div>
                <span className="text-color-3">WEEK {currentWeekIndex + 1} OF 11</span>
              </div>
              <div className="w-full h-0.5 bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentWeekIndex + 1) / 11) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-color-3"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


    </div>
  );
};

export default Hero;