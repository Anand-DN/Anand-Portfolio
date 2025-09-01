import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const GlitchText = ({ 
  children, 
  className = "", 
  intensity = 0.5,
  speed = 2,
  colors = ['#ff0000', '#00ff00', '#0000ff'],
  ...props 
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000 / speed);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      {...props}
    >
      {/* Main text */}
      <motion.span
        className="relative z-10"
        animate={isGlitching ? {
          x: [0, -2, 2, -1, 1, 0],
          y: [0, 1, -1, 2, -2, 0],
        } : {}}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      
      {/* Glitch layers */}
      {isGlitching && colors.map((color, index) => (
        <motion.span
          key={index}
          className="absolute inset-0 z-0"
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, intensity, 0],
            x: [0, (index + 1) * 2, -(index + 1) * 2, 0],
            y: [0, -(index + 1), (index + 1), 0],
          }}
          transition={{ 
            duration: 0.2,
            delay: index * 0.05,
          }}
        >
          {children}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default GlitchText;