import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const CustomCursor = ({ variant }) => {
  const cursorRef = useRef(null);
  const secondaryCursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const secondaryCursor = secondaryCursorRef.current;
    if (!cursor || !secondaryCursor) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.1, ease: 'none' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.1, ease: 'none' });

    const xToSecondary = gsap.quickTo(secondaryCursor, 'x', { duration: 0.5, ease: 'power3.out' });
    const yToSecondary = gsap.quickTo(secondaryCursor, 'y', { duration: 0.5, ease: 'power3.out' });

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      xTo(clientX);
      yTo(clientY);
      xToSecondary(clientX);
      yToSecondary(clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const variants = {
    default: {
      scale: 1,
      backgroundColor: '#ddb314',
    },
    hover: {
      scale: 1.5,
      backgroundColor: '#ffffff',
    },
    product: {
      scale: 3,
      backgroundColor: 'rgba(221, 179, 20, 0.1)',
      border: '1px solid #ddb314',
    },
  };

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Primary Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gold-400 rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{ translateX: '-50%', translateY: '-50%' }}
      />
      {/* Secondary Ring/Blob */}
      <motion.div
        ref={secondaryCursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] border border-gold-400/30"
        style={{ translateX: '-50%', translateY: '-50%' }}
        animate={variant}
        variants={variants}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      />
    </>
  );
};

export default CustomCursor;
