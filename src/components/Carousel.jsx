import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ items, renderItem, autoplayInterval = 5000, showDots = true, showArrows = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoplayTimerRef = useRef(null);
  const carouselRef = useRef(null);

  const goToNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    
    // Reset autoplay timer when manually navigating
    resetAutoplayTimer();
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    
    // Reset autoplay timer when manually navigating
    resetAutoplayTimer();
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    // Reset autoplay timer when manually navigating
    resetAutoplayTimer();
  };

  const resetAutoplayTimer = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    
    autoplayTimerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    }, autoplayInterval);
  };

  // Handle touch events for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left, go to next
      goToNext();
    }

    if (touchStart - touchEnd < -100) {
      // Swipe right, go to previous
      goToPrev();
    }
  };

  // Handle transition end
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  // Set up autoplay
  useEffect(() => {
    resetAutoplayTimer();
    
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [items.length, autoplayInterval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isTransitioning]);

  return (
    <div className="relative w-full overflow-hidden" ref={carouselRef}>
      {/* Main carousel container */}
      <div 
        className="flex transition-transform duration-slow ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTransitionEnd={handleTransitionEnd}
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className="w-full flex-shrink-0"
            aria-hidden={index !== currentIndex}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-1 p-2 rounded-full shadow-soft transition-all duration-normal hover:scale-110 focus:outline-none focus:ring-2 focus:ring-3 z-10"
            aria-label="Previous slide"
            disabled={isTransitioning}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-1 p-2 rounded-full shadow-soft transition-all duration-normal hover:scale-110 focus:outline-none focus:ring-2 focus:ring-3 z-10"
            aria-label="Next slide"
            disabled={isTransitioning}
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Dots navigation */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-normal ${
                index === currentIndex 
                  ? 'bg-3 w-6' 
                  : 'bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
