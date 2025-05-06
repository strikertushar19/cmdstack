"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-black text-white py-8 mt-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="cmdstack logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <span className="text-xl style1 font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent ">
                  CmdStack
                </span>
              </div>
            </Link>
            <p className="mt-2 text-white text-sm">
              Empowering developers with modern solutions.
            </p>
          </div>

          <motion.div className="flex space-x-3 mt-4 md:mt-0">
            <Link
              href="https://github.com/strikertushar19"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-zinc-200 dark:bg-zinc-700 p-2 rounded-full"
              >
                <Github className="w-6 h-6" />
              </motion.div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/tushar-dogra-55b687240/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-zinc-200 dark:bg-zinc-700 p-2 rounded-full"
              >
                <Linkedin className="w-6 h-6" />
              </motion.div>
            </Link>
            <Link
              href="https://x.com/0Tushar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-zinc-200 dark:bg-zinc-700 p-2 rounded-full"
              >
                <Twitter className="w-6 h-6" />
              </motion.div>
            </Link>
            <Link
              href="mailto:tushardogra19@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-zinc-200 dark:bg-zinc-700 p-2 rounded-full"
              >
                <Mail className="w-6 h-6" />
              </motion.div>
            </Link>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white">
            &copy; {currentYear} cmdstack. Created by Tushar Dogra. All rights
            reserved.
          </div>
          <div className="text-xs text-white font-bold mt-4 md:mt-0 max-w-2xl text-center md:text-right">
            All product names, logos, and brands are property of their
            respective owners. All company, product and service names used in
            this website are for identification purposes only. {" "}
          </div>
        </div>
      </div> 
    </motion.footer>
  );
};

export default Footer;
