import { motion } from "framer-motion";
import { Laptop, Moon, Sun } from "lucide-react";
import React from "react";
import { useTheme } from "../hooks/use-theme";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center p-1 bg-gray-200 dark:bg-dark-300 rounded-full transition-colors">
      <button
        onClick={() => setTheme("light")}
        className={`relative p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 ${
          theme === "light" ? "z-10" : ""
        }`}
        aria-label="Switch to light theme"
        title="Light mode"
      >
        {theme === "light" && (
          <motion.div
            layoutId="theme-active-bg"
            className="absolute inset-0 bg-white dark:bg-dark-200 rounded-full shadow-sm"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center justify-center">
          <Sun className="w-4 h-4" />
        </span>
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`relative p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 ${
          theme === "dark" ? "z-10" : ""
        }`}
        aria-label="Switch to dark theme"
        title="Dark mode"
      >
        {theme === "dark" && (
          <motion.div
            layoutId="theme-active-bg"
            className="absolute inset-0 bg-white dark:bg-dark-200 rounded-full shadow-sm"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center justify-center">
          <Moon className="w-4 h-4" />
        </span>
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`relative p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 ${
          theme === "system" ? "z-10" : ""
        }`}
        aria-label="Switch to system theme"
        title="System mode"
      >
        {theme === "system" && (
          <motion.div
            layoutId="theme-active-bg"
            className="absolute inset-0 bg-white dark:bg-dark-200 rounded-full shadow-sm"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center justify-center">
          <Laptop className="w-4 h-4" />
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
