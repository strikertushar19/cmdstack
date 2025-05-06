// File: src/components/FrameworkSidebar.tsx
"use client";

import { motion } from 'framer-motion';
import { Framework } from '../data/frameworks';
import { useState, useEffect } from 'react';

interface FrameworkSidebarProps {
  frameworks: Framework[];
  activeFramework: string;
  setActiveFramework: (id: string) => void;
}

export default function FrameworkSidebar({ 
  frameworks, 
  activeFramework, 
  setActiveFramework 
}: FrameworkSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFrameworks, setFilteredFrameworks] = useState(frameworks);
  
  useEffect(() => {
    const filtered = frameworks.filter(framework => 
      framework.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFrameworks(filtered);
  }, [searchQuery, frameworks]);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="w-full md:w-60 bg-white rounded-lg shadow-lg p-4"
    >
      <h2 className="text-lg  font-bold text-gray-800 mb-4">Frameworks</h2>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search frameworks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <div className="space-y-2">
        {filteredFrameworks.map((framework) => (
          <motion.button
            key={framework.id}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFramework(framework.id)}
            className={`w-full text-left px-3 py-2 rounded-md transition duration-200 ${
              activeFramework === framework.id
                ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-medium'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              <span className="w-6 h-6 mr-3 flex items-center justify-center">
                {framework.icon}
              </span>
              {framework.name}
            </div>
          </motion.button>
        ))}
        
        {filteredFrameworks.length === 0 && (
          <p className="text-sm text-gray-500 py-2 text-center">No frameworks found</p>
        )}
      </div>
    </motion.div>
  );
}
