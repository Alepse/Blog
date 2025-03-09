import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className='relative w-full h-screen bg-gradient-to-br from-1 via-3 to-pink-4'>
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80")] bg-cover bg-center mix-blend-overlay opacity-30' />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70' />
      </div>
      
      <div className='relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center'>
        <div className='text-center space-y-8'>
          <h1 className='text-7xl font-bold text-white mb-6 font-secondary tracking-tight'>
            <span className='block text-2xl text-yellow-100 mb-4'>Journey Through</span>
            My Internship
            <span className='block text-5xl bg-gradient-to-r from-3 to-4 bg-clip-text text-transparent mt-2'>
              Training Experience
            </span>
          </h1>
          <p className='text-xl text-white max-w-2xl mx-auto leading-relaxed'>
            Follow my journey through weekly updates as I learn, grow, and contribute 
            during my transformative internship experience.
          </p>
          <div className='flex gap-6 justify-center mt-8'>
            <button 
              onClick={scrollToContent}
              className='group flex items-center gap-2 px-6 py-3 bg-blue-1 hover:bg-1 
                       text-white rounded-full backdrop-blur-sm transition-all duration-300
                       border border-4 hover:border-3'
            >
              <span>Explore My Journey</span>
              <ChevronDown className='group-hover:translate-y-1 transition-transform duration-300' />
            </button>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-100 to-transparent' />
    </div>
  );
};

export default Hero;