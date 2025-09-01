import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const NeuralNetwork = ({ className = "" }) => {
  const [connections, setConnections] = useState([]);
  
  const nodes = useMemo(() => [
    // Input layer
    { id: 1, x: 10, y: 20, layer: 0 },
    { id: 2, x: 10, y: 40, layer: 0 },
    { id: 3, x: 10, y: 60, layer: 0 },
    { id: 4, x: 10, y: 80, layer: 0 },
    
    // Hidden layer 1
    { id: 5, x: 35, y: 15, layer: 1 },
    { id: 6, x: 35, y: 35, layer: 1 },
    { id: 7, x: 35, y: 55, layer: 1 },
    { id: 8, x: 35, y: 75, layer: 1 },
    { id: 9, x: 35, y: 85, layer: 1 },
    
    // Hidden layer 2
    { id: 10, x: 65, y: 25, layer: 2 },
    { id: 11, x: 65, y: 45, layer: 2 },
    { id: 12, x: 65, y: 65, layer: 2 },
    
    // Output layer
    { id: 13, x: 90, y: 35, layer: 3 },
    { id: 14, x: 90, y: 55, layer: 3 },
  ], []);

  useEffect(() => {
    const newConnections = [];
    nodes.forEach(node => {
      nodes.forEach(targetNode => {
        if (targetNode.layer === node.layer + 1) {
          newConnections.push({
            from: node,
            to: targetNode,
            weight: Math.random(),
            active: Math.random() > 0.3
          });
        }
      });
    });
    setConnections(newConnections);
  }, [nodes]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Connections */}
        {connections.map((conn, index) => (
          <motion.line
            key={index}
            x1={conn.from.x}
            y1={conn.from.y}
            x2={conn.to.x}
            y2={conn.to.y}
            stroke={conn.active ? "url(#connectionGradient)" : "rgba(255,255,255,0.1)"}
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: conn.active ? 0.8 : 0.3,
              stroke: conn.active ? "url(#connectionGradient)" : "rgba(255,255,255,0.1)"
            }}
            transition={{ 
              duration: 2, 
              delay: index * 0.05,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: Math.random() * 2
            }}
          />
        ))}
        
        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r="1.5"
            fill="url(#nodeGradient)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2 + Math.random() * 3
            }}
            whileHover={{ scale: 1.5 }}
          />
        ))}
        
        {/* Gradients */}
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
          </linearGradient>
          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
          </radialGradient>
        </defs>
      </svg>
      
      {/* Floating data particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              x: [0, 200, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NeuralNetwork;