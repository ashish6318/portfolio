import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6"; 
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Contacts = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, message } = formData;

    if (!email.trim() || !message.trim()) {
      toast.error("📧 Please fill in all fields.");
      return;
    }
    
    const telegramMessage = `New Contact Form Submission 📬:\n\n👤 Email: ${email}\n💬 Message: ${message}`;
    const encodedMsg = encodeURIComponent(telegramMessage);

    setIsLoading(true);
    try {
      await axios.post(
        `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${import.meta.env.VITE_TELEGRAM_CHAT_ID}&text=${encodedMsg}&parse_mode=Markdown`
      );
      setIsLoading(false);
      toast.success("Message sent successfully! Thank you. 😼");
      setFormData({ email: '', message: '' });
    } catch (error) {
      setIsLoading(false);
      toast.error('Error sending message 🥲. Please try again later.');
      console.error("Telegram API error:", error.response?.data || error.message || error);
    }
  };

  const socialLinks = [
    { href: "https://github.com/ashish6318", label: "GitHub", icon: FaGithub, style: "hover:text-indigo-600" },
    { href: "https://www.linkedin.com/in/ashishrajput0904/", label: "LinkedIn", icon: FaLinkedin, style: "hover:text-indigo-600" },
    { href: "https://www.instagram.com/ashish._.rajput09/", label: "Instagram", icon: FaInstagram, style: "hover:text-indigo-600" }, // Or a pinkish hover e.g., hover:text-pink-600
    { href: "https://leetcode.com/u/ashish_rajput09/", label: "LeetCode", icon: SiLeetcode, style: "hover:text-orange-500" },
    { href: "https://www.codechef.com/users/solar_year_55", label: "CodeChef", icon: SiCodechef, style: "hover:text-yellow-700" }, // Brownish-yellow for CodeChef
    { href: "https://www.geeksforgeeks.org/user/rajputashisagr3/", label: "GFG", icon: SiGeeksforgeeks, style: "hover:text-green-600" },
  ];
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const formVariants = {
    hidden: { opacity: 0, scaleY: 0.8 },
    visible: { opacity: 1, scaleY: 1, transition: { duration: 0.5, type: 'spring', delay: 0.2 } }
  };

  return (
    // Overall light page background
    <div id='contact' className='min-h-screen w-full pt-20 pb-8 px-4 sm:px-10 md:px-20 bg-slate-50 text-slate-700 selection:bg-indigo-500 selection:text-white'>
      <ToastContainer theme="light" position="bottom-right" autoClose={3000} /> {/* ToastContainer theme changed to light */}
      
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className="max-w-5xl mx-auto flex flex-col items-center"
      >
        {/* Titles with dark text for light page background */}
        <h2 className='sm:text-7xl text-5xl font-bold text-center text-slate-900 mb-4'>Get In Touch.</h2>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl">
          Have a project in mind, a question, or just want to connect? Feel free to reach out!
        </p>

        {/* Form Card - white background, dark text */}
        <motion.div
          variants={formVariants}
          className="bg-white w-full max-w-xl p-6 sm:p-10 rounded-2xl shadow-xl border border-slate-200" // Added subtle border
        >
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <div>
              <label htmlFor="email" className='block text-sm font-medium text-slate-700 mb-1.5'>Your Email</label>
              <input 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className='w-full bg-slate-100 outline-none focus:ring-2 focus:ring-indigo-500 p-3 border border-slate-300 text-slate-900 rounded-lg transition-all duration-150 placeholder-slate-400' 
                name="email" 
                id="email" 
                type="email" 
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className='block text-sm font-medium text-slate-700 mb-1.5'>Message</label>
              <textarea 
                value={formData.message} 
                name='message' 
                onChange={handleChange} 
                className='w-full bg-slate-100 outline-none focus:ring-2 focus:ring-indigo-500 p-3 border border-slate-300 text-slate-900 rounded-lg transition-all duration-150 min-h-[120px] resize-none placeholder-slate-400'
                required 
                rows="4" 
                id="message"
                placeholder="Your message here..."
              />
            </div>
            <button 
              type="submit" 
              disabled={isLoading}
              className="py-3 px-8 mx-auto text-white bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message 🚀'}
            </button>
          </form>
        </motion.div>
      </motion.div>

      {/* Footer - Light theme */}
      <footer className='w-full flex flex-col md:flex-row justify-between items-center text-slate-500 mt-20 pt-8 pb-4 border-t border-slate-200 bg-slate-100 px-4 sm:px-10 md:px-20'> {/* Light footer bg & border */}
        <div className="flex items-center justify-center md:justify-start flex-wrap space-x-3 sm:space-x-5 mb-4 md:mb-0"> {/* Adjusted spacing for icons */}
          {socialLinks.map(link => (
            <a 
              key={link.label}
              href={link.href} 
              target="_blank" rel="noopener noreferrer"
              aria-label={link.label}
              className={`text-slate-500 transition-colors duration-200 p-2 rounded-full ${link.style} transform hover:scale-110`}
            >
              <link.icon size={22} /> {/* Slightly smaller icons for footer */}
            </a>
          ))}
        </div>
        <div className="text-center md:text-right text-sm">
          <p>&copy; {new Date().getFullYear()} Ashish Rajput. All Rights Reserved.</p>
          <p>Surat, Gujarat, India 🇮🇳</p>
        </div>
      </footer>
    </div>
  );
};

export default Contacts;
