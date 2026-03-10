
import React, { useState, useEffect, useRef } from 'react';
import { generateSrcSet, getOptimizedUrl } from '@/utils/optimizeImage.js';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  imgClassName = '',
  widths = [320, 640, 768, 1024, 1280],
  width,
  height,
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) {
      setIsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = imgRef.current;
          if (img) {
            img.src = img.dataset.src;
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
            }
            observer.unobserve(img);
          }
        }
      },
      { rootMargin: '200px 0px' } // Load slightly before it comes into view
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const optimizedSrc = getOptimizedUrl(src);
  const srcSet = generateSrcSet(src, widths);

  if (priority) {
    return (
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${imgClassName}`.trim()}
        fetchPriority="high"
        {...props}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`} style={{ width, height }}>
      <img
        ref={imgRef}
        data-src={optimizedSrc}
        data-srcset={srcSet}
        alt={alt}
        width={width}
        height={height}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </div>
  );
};

export default LazyImage;
