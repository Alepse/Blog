import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MultiCardCarousel = ({
  items,
  renderItem,
  autoplayInterval = 5000,
  showDots = true,
  showArrows = true,
  cardsPerView = 4
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const autoplayTimerRef = useRef(null);
  const carouselRef = useRef(null);

  // Determine how many cards to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate cards to show based on screen width
  useEffect(() => {
    let cardsToShow = cardsPerView;

    if (windowWidth < 640) {
      cardsToShow = 1; // Mobile
    } else if (windowWidth < 1024) {
      cardsToShow = 2; // Tablet
    } else if (windowWidth < 1280) {
      cardsToShow = 3; // Small desktop
    }

    updateVisibleItems(currentIndex, cardsToShow);
  }, [windowWidth, currentIndex, items, cardsPerView]);

  // Update visible items based on current index
  const updateVisibleItems = (index, cardsToShow) => {
    const visibleCards = [];
    const totalItems = items.length;

    for (let i = 0; i < cardsToShow; i++) {
      const itemIndex = (index + i) % totalItems;
      visibleCards.push({
        item: items[itemIndex],
        index: itemIndex
      });
    }

    setVisibleItems(visibleCards);
  };

  const goToNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);

    // Reset autoplay timer when manually navigating
    resetAutoplayTimer();
  };

  const goToPrev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);

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
      const nextIndex = (currentIndex + 1) % items.length;
      setCurrentIndex(nextIndex);
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
  }, [currentIndex, items.length, autoplayInterval]);

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
    <div className="relative w-full h-full" ref={carouselRef}>
      {/* Main carousel container */}
      <div
        className="flex h-full transition-all duration-slow ease-in-out"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Render visible cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleItems.map(({ item, index }) => (
            <div
              key={index}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows - Responsive sizing */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 bg-bg-secondary text-color-1 hover:bg-color-3 hover:text-bg-primary p-1 sm:p-2 md:p-3 transition-all duration-normal border-l-2 sm:border-l-4 border-t-2 sm:border-t-4 border-color-3 focus:outline-none z-10 shadow-card cursor-pointer"
            aria-label="Previous slide"
            disabled={isTransitioning}
          >
            <ChevronLeft size={windowWidth < 640 ? 16 : windowWidth < 1024 ? 20 : 24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 bg-bg-secondary text-color-1 hover:bg-color-3 hover:text-bg-primary p-1 sm:p-2 md:p-3 transition-all duration-normal border-l-2 sm:border-l-4 border-t-2 sm:border-t-4 border-color-3 focus:outline-none z-10 shadow-card cursor-pointer"
            aria-label="Next slide"
            disabled={isTransitioning}
          >
            <ChevronRight size={windowWidth < 640 ? 16 : windowWidth < 1024 ? 20 : 24} />
          </button>
        </>
      )}

      {/* Dots navigation - Responsive sizing and limited on mobile */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-1 sm:gap-2 z-10 overflow-x-auto px-2 py-1">
          {items.slice(0, windowWidth < 640 ? 5 : items.length).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 sm:h-3 md:h-4 transition-all duration-normal flex-shrink-0 cursor-pointer ${
                index === currentIndex
                  ? 'bg-color-3 w-4 sm:w-6 md:w-8 border-l-2 sm:border-l-4 border-t-2 sm:border-t-4 border-bg-primary shadow-soft'
                  : 'bg-bg-secondary w-2 sm:w-3 md:w-4 border-l-1 sm:border-l-2 border-t-1 sm:border-t-2 border-color-3 hover:bg-bg-tertiary'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
          {windowWidth < 640 && items.length > 5 && (
            <span className="text-[10px] text-color-2 self-center">...</span>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiCardCarousel;
