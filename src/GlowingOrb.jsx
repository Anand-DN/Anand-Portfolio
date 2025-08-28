import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const GlowingOrb = ({ className = "" }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  
  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Main orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(59, 130, 246, 0.15) 30%, rgba(16, 185, 129, 0.1) 60%, transparent 100%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [100, Math.max(windowSize.width - 400, 100), 100],
          y: [100, Math.max(windowSize.height - 400, 100), 100],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
      />
      
      {/* Secondary orb */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(168, 85, 247, 0.1) 40%, transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{
          x: [Math.max(windowSize.width - 300, 50), 50, Math.max(windowSize.width - 300, 50)],
          y: [50, Math.max(windowSize.height - 300, 50), 50],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
          repeatType: "reverse",
        }}
      />
      
      {/* Tertiary orb */}
      <motion.div
        className="absolute w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 80%)",
          filter: "blur(25px)",
        }}
        animate={{
          x: [windowSize.width / 2, Math.max(windowSize.width - 200, windowSize.width / 2), windowSize.width / 2],
          y: [Math.max(windowSize.height - 200, 100), 100, Math.max(windowSize.height - 200, 100)],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

export default GlowingOrb;