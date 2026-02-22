'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const VARIANTS = {
  blue: 'bg-blue-600 text-white shadow-blue-900/20 dark:bg-blue-700',
  orange: 'bg-orange-500 text-white shadow-orange-900/20 dark:bg-orange-600',
  dark: 'bg-[#2D2B42] text-[#F09A5C] shadow-slate-900/20 dark:bg-[#1A1D27] dark:border dark:border-white/5', 
  portal: 'bg-[#9BA4E5] text-slate-900 shadow-indigo-900/10 dark:bg-[#8A93D4]', 
};

interface FloatingCardProps {
  variant?: keyof typeof VARIANTS;
  rotation?: number;
  className?: string;
  delay?: number;
  children: React.ReactNode;
}

export const FloatingCard = ({
  variant = 'blue',
  rotation = 0,
  className,
  delay = 0,
  children,
}: FloatingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{ 
        type: 'spring', 
        stiffness: 260, 
        damping: 20, 
        delay: delay 
      }}
      whileHover={{ 
        scale: 1.05, 
        rotate: rotation - 2, 
        transition: { duration: 0.2 } 
      }}
      className={cn(
        'absolute flex items-center gap-3 rounded-full px-6 py-4 shadow-xl backdrop-blur-sm transition-colors duration-300',
        VARIANTS[variant],
        className
      )}
      style={{
        zIndex: 10,
      }}
    >
      {children}
    </motion.div>
  );
};