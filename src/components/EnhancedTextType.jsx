import { gsap } from "gsap";
import { createElement, useCallback, useEffect, useMemo, useRef, useState } from "react";

const EnhancedTextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 1000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.8,
  onComplete,
  startOnVisible = false,
  blurEffect = true,
  glowEffect = true,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const [isTyping, setIsTyping] = useState(false);
  
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  // Enhanced cursor animation with glow
  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        ease: "power2.inOut",
      })
      .to(cursorRef.current, {
        opacity: 1,
        duration: cursorBlinkDuration,
        ease: "power2.inOut",
      });

      // Add glow effect when typing
      if (glowEffect && isTyping) {
        gsap.to(cursorRef.current, {
          textShadow: "0 0 10px currentColor, 0 0 20px currentColor",
          duration: 0.3,
        });
      } else {
        gsap.to(cursorRef.current, {
          textShadow: "none",
          duration: 0.3,
        });
      }
    }
  }, [showCursor, cursorBlinkDuration, glowEffect, isTyping]);

  // Intersection observer for start on visible
  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  // Enhanced blur effect for each character
  useEffect(() => {
    if (blurEffect && textRef.current) {
      const chars = textRef.current.querySelectorAll('.char');
      chars.forEach((char, index) => {
        if (index < displayedText.length) {
          gsap.fromTo(char, 
            { 
              filter: "blur(8px)", 
              opacity: 0, 
              y: 20,
              scale: 0.8 
            },
            { 
              filter: "blur(0px)", 
              opacity: 1, 
              y: 0,
              scale: 1,
              duration: 0.6,
              delay: index * 0.02,
              ease: "back.out(1.7)"
            }
          );
        }
      });
    }
  }, [displayedText, blurEffect]);

  // Main typing logic
  useEffect(() => {
    if (!isVisible) return;

    let timeout;
    const currentText = textArray[currentTextIndex];

    const executeTypingAnimation = () => {
      if (isDeleting) {
        setIsTyping(true);
        if (displayedText === "") {
          setIsDeleting(false);
          setIsTyping(false);
          
          if (currentTextIndex === textArray.length - 1 && !loop) {
            if (onComplete) onComplete();
            return;
          }

          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < currentText.length) {
          setIsTyping(true);
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + currentText[currentCharIndex]);
            setCurrentCharIndex((prev) => prev + 1);
          }, typingSpeed);
        } else {
          setIsTyping(false);
          if (textArray.length > 1) {
            timeout = setTimeout(() => {
              setIsDeleting(true);
            }, pauseDuration);
          } else if (onComplete) {
            onComplete();
          }
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    onComplete,
  ]);

  // Split text into characters for blur effect
  const renderText = () => {
    if (!blurEffect) {
      return displayedText;
    }

    return displayedText.split('').map((char, index) => (
      <span 
        key={`${currentTextIndex}-${index}`}
        className="char inline-block"
        style={{ 
          filter: 'blur(0px)',
          transform: 'translateY(0px) scale(1)',
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `inline-block ${className}`,
      ...props,
    },
    <span 
      ref={textRef}
      className={`inline-block ${glowEffect && isTyping ? 'text-glow' : ''}`}
    >
      {renderText()}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={`ml-1 inline-block opacity-100 ${cursorClassName} ${
          glowEffect ? 'text-cyan-400' : ''
        }`}
        style={{
          textShadow: glowEffect && isTyping ? '0 0 10px currentColor' : 'none'
        }}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default EnhancedTextType;