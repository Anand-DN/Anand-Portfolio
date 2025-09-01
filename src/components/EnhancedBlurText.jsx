import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

const EnhancedBlurText = ({
  text = '',
  delay = 100,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  onAnimationComplete,
  stepDuration = 0.4,
  glowEffect = true,
  particleEffect = false,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const variants = useMemo(() => ({
    hidden: {
      filter: 'blur(12px)',
      opacity: 0,
      y: direction === 'top' ? -30 : 30,
      scale: 0.9,
      rotateX: direction === 'top' ? -15 : 15,
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
    }
  }), [direction]);

  return (
    <div
      ref={ref}
      className={`enhanced-blur-text ${className} flex flex-wrap`}
    >
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          className={`inline-block will-change-[transform,filter,opacity] ${
            glowEffect ? 'hover:text-glow transition-all duration-300' : ''
          }`}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{
            duration: stepDuration,
            delay: (index * delay) / 1000,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          onAnimationComplete={
            index === elements.length - 1 ? onAnimationComplete : undefined
          }
          whileHover={glowEffect ? {
            textShadow: "0 0 8px currentColor",
            scale: 1.05,
          } : {}}
        >
          {segment === ' ' ? '\u00A0' : segment}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </div>
  );
};

export default EnhancedBlurText;