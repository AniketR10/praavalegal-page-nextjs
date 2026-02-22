'use client';

import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Gavel, FileText, CheckSquare, Receipt } from 'lucide-react';
import { FloatingCard } from '@/components/FloatingCard';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function HeroSection() {
  return (
    <main className={`min-h-screen w-full overflow-hidden bg-background-custom dark:bg-[#0B0F19] transition-colors duration-500 ${font.className} selection:bg-blue-200`}>
      
      <ThemeToggle/>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: '30%', opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="absolute right-0 top-[10%] h-22.5 w-100 rounded-l-full bg-[#E8EDF8] dark:bg-slate-800/20 lg:h-27.5 lg:w-125"
        />
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: '10%', opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="absolute right-0 top-[30%] h-22.5 w-112.5 rounded-l-full bg-[#E8EDF8] dark:bg-slate-800/20 lg:h-27.5 lg:w-150"
        />
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: '40%', opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
          className="absolute right-0 top-[50%] h-22.5 w-87.5 rounded-l-full bg-[#E8EDF8] dark:bg-slate-800/20 lg:h-27.5 lg:w-112.5"
        />

        <motion.div
          initial={{ x: '-100%', opacity: 0, rotate: -8 }}
          animate={{ x: '-30%', opacity: 1, rotate: -8 }}
          transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          className="absolute left-0 top-[30%] h-20 w-87.5 origin-left rounded-r-full bg-[#E8EDF8] dark:bg-slate-800/20 lg:h-25 lg:w-112.5"
        />
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '-40%', opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          className="absolute left-0 top-[45%] h-20 w-75 rounded-r-full bg-[#E8EDF8] dark:bg-slate-800/20 lg:h-25 lg:w-100"
        />
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '-20%', opacity: 1 }}
          transition={{ duration: 1.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
          className="absolute left-0 bottom-[15%] h-22.5 w-112.5 rounded-r-full bg-[#E8EDF8] dark:bg-slate-800/20 lg:h-30 lg:w-150"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-8 lg:py-28">
        
        <div className="relative z-20 flex flex-col gap-6 text-center lg:-mt-12 lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-light leading-[1.15] tracking-tight text-text-main lg:whitespace-nowrap lg:text-[4.2rem]"
          >
            A single platform to <br />
            <span className="font-semibold text-text-bold">manage</span> every part&nbsp;of <br />
            your <span className="font-semibold text-text-bold">legal work</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base leading-relaxed text-text-para lg:text-[1.1rem]"
          >
            Track matters, coordinate schedules, manage <br className="hidden lg:block" />
            clients, centralize documents, and handle <br className="hidden lg:block" />
            communication - all in one system.
          </motion.p>
        </div>

        <div className="relative z-30 h-150 w-full perspective-1000 lg:h-175 lg:-ml-16 lg:mt-8">
          
          <FloatingCard 
            variant="blue" 
            rotation={8} 
            className="left-[10%] top-[10%] w-75 justify-start px-6 py-5 lg:left-[5%] lg:top-[28%]"
            delay={0.6}
          >
            <Receipt className="h-6 w-6" strokeWidth={2} />
            <span className="text-xl font-semibold tracking-wide">Billing</span>
          </FloatingCard>

          <FloatingCard 
            variant="orange" 
            rotation={-12} 
            className="left-[0%] top-[30%] w-75 justify-start px-6 py-5 lg:-left-[46%] lg:top-[40%]"
            delay={0.8}
          >
            <div className="rounded-md bg-white/20 p-1">
              <Gavel className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">Matters</span>
          </FloatingCard>

         <FloatingCard 
            variant="portal" 
            rotation={3} 
            className="left-[25%] top-[40%] z-20 w-75 items-start! rounded-full! py-2! pl-3! pr-6! lg:left-[8%] lg:top-[44%]"
            delay={1.0}
          >
            <div className="mt-4 h-8 w-1 shrink-0 rounded-full bg-orange-500" />
            <div className="relative mt-3 shrink-0">
              <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-transparent bg-slate-200 dark:bg-slate-700">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=e2e8f0" alt="Avatar" />
              </div>
              <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-orange-500 ring-2 ring-[#9BA4E5] dark:ring-slate-800" />
            </div>
            <div className="flex flex-col text-xs">
              <span className="font-bold text-[#201C3A] dark:text-slate-200">John Doe - Portal</span>
              <p className="mt-0.5 text-xs leading-snug text-[#5E648B] dark:text-slate-800">
                Hey! Could you please review a<br/> document for me?
              </p>
              <span className="mt-1 text-[10px] text-[#7E849A] dark:text-slate-500">MAT-2233 - 2 h ago</span>
            </div>
          </FloatingCard>

          <FloatingCard 
            variant="dark" 
            rotation={-2} 
            className="left-[5%] top-[60%] w-70 justify-start px-6 py-5 lg:-left-[16%] lg:top-[60%]"
            delay={1.2}
          >
            <CheckSquare className="h-5 w-5 text-[#F09A5C]" />
            <span className="text-lg font-medium text-[#F09A5C]">Tasks</span>
          </FloatingCard>

          <FloatingCard 
            variant="dark" 
            rotation={-8} 
            className="left-[35%] top-[72%] w-75 justify-start px-6 py-5 lg:left-[38%] lg:top-[60%]"
            delay={1.4}
          >
            <FileText className="h-5 w-5 text-[#F09A5C]" />
            <span className="text-lg font-medium text-[#F09A5C]">Documents</span>
          </FloatingCard>

        </div>
      </div>
    </main>
  );
}