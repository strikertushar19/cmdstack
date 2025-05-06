"use client";

import { useState, useEffect } from "react";
import { ReactNode } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../app/components/Navbar";
import SearchBar from "../app/components/SearchBar";
import CommandCard from "../app/components/CommandCard";
import FrameworkSidebar from "../app/components/FrameworkSidebar";
import { frameworks } from "../app/data/frameworks";

// At the top of SearchBar.tsx
interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
interface RequirementInfo {
  REQUIRED?: string[];
  Link?: string;
}

interface Command {
  title: string;
  command: string;
  description: string;
  options?: string[];
  [key: string]: any;
}

const colorClasses = [
  "bg-teal-50 text-teal-700 border-teal-400",
  "bg-blue-50 text-blue-700 border-blue-400",
  "bg-amber-50 text-amber-700 border-amber-400",
  "bg-emerald-50 text-emerald-700 border-emerald-400",
  "bg-sky-50 text-sky-700 border-sky-400",
  "bg-indigo-50 text-indigo-700 border-indigo-400",
  "bg-rose-50 text-rose-700 border-rose-400",
  "bg-cyan-50 text-cyan-700 border-cyan-400",
];

export default function Home() {
  const [activeFramework, setActiveFramework] = useState("nextjs");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCommands, setFilteredCommands] = useState<Command[]>(
    frameworks[0].commands
  );

  const [isLoading, setIsLoading] = useState(false);
  const [requiredTools, setRequiredTools] = useState<RequirementInfo[]>([]);
  const [isGlobalSearch, setIsGlobalSearch] = useState(false);

  useEffect(() => {
    // Add loading state
    setIsLoading(true);

    // Get the active framework
    const framework = frameworks.find((f) => f.id === activeFramework);

    if (framework) {
      setRequiredTools([
        {
          REQUIRED: framework.REQUIRED,
          Link: framework.Link,
        },
      ]);
    } else {
      setRequiredTools([]);
    }

    // Simulate a delay for the skeleton effect to be visible
    const timer = setTimeout(() => {
      if (searchTerm) {
        // If there's a search term, we might want to search globally
        if (isGlobalSearch || searchTerm.length > 2) {
          // Auto-enable global search when more than 2 chars
          setIsGlobalSearch(true);
          // Search across all frameworks
          const allMatchingCommands = frameworks.flatMap((framework) => {
            return framework.commands
              .filter(
                (cmd) =>
                  cmd.command
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  cmd.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
              )
              .map((cmd) => ({
                ...cmd,
                framework: framework.name, // Add framework name to each command
              }));
          });
          setFilteredCommands(allMatchingCommands);
        } else {
          // Search only in the active framework
          setFilteredCommands(
            framework?.commands.filter(
              (cmd) =>
                cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
                cmd.description.toLowerCase().includes(searchTerm.toLowerCase())
            ) || []
          );
        }
      } else {
        // If no search term, show only the active framework's commands
        setIsGlobalSearch(false);
        setFilteredCommands(framework?.commands || []);
      }
      setIsLoading(false);
    }, 600); // 600ms delay

    return () => clearTimeout(timer);
  }, [activeFramework, searchTerm]);

  // Skeleton card component
  const SkeletonCard = () => (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 h-40 border-l-4 border-cyan-400"
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 0.8 }}
      transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
    >
      <div className="h-6 bg-gradient-to-r from-cyan-100 to-sky-100 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gradient-to-r from-sky-50 to-teal-50 rounded w-full mb-2"></div>
      <div className="h-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded w-5/6 mb-2"></div>
      <div className="h-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded w-4/6"></div>
      <div className="flex justify-end mt-4">
        <div className="h-8 bg-gradient-to-r from-cyan-100 to-sky-100 rounded w-1/4"></div>
      </div>
    </motion.div>
  );

  const getRandomColorClass = () => {
    return colorClasses[Math.floor(Math.random() * colorClasses.length)];
  };

  const colorClass = getRandomColorClass();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-slate-50 to-teal-50 text-slate-800">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-clip-text bg-gradient-to-r style1  mb-6">
            CmdStack Dev Commands Hub
          </h1>
          <p className="text-xl text-cyan-700 max-w-2xl mx-auto font-bold">
            Your one-stop resource for commands across popular development
            frameworks
          </p>
        </motion.div>

        <div className="rounded-xl p-4 mb-8">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {isGlobalSearch && searchTerm && (
            <div className="mt-2 text-sm text-cyan-600">
              Showing results from all frameworks
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <FrameworkSidebar
            frameworks={frameworks}
            activeFramework={activeFramework}
            setActiveFramework={setActiveFramework}
          />

          <div className="flex-1">
            {requiredTools.length > 0 && !isGlobalSearch && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`mb-6 p-4 rounded-lg shadow-sm border-l-4 ${colorClass} backdrop-blur-sm bg-white/80`}
              >
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Required Tools
                </h3>
                <ul className="space-y-1">
                  {requiredTools.map((tool, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span>•</span>
                      <div>
                        {tool.REQUIRED && (
                          <span className="font-medium">
                            {tool.REQUIRED.join(", ")}
                          </span>
                        )}
                        {tool.Link && (
                          <div>
                            <a
                              href={tool.Link}
                              className="text-blue-600 hover:underline font-bold"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Installation link
                            </a>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
            <AnimatePresence mode="wait">
              <motion.div
                key={
                  activeFramework +
                  searchTerm +
                  (isLoading ? "loading" : "loaded")
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {isLoading ? (
                  // Display skeleton cards while loading
                  Array.from({ length: 6 }).map((_, index) => (
                    <SkeletonCard key={`skeleton-${index}`} />
                  ))
                ) : filteredCommands.length > 0 ? (
                  filteredCommands.map((command, index) => (
                    <CommandCard key={index} command={command} index={index} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-sky-100">
                    <p className="text-cyan-600 text-lg">
                      No commands found matching "{searchTerm}"
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
