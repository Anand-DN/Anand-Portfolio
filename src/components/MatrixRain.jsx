import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const MatrixRain = ({ className = "", intensity = 0.3 }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const drops = useMemo(() => {
    if (!dimensions.width || !dimensions.height) return [];
    
    const columnWidth = 20;
    const columns = Math.floor(dimensions.width / columnWidth);
    
    return Array.from({ length: columns }, (_, i) => ({
      id: i,
      x: i * columnWidth,
      characters: Array.from({ length: 20 }, () => 
        String.fromCharCode(0x30A0 + Math.random() * 96)
      ),
      speed: 0.5 + Math.random() * 1.5,
      delay: Math.random() * 5,
    }));
  }, [dimensions]);

  if (!dimensions.width || !dimensions.height) return null;

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity: intensity }}>
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute text-green-400 font-mono text-sm"
          style={{ left: drop.x }}
          animate={{
            y: [0, dimensions.height + 100],
          }}
          transition={{
            duration: 10 / drop.speed,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {drop.characters.map((char, index) => (
            <motion.div
              key={index}
              className="block leading-tight"
              animate={{
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 2,
                delay: index * 0.1,
                repeat: Infinity,
              }}
            >
              {char}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default MatrixRain;
