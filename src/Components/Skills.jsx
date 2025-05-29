import React, { useEffect } from 'react'
// import a from '../assets/1.jpg'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'



const skill = [
  {
    "id": 1,
    "name": 'HTML',
  },
  {
    "id": 2,
    "name": 'CSS',

  },
  {
    "id": 3,
    "name": 'Javascript',
  },
  {
    "id": 4,
    "name": 'React.js',
    
  },
  {
    "id": 5,
    "name": 'Node.js',
  },
  {
    "id": 6,
    "name": 'Express.js',
  },
  {
    "id": 7,
    "name": 'Next.js',
  },
  {
    "id": 8,
    "name": 'MongoDB',
  },
  {
    "id": 9,
    "name": 'C++',
  },
  {
    "id": 10,
    "name": 'C',
  },
  {
    "id": 11,
    "name": 'Python',
  },
  {
    "id": 12,
    "name": 'SaSS',
  },
  {
    "id": 13,
    "name": 'Tailwind CSS',

  },
  {
    "id": 14,
    "name": 'DBMS',

  },
  {
    "id": 15,
    "name": 'OS',

  },
  {
    "id": 16,
    "name": 'CN',

  },
  {
    "id": 17,
    "name": 'OOP',

  },
  
]

const Skills = () => {

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id='skills' className='h-auto min-h-[100vh] pointer-events-none w-full py-6 sm:px-20 px-4'>
      <div className=''>
        <h1 className='sm:text-[90px] text-[60px]'>Skills.</h1>
        <div className='max-w-[600px] sm:text-[26px] text-[23px] my-10'>
        Proficient in MERN stack development and passionate about entrepreneurship. Currently focused on Data structure and Algorithms
        </div>
        <div ref={ref} className='flex flex-wrap '>

          {
            skill.map((e) =>
              <motion.div
                initial='hidden'
                variants={{
                  hidden: { opacity: 0, x: -30,y:-5 },
                  visible: { opacity: 1, x: 0, y: 0 }
                }}
                transition={{ duration: 0.6, delay: 0.3 * e.id ,type:'spring' }}
                animate={controls}

                key={e.id} className={`px-4 py-2 rounded-md bg-[#131312] text-[30px] text-[#fff] m-2 flex items-center`} >
                <span className='pr-2 ss:text-[32px] text-[20px]' ><span className='text-[#8e8e8a]'>#</span> {e.name} </span>
              </motion.div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Skills
