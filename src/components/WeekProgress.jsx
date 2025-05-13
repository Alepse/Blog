import React from 'react';
import { motion } from 'framer-motion';

const WeekProgress = ({ currentWeek }) => {
  const totalWeeks = 11;
  const progressPercentage = (currentWeek / totalWeeks) * 100;

  return (
    <div className="bg-bg-secondary p-6 border-l-4 border-t-4 border-color-3 shadow-card">
      <h3 className="text-lg font-bold text-color-1 mb-4 font-secondary">Progress Tracker</h3>
      
      <div className="mb-2 flex justify-between items-center">
        <span className="text-sm font-medium text-color-2">Week {currentWeek} of {totalWeeks}</span>
        <span className="text-sm font-bold text-color-3">{Math.round(progressPercentage)}%</span>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-2 bg-bg-tertiary/50 overflow-hidden rounded-sm">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-full bg-color-3"
        ></motion.div>
      </div>
      
      {/* Week indicators */}
      <div className="mt-4 flex justify-between">
        {Array.from({ length: totalWeeks }).map((_, index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full ${
              index + 1 <= currentWeek 
                ? 'bg-color-3' 
                : 'bg-bg-tertiary'
            }`}
          ></div>
        ))}
      </div>
      
      <div className="mt-3 flex justify-between text-[10px] text-color-2">
        <span>Start</span>
        <span>Midpoint</span>
        <span>Complete</span>
      </div>
    </div>
  );
};

export default WeekProgress;
