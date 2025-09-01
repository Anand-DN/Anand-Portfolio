import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const options: { name: 'light' | 'dark' | 'system'; icon: JSX.Element }[] = [
    { name: 'light', icon: <Sun className="w-5 h-5" /> },
    { name: 'dark', icon: <Moon className="w-5 h-5" /> },
    { name: 'system', icon: <Laptop className="w-5 h-5" /> },
  ];

  return (
    <div className="flex items-center p-1 bg-gray-200 dark:bg-dark-300 rounded-full">
      {options.map((option) => (
        <button
          key={option.name}
          onClick={() => setTheme(option.name)}
          className={`relative p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none`}
          aria-label={`Switch to ${option.name} theme`}
        >
          {theme === option.name && (
            <motion.div
              layoutId="theme-active-bg"
              className="absolute inset-0 bg-white dark:bg-dark-200 rounded-full shadow"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{option.icon}</span>
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
