import React from 'react';
import { useScroll, useTransform, motion } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  // Adjust transformation range for desired parallax effect intensity
  const x = useTransform(scrollYProgress, [0, 1], [-200, 1000]); 

  return (
    <div id='about' className='sm:h-[80vh] pointer-events-none h-fit w-full overflow-hidden'>
      <div className='flex lg:flex-row flex-col items-center'>
        <motion.h1 
          style={{ x }} 
          className='sm:text-[240px] text-[100px] top-0 left-[-200px] text-[#0000004d] font-bold font-poppins'
        >
          About.
        </motion.h1>
        <p className='sm:text-[30px] text-[23px] px-10 sm:px-20 lg:px-10 pointer-events-auto'> {/* Added pointer-events-auto for text interaction if needed */}
         Currently an engineering student at NIT Surat, I'm passionate about coding practical solutions and building web applications. Outside of tech, I'm committed to fitness and enjoy listening to a wide range of music.
        </p>
      </div>
    </div>
  );
};

export default About;
