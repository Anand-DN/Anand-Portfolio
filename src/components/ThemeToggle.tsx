import { motion } from "framer-motion";
import { Laptop, Moon, Sun } from "lucide-react";
import React from "react";
import { useTheme } from "../hooks/use-theme";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center p-1 bg-gray-200 dark:bg-dark-300 rounded-full">
      <button
        onClick={() => setTheme("light")}
        className={`relative p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none ${
          theme === "light" ? "z-10" : ""
        }`}
        aria-label="Switch to light theme"
      >
        {theme === "light" && (
          <motion.div
            layoutId="theme-active-bg"
            className="absolute inset-0 bg-white dark:bg-dark-200 rounded-full shadow"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative z-10">
          <Sun className="w-4 h-4" />
        </span>
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`relative p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none ${
          theme === "dark" ? "z-10" : ""
        }`}
        aria-label="Switch to dark theme"
      >
        {theme === "dark" && (
          <motion.div
            layoutId="theme-active-bg"
            className="absolute inset-0 bg-white dark:bg-dark-200 rounded-full shadow"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative z-10">
          <Moon className="w-4 h-4" />
        </span>
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`relative p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none ${
          theme === "system" ? "z-10" : ""
        }`}
        aria-label="Switch to system theme"
      >
        {theme === "system" && (
          <motion.div
            layoutId="theme-active-bg"
            className="absolute inset-0 bg-white dark:bg-dark-200 rounded-full shadow"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative z-10">
          <Laptop className="w-4 h-4" />
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
