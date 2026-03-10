
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials.js';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { language } = useLanguage();

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(nextTestimonial, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div 
      className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-primary/10">
        <Quote className="w-24 h-24 rotate-180" />
      </div>
      
      <div className="relative h-[300px] sm:h-[250px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute w-full text-center px-8 sm:px-16"
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-6 h-6 ${i < Math.floor(testimonials[currentIndex].rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            
            <p className="text-xl sm:text-2xl text-gray-700 italic mb-8 leading-relaxed">
              "{testimonials[currentIndex].text[language]}"
            </p>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
              <p className="text-primary font-medium">{testimonials[currentIndex].location}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center mt-8 space-x-4">
        <button 
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all shadow-sm"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all shadow-sm"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
