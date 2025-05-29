import React, { useState } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { Button1, Button2 } from './Buttons'; // Assuming these are your styled button components

// NEW: Import your project images (replace with actual paths/names)
// C:\Users\rajpu\OneDrive\Desktop\portfolio\src\assets\Careercraft_ai.png
// C:\Users\rajpu\OneDrive\Desktop\portfolio\src\assets\Devlinkup.png
// C:\Users\rajpu\OneDrive\Desktop\portfolio\src\assets\face_mask_detection.png
// C:\Users\rajpu\OneDrive\Desktop\portfolio\src\assets\Taggle_luggage.png



import careerCraftAIImage from '../assets/Careercraft_ai.png'; // Corrected Casing
import devLinkupImage from '../assets/DevLinkup.png'; // Make sure 'Devlinkup.png' matches the actual filename case
import taggleImage from '../assets/Taggle_luggage.png'; // Make sure 'taggle_luggage.png' matches
import faceMaskImage from '../assets/face_mask_detection.png'; // Make sure 'facemask_placeholder.png' matches
import { RiH1 } from 'react-icons/ri';



const Projects = () => {
  const [p1, setp1] = useState(false); // CareerCraft AI
  const [p2, setp2] = useState(false); // DevLinkup
  const [p3, setp3] = useState(false); // Taggle E-commerce
  const [p4, setp4] = useState(false); // Face Mask Detection

  // Optional: Refine tag styling for better readability on dark background
  const tagStyle = "rounded-md bg-[#3A3A3A] text-[#D1D1D1] text-[14px] sm:text-[16px] flex items-center px-3 py-1 m-1.5 shadow-sm";
  const hashStyle = "text-[#777] pr-1";

  return (
    <div id='project' className='w-full mb-20 min-h-[100vh] sm:px-20 px-4 py-10'> {/* Added some padding-top */}
      <div className='h-full w-full'>
       <h1 className='sm:text-[90px] text-[60px] text-center sm:text-left text-slate-100 dark:text-black'>Projects.</h1>
<h1 className='sm:text-[20px] text-[16px] text-center sm:text-left text-slate-300 dark:text-slate-600 mb-8 sm:mb-12'>
  Here are some of THE key projects I've worked on.
</h1>
        <motion.div layout className='w-full justify-center flex sm:flex-row flex-col h-fit items-start flex-wrap'> {/* items-start for varying card heights */}

          {/* Project 1: CareerCraft AI */}
          <motion.div
            layout
            transition={{ layout: { type: 'spring', stiffness: 100, damping: 20 } }} // Smoother spring animation
            onClick={() => { setp1(!p1); setp2(false); setp3(false); setp4(false); }} // Close others when one opens
            className={`${p1 ? "w-full md:w-[90%] lg:w-[80%] h-auto" : "md:w-[45%] lg:w-[40%] h-auto"} 
                       flex cursor-pointer md:flex-col bg-[#1F2937] dark:bg-[#131312] text-slate-200 dark:text-white 
                       m-3 sm:m-4 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-indigo-500/30 dark:hover:shadow-indigo-400/30 transition-shadow duration-300`} // Example light/dark compatible card
          >
            <div className='flex flex-col w-full'>
              <h1 className='sm:text-[32px] text-[24px] font-semibold mb-2'>CareerCraft AI</h1>
              <p className='sm:text-[17px] text-[15px] leading-relaxed my-3 text-slate-300 dark:text-slate-400'>
                A full-stack MERN job board with AI-powered features for seekers & recruiters, including resume suggestions, AI test generation, and career roadmaps. Deployed with CI/CD.
              </p>
              <p className={`text-[#9CA3AF] dark:text-[#898989] text-sm ${p1 ? 'hidden' : 'block'}`}>Click for more details</p>
              
              <AnimatePresence> {/* For smoother appear/disappear of details */}
              {p1 && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden flex flex-col"
                >
                  <h2 className='font-semibold text-[21px] py-3 mt-2 border-t border-slate-700 dark:border-slate-600'>Key Features:</h2>
                  <ul className='list-disc list-inside leading-relaxed text-slate-300 dark:text-slate-400 space-y-1 text-[15px] sm:text-[16px]'>
                    <li>Secure JWT Authentication & Role-Based Access Control (RBAC)</li>
                    <li>Advanced Job Search with Multi-Faceted Filtering & Sorting</li>
                    <li>Comprehensive Mock Testing System & Application Tracking</li>
                    <li>AI Integrations (Resume Analysis, Test Question Gen, Roadmap Chatbot)</li>
                    <li>Unit Testing (Jest) & CI/CD Pipelines (GitHub Actions to Vercel/Render)</li>
                  </ul>
                  <h3 className='font-semibold text-[19px] py-2 mt-3'>Technologies:</h3>
                  <div className='flex flex-wrap pt-2 mb-4'>
                    {['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'JWT', 'AI APIs', 'Jest', 'GitHub Actions', 'Vercel', 'Render'].map(tech => (
                      <div key={tech} className={tagStyle}><span className={hashStyle}>#</span>{tech}</div>
                    ))}
                  </div>
                  <img className='rounded-lg shadow-md my-4 max-h-80 object-contain mx-auto' src={careerCraftAIImage} alt="CareerCraft AI Screenshot" />
                  <div className='flex w-full sm:flex-row flex-col justify-start gap-4 sm:gap-6 items-center mt-4'>
                    <Button1 text="Live Demo" link='https://career-craft-ai-ten.vercel.app/' /> {/* Assuming Button1 takes text prop */}
                    <Button2 text="GitHub Repo" link='https://github.com/ashish6318/careerCraft_ai_backup' /> {/* Assuming Button2 takes text prop */}
                  </div>
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Project 2: DevLinkup */}
          <motion.div
            layout
            transition={{ layout: { type: 'spring', stiffness: 100, damping: 20 } }}
            onClick={() => { setp2(!p2); setp1(false); setp3(false); setp4(false); }}
            className={`${p2 ? "w-full md:w-[90%] lg:w-[80%] h-auto" : "md:w-[45%] lg:w-[40%] h-auto"} 
                       flex cursor-pointer md:flex-col bg-[#1F2937] dark:bg-[#131312] text-slate-200 dark:text-white 
                       m-3 sm:m-4 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-pink-500/30 dark:hover:shadow-pink-400/30 transition-shadow duration-300`}
          >
            <div className='flex flex-col w-full'>
              <h1 className='sm:text-[32px] text-[24px] font-semibold mb-2'>DevLinkup</h1>
              <p className='sm:text-[17px] text-[15px] leading-relaxed my-3 text-slate-300 dark:text-slate-400'>
                Full-stack platform for developers to connect, collaborate, and chat in real-time. Features profiles, matching, and Socket.IO powered chat.
              </p>
              <p className={`text-[#9CA3AF] dark:text-[#898989] text-sm ${p2 ? 'hidden' : 'block'}`}>Click for more details</p>
              <AnimatePresence>
              {p2 && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
                  className="overflow-hidden flex flex-col"
                >
                  <h2 className='font-semibold text-[21px] py-3 mt-2 border-t border-slate-700 dark:border-slate-600'>Key Features:</h2>
                  <ul className='list-disc list-inside leading-relaxed text-slate-300 dark:text-slate-400 space-y-1 text-[15px] sm:text-[16px]'>
                    <li>User Registration, Profiles, and Developer Discovery</li>
                    <li>Mutual-Like Matching System</li>
                    <li>Real-Time Chat with Socket.IO (Persistence, Typing Indicators)</li>
                    <li>JWT Authentication & Protected Routes</li>
                    <li>Responsive UI with Light/Dark Modes</li>
                  </ul>
                  <h3 className='font-semibold text-[19px] py-2 mt-3'>Technologies:</h3>
                  <div className='flex flex-wrap pt-2 mb-4'>
                    {['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Tailwind CSS', 'Framer Motion', 'JWT', 'Context API'].map(tech => (
                      <div key={tech} className={tagStyle}><span className={hashStyle}>#</span>{tech}</div>
                    ))}
                  </div>
                  <img className='rounded-lg shadow-md my-4 max-h-80 object-contain mx-auto' src={devLinkupImage} alt="DevLinkup Screenshot" />
                  <div className='flex w-full sm:flex-row flex-col justify-start gap-4 sm:gap-6 items-center mt-4'>
                    <Button1 text="Live Demo" link='https://devlinkup-pearl.vercel.app/' /> {/* Replace with actual link */}
                    <Button2 text="GitHub Repo" link='https://github.com/ashish6318/devLinkup' /> {/* Replace */}
                  </div>
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Project 3: Taggle - E-commerce Platform */}
          <motion.div
            layout
            transition={{ layout: { type: 'spring', stiffness: 100, damping: 20 } }}
            onClick={() => { setp3(!p3); setp1(false); setp2(false); setp4(false); }}
            className={`${p3 ? "w-full md:w-[90%] lg:w-[80%] h-auto" : "md:w-[45%] lg:w-[40%] h-auto"} 
                       flex cursor-pointer md:flex-col bg-[#1F2937] dark:bg-[#131312] text-slate-200 dark:text-white 
                       m-3 sm:m-4 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-green-500/30 dark:hover:shadow-green-400/30 transition-shadow duration-300`}
          >
            <div className='flex flex-col w-full'>
              <h1 className='sm:text-[32px] text-[24px] font-semibold mb-2'>Taggle - E-commerce</h1>
              <p className='sm:text-[17px] text-[15px] leading-relaxed my-3 text-slate-300 dark:text-slate-400'>
                MERN stack e-commerce site featuring product listings, search/filter, cart, Stripe payments, Cloudinary image management, and admin dashboards.
              </p>
              <p className={`text-[#9CA3AF] dark:text-[#898989] text-sm ${p3 ? 'hidden' : 'block'}`}>Click for more details</p>
              <AnimatePresence>
              {p3 && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
                  className="overflow-hidden flex flex-col"
                >
                  <h2 className='font-semibold text-[21px] py-3 mt-2 border-t border-slate-700 dark:border-slate-600'>Key Features:</h2>
                  <ul className='list-disc list-inside leading-relaxed text-slate-300 dark:text-slate-400 space-y-1 text-[15px] sm:text-[16px]'>
                    <li>Product Listings, Search & Filtering, Shopping Cart</li>
                    <li>User Accounts with JWT Auth & RBAC</li>
                    <li>Secure Stripe Payment Gateway Integration</li>
                    <li>Cloudinary for Product Image Management</li>
                    <li>Admin Dashboards (Sales, Orders, Inventory)</li>
                  </ul>
                  <h3 className='font-semibold text-[19px] py-2 mt-3'>Technologies:</h3>
                  <div className='flex flex-wrap pt-2 mb-4'>
                    {['React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'Cloudinary API', 'JWT', 'Tailwind CSS'].map(tech => (
                      <div key={tech} className={tagStyle}><span className={hashStyle}>#</span>{tech}</div>
                    ))}
                  </div>
                  <img className='rounded-lg shadow-md my-4 max-h-80 object-contain mx-auto' src={taggleImage} alt="Taggle Screenshot" />
                  <div className='flex w-full sm:flex-row flex-col justify-start gap-4 sm:gap-6 items-center mt-4'>
                    <Button1 text="Live Demo" link='https://taggleluggage.com/' /> {/* Replace */}
                    <Button2 text="GitHub Repo" link='https://githttps://github.com/ankitarrowverse/tagglehub.com/your-repo/taggle' /> {/* Replace */}
                  </div>
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Project 4: Face Mask Detection */}
          <motion.div
            layout
            transition={{ layout: { type: 'spring', stiffness: 100, damping: 20 } }}
            onClick={() => { setp4(!p4); setp1(false); setp2(false); setp3(false); }}
            className={`${p4 ? "w-full md:w-[90%] lg:w-[80%] h-auto" : "md:w-[45%] lg:w-[40%] h-auto"} 
                       flex cursor-pointer md:flex-col bg-[#1F2937] dark:bg-[#131312] text-slate-200 dark:text-white 
                       m-3 sm:m-4 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-red-500/30 dark:hover:shadow-red-400/30 transition-shadow duration-300`}
          >
            <div className='flex flex-col w-full'>
              <h1 className='sm:text-[32px] text-[24px] font-semibold mb-2'>Real-Time Face Mask Detection</h1>
              <p className='sm:text-[17px] text-[15px] leading-relaxed my-3 text-slate-300 dark:text-slate-400'>
                A computer vision application using Python and Deep Learning to detect face masks in real-time video streams or images.
              </p>
              <p className={`text-[#9CA3AF] dark:text-[#898989] text-sm ${p4 ? 'hidden' : 'block'}`}>Click for more details</p>
              <AnimatePresence>
              {p4 && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
                  className="overflow-hidden flex flex-col"
                >
                  <h2 className='font-semibold text-[21px] py-3 mt-2 border-t border-slate-700 dark:border-slate-600'>Key Features:</h2>
                  <ul className='list-disc list-inside leading-relaxed text-slate-300 dark:text-slate-400 space-y-1 text-[15px] sm:text-[16px]'>
                    <li>Real-time Video Processing & Mask Classification</li>
                    <li>Utilizes Deep Learning (CNN) models for detection</li>
                    <li>Detection from Static Images & Live Webcam Feeds</li>
                    <li>Bounding Box Overlay for Detected Faces/Masks</li>
                    <li>(Conceptual) Alert system for non-compliance</li>
                  </ul>
                  <h3 className='font-semibold text-[19px] py-2 mt-3'>Technologies:</h3>
                  <div className='flex flex-wrap pt-2 mb-4'>
                    {['Python', 'OpenCV', 'TensorFlow/Keras', 'Deep Learning', 'NumPy'].map(tech => (
                      <div key={tech} className={tagStyle}><span className={hashStyle}>#</span>{tech}</div>
                    ))}
                  </div>
                   <img className='rounded-lg shadow-md my-4 max-h-80 object-contain mx-auto' src={faceMaskImage} alt="Face Mask Detection Screenshot" />
                  <div className='flex w-full sm:flex-row flex-col justify-start gap-4 sm:gap-6 items-center mt-4'>
                     <Button1 text="View Demo" link='https://facemaskdetect-5927wsthsy2g94tdvv9mxd.streamlit.app/' /> 
                    <Button2 text="GitHub Repo" link='https://github.com/ashish6318/face_mask_detect' /> {/* Replace */}
                  </div>
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default Projects;
