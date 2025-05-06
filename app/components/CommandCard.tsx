
// File: src/components/CommandCard.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Command } from '../data/frameworks';

interface CommandCardProps {
  command: Command;
  index: number;
  options?: string[];
}

export default function CommandCard({ command, index }: CommandCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command.command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition duration-200"
    >
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-medium text-gray-800 truncate">{command.title}</h3>
          <div className="relative group">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={copyToClipboard}
            className="text-gray-400 hover:text-blue-500 focus:outline-none"
            aria-label={copied ? "Copied" : "Copy to clipboard"}
          >
            {copied ? (
            <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            )}
            <span className=" px-2 py-1 bg-gray-800 text-white text-xs rounded z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {copied ? "Copied!" : "Copy "}
            </span>
          </motion.button>
           
          </div>
        </div>
        <div className="bg-gray-50 rounded p-3 mb-3 font-mono text-sm text-gray-800 overflow-x-auto">
          {command.command}
        </div>
        <p className="text-sm text-gray-600">{command.description}</p>
        {command.options && command.options.length > 0 && (
          <div className="mt-3">
            <details className="text-sm">
              <summary className="cursor-pointer text-blue-500 hover:text-blue-600">Options</summary>
              <ul className="mt-2 pl-5 space-y-1 list-disc text-gray-600">
                {command.options.map((option, idx) => (
                  <li key={idx}>{option}</li>
                ))}
              </ul>
            </details>
          </div>
        )}
      </div>
    </motion.div>
  );
}