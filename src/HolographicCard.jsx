import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const HolographicCard = ({ 
  children, 
  className = "", 
  intensity = 0.3,
  ...props 
}) => {
  const cardRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isMobile) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Update CSS custom properties for the holographic effect
    cardRef.current.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    cardRef.current.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || isMobile) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative overflow-hidden rounded-2xl border border-white/20 
        bg-gradient-to-br from-white/10 via-white/5 to-transparent 
        backdrop-blur-xl transition-all duration-300 ease-out
        before:absolute before:inset-0 before:rounded-2xl
        before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-purple-500/20
        before:opacity-0 before:transition-opacity before:duration-300
        hover:before:opacity-100 hover:shadow-2xl hover:shadow-purple-500/20
        ${className}
      `}
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        background: `
          radial-gradient(circle at var(--mouse-x) var(--mouse-y), 
            rgba(255, 255, 255, ${intensity}) 0%, 
            rgba(255, 255, 255, ${intensity * 0.3}) 25%, 
            transparent 50%
          ),
          linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.05) 50%, 
            transparent 100%
          )
        `
      }}
      {...props}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
      
      {/* Holographic shimmer effect */}
      <div 
        className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${!isMobile ? 'hover:opacity-100' : ''} pointer-events-none`}
        style={{
          background: `
            radial-gradient(circle at var(--mouse-x) var(--mouse-y), 
              rgba(147, 51, 234, 0.3) 0%, 
              rgba(59, 130, 246, 0.2) 25%, 
              rgba(16, 185, 129, 0.1) 50%, 
              transparent 70%
            )
          `
        }}
      />
    </motion.div>
  );
};

export default HolographicCard;