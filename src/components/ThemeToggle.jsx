import { AnimatePresence, motion } from "framer-motion";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import Magnet from '../Magnet';

const themeOptions = [
  { value: 'light', icon: Sun, label: 'Light', color: 'text-yellow-400' },
  { value: 'dark', icon: Moon, label: 'Dark', color: 'text-blue-400' },
  { value: 'system', icon: Monitor, label: 'System', color: 'text-purple-400' }
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Magnet magnetStrength={3} padding={50}>
      <motion.div
        className="relative z-50 group"
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="relative">
          {/* Animated background glow */}
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur-xl opacity-30 group-hover:opacity-60 transition-all duration-700 animate-gradient-xy animate-pulse"></div>
          
          {/* Main container */}
          <div className="relative rounded-2xl border-2 border-white/20 bg-black/20 dark:bg-white/10 backdrop-blur-xl p-2 shadow-2xl">
            <div className="flex gap-1">
              {themeOptions.map((option) => {
                const Icon = option.icon;
                const isActive = theme === option.value;
                
                return (
                  <motion.button
                    key={option.value}
                    onClick={() => setTheme(option.value)}
                    className={`relative p-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-white/60 hover:text-white/80'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Switch to ${option.label} theme`}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600"
                        layoutId="activeTheme"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    
                    <div className="relative z-10">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={option.value}
                          initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                          animate={{ rotate: 0, opacity: 1, scale: 1 }}
                          exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className={`h-5 w-5 ${isActive ? 'text-white' : option.color}`} />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-black/80 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap">
                        {option.label}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </Magnet>
  );
}
