'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const generateStyles = () => {
      const count = number || 5;
      const windowWidth =
        typeof window !== 'undefined' ? window.innerWidth : 1500;
      return new Array(count).fill(true).map(() => ({
        top: '-40px',
        left: Math.floor(Math.random() * windowWidth) + 'px',
        animationDelay: Math.random() * 5 + 's',
        animationDuration: Math.floor(Math.random() * 5 + 5) + 's',
      }));
    };

    // Initial styles
    setMeteorStyles(generateStyles());

    // Handle window resize
    const handleResize = () => {
      setMeteorStyles(generateStyles());
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [number]);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      {meteorStyles.map((style, idx) => (
        <motion.span
          key={'meteor' + idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: Math.random() * 0.5 }}
          className={cn(
            'animate-meteor-effect absolute z-10 h-0.25 w-0.25 rotate-[55deg] rounded-[9999px] bg-primary',
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-primary before:to-transparent before:content-['']",
            className
          )}
          style={style}
        ></motion.span>
      ))}
    </div>
  );
};
