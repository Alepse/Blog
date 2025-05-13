import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const WeekNavButton = ({ to, direction, label }) => {
  const isNext = direction === 'next';
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.preventDefault();

    // Navigate to the new page with state indicating to scroll to top
    navigate(to, {
      state: {
        scrollToTop: true
      }
    });
  };

  return (
    <button
      onClick={handleNavigation}
      className={`flex items-center gap-2 px-5 py-3 bg-color-3 text-bg-primary font-medium hover:bg-color-accent-2 transition-all duration-normal border-l border-t border-bg-primary w-full ${
        isNext ? 'flex-row justify-center' : 'flex-row-reverse justify-center'
      }`}
    >
      {isNext ? (
        <ArrowRight className="w-4 h-4 transition-transform duration-normal group-hover:translate-x-1" />
      ) : (
        <ArrowLeft className="w-4 h-4 transition-transform duration-normal group-hover:-translate-x-1" />
      )}
      <span>{label}</span>
    </button>
  );
};

export default WeekNavButton;
