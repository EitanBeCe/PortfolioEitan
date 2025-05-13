"use client";

import { useEffect, useRef, useState } from "react";
import { motion, MotionProps } from "framer-motion";

type LazyLoadProps = {
  children: React.ReactNode;
  delay?: number;
};

export const LazyLoad = ({ children, delay = 1000 }: LazyLoadProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return mounted ? <>{children}</> : null;
};

type LazyAnimatedProps = {
  children: React.ReactNode;
  className?: string;
  motionProps?: MotionProps;
  rootMargin?: string;
};

export const LazyAnimated = ({
  children,
  className,
  motionProps = {},
  rootMargin = "0px",
}: LazyAnimatedProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  if (!visible) return <div ref={ref} className={className} />;

  return (
    <motion.div
      ref={ref}
      className={className}
      // initial={{ opacity: 0, y: 30 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.6, ease: "easeOut" }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
