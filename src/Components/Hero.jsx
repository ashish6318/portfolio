import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);
    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: mousePosition.x - 16, // Offset to center the cursor element
      y: mousePosition.y - 16, // Offset to center the cursor element
    },
  };

  return (
    <div className='pointer-events-none'> {/* Assuming this is for a specific layering effect */}
      {/* Custom cursor effect for larger screens */}
      <div className='ss:block h-0 hidden'>
        <motion.div
          variants={variants}
          animate={'visible'}
          className='cursor pointer-events-none fixed z-30 rounded-full w-5 h-5 top-0 left-0 bg-[#131312b5]'
          style={{
            // Ensure the cursor is truly centered if using transform
            // transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)`
            // The current x, y in variants might be sufficient.
          }}
        ></motion.div>
      </div>

      <div id='hero' className='w-full overflow-visible h-screen flex flex-col justify-center items-center z-10'>
        <h1 className='overflow-visible font-caveat px-3 font-bold ss:text-[130px] text-[90px] ss:leading-[150px] leading-[92px] herotext text-center'>
          {/* Ashish Rajput */}
          Ashish Rajput
        </h1>
        <p className='max-w-[600px] sm:text-[36px] text-[25px] font-poppins text-center pt-4'>
          An Engineering Student & <br /> Web Developer.
        </p>
      </div>
    </div>
  );
};

export default Hero;
