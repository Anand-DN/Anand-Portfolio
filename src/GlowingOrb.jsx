import { motion } from "framer-motion";

const GlowingOrb = ({ className = "" }) => {
  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Main orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(59, 130, 246, 0.3) 30%, rgba(16, 185, 129, 0.2) 60%, transparent 100%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [100, window.innerWidth - 400, 100],
          y: [100, window.innerHeight - 400, 100],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary orb */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{
          x: [window.innerWidth - 300, 50, window.innerWidth - 300],
          y: [50, window.innerHeight - 300, 50],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Tertiary orb */}
      <motion.div
        className="absolute w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 80%)",
          filter: "blur(25px)",
        }}
        animate={{
          x: [window.innerWidth / 2, window.innerWidth - 200, window.innerWidth / 2],
          y: [window.innerHeight - 200, 100, window.innerHeight - 200],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
};

export default GlowingOrb;
