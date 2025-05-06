"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion';

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Navbar />
      <motion.div 
        className="container mx-auto px-4 py-12 max-w-5xl"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          variants={fadeIn}
        >
          About CmdStack
        </motion.h1>
        
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          variants={fadeIn}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-6">
            CmdStack helps developers save valuable time by providing a centralized repository of commands
            for popular development frameworks. We understand that searching through documentation can be 
            time-consuming, which is why we've created a platform where you can quickly find, copy, and 
            learn how to use essential commands.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="flex-1">
              <h3 className="text-xl font-medium mb-3">What We Offer</h3>
              <motion.ul 
                className="list-disc pl-5 space-y-2"
                variants={staggerChildren}
              >
                {['Comprehensive command collections for popular frameworks',
                  'One-click copy functionality for easy use',
                  'Video demonstrations showing commands in context',
                  'Concise command summaries and explanations',
                  'Immediate access without lengthy onboarding'].map((item, index) => (
                  <motion.li key={index} variants={fadeIn}>{item}</motion.li>
                ))}
              </motion.ul>
            </div>
            {/* <motion.div 
              className="flex-1"
              variants={fadeIn}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/command-demo.png" 
                  alt="CmdStack command demonstration"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </motion.div> */}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          variants={fadeIn}
        >
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {color: 'blue', number: '1', title: 'Search', desc: 'Find your framework on our homepage search bar'},
              {color: 'green', number: '2', title: 'View', desc: 'Browse command collections with explanations'},
              {color: 'purple', number: '3', title: 'Use', desc: 'Copy commands or watch demo videos to learn'}
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center p-4"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className={`bg-${step.color}-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-2xl font-bold">{step.number}</span>
                </motion.div>
                <h3 className="font-medium mb-2">{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6"
          variants={fadeIn}
        >
          <h2 className="text-2xl font-semibold mb-6">Why Choose CmdStack?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {color: 'indigo', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Time-Saving', desc: 'No more wasting hours searching through documentation'},
              {color: 'red', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', title: 'Organized Collection', desc: 'All commands neatly categorized by framework'},
              {color: 'yellow', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z', title: 'Visual Learning', desc: 'Video demos to see commands in practical contexts'},
              {color: 'teal', icon: 'M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Quick Access', desc: 'Direct path to commands without complex navigation'}
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-4"
                variants={fadeIn}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className={`bg-${feature.color}-100 p-3 rounded-full`}
                  whileHover={{ rotate: 10 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="font-medium mb-2">{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200">
            Start Exploring Commands
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}