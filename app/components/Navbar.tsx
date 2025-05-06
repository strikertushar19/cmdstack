"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { getAuth, signOut, onAuthStateChanged, User } from "firebase/auth";
import { app } from "../../firebase"; // Make sure this path is correct

export default function Navbar({ darkMode = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleSignOut = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
      // Optional: Redirect after sign out
      // router.push('/');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav
      className={`${
        darkMode
          ? "bg-black border-b border-blue-600/30 shadow-blue-600/10"
          : "bg-white"
      } shadow-sm`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="cmdstack logo"
              
              width={40}
              height={38}
              className="mr-2 bg-black"
            />
            <Link href="/" className="flex items-center space-x-2">
              <span
                className={`text-xl font-extrabold style1 ${
                  darkMode ? "text-blue-600" : "text-gray-800"
                }`}
              >
                CmdStack
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className={`${
                  darkMode ? "text-blue-600/80 " : "text-gray-700 "
                } px-3 py-2 rounded-md transition duration-200 font-bold text-sm border-b-2 border-transparent hover:border-teal-800`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${
                  darkMode ? "text-blue-600/80 " : "text-gray-700"
                } px-3 py-2 rounded-md transition duration-200 font-bold text-sm border-b-2 border-transparent hover:border-teal-800`}
              >
                About
              </Link>
              {/* <Link
                href="/contribute"
                className={`${
                  darkMode
                    ? "text-blue-600/80 hover:text-blue-500"
                    : "text-gray-700 hover:text-blue-500"
                } px-3 py-2 rounded-md transition duration-200`}
              >
                Contribute
              </Link>
               */}
              {!loading &&
                (user ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSignOut}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md transition duration-200"
                  >
                    Sign Out
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md transition duration-200"
                  >
                    <Link href="/signup">Sign Up</Link>
                  </motion.button>
                ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                darkMode
                  ? "text-blue-600 hover:text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              } focus:outline-none`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden ${
            darkMode ? "bg-black border-b border-blue-600/30" : "bg-white"
          } shadow-inner`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`block ${
                darkMode ? "text-blue-600/80 " : "text-gray-700"
              } px-3 py-2 rounded-md font-bold text-sm border-b-2 border-transparent hover:border-teal-500`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block ${
                darkMode ? "text-blue-600/80 " : "text-gray-700 "
              } px-3 py-2 rounded-md font-bold text-sm border-b-2 border-transparent hover:border-teal-500`}
            >
              About
            </Link>
            {/* <Link
              href="/contribute"
              className={`block ${
                darkMode
                  ? "text-blue-600/80 hover:text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              } px-3 py-2 rounded-md font-bold text-sm border-b-2 border-transparent hover:border-teal-500`}
            >
              Contribute
            </Link> */}
            {!loading &&
              (user ? (
                <button
                  onClick={handleSignOut}
                  className="w-full text-left bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-2 rounded-md"
                >
                  Sign Out
                </button>
              ) : (
                <Link href="/signup">
                  <button className="w-full text-left bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-2 rounded-md">
                    Sign Up
                  </button>
                </Link>
              ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
