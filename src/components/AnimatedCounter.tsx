import React from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  formatValue?: (value: number) => string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  from, 
  to, 
  duration = 2,
  formatValue = (value) => Math.round(value).toString()
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => formatValue(latest));
  
  useEffect(() => {
    if (isInView) {
      const animation = animate(count, to, { duration });
      return animation.stop;
    }
  }, [count, to, duration, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};