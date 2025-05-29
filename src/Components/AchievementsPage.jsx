// src/pages/AchievementsPage.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// You might want to import specific icons for section headings if desired
// import { HiOutlineSparkles, HiOutlineAcademicCap, HiOutlineUsers, HiOutlineHeart } from 'react-icons/hi2';

const AchievementCard = ({ title, items, icon: Icon, delay }) => {
  // This is a reusable card component for each section
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100 + (delay || 0) * 150);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white shadow-xl rounded-lg p-6 md:p-8"
    >
      <h2 className="text-2xl font-semibold text-indigo-600 mb-5 flex items-center">
        {Icon && <Icon className="h-7 w-7 mr-3" />}
        {title}
      </h2>
      <ul className="list-disc list-inside space-y-2 text-slate-700">
        {items.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} /> // Allows for <strong> if needed
        ))}
      </ul>
    </motion.div>
  );
};

const AchievementsPage = () => {
  // Data for your achievements (you can fetch this or define it here)
  // Using dangerouslySetInnerHTML for items to allow <b> if you construct strings like that.
  // Otherwise, just pass plain strings.
  const codingAchievements = {
    title: "Coding & Competitive Programming",
    // icon: HiOutlineSparkles,
    items: [
      "<strong>CodeChef:</strong> Achieved Max Rating – <strong>1602</strong> (<strong>3-Star</strong>).",
      "Solved <strong>350+ Data Structures & Algorithms problems</strong> on <strong>GeeksforGeeks</strong> (ranked <strong>Top 2%</strong> - 70 among 3,600+ SVNIT students) and <strong>320+ problems</strong> on <strong>LeetCode</strong>."
    ]
  };

  const certifications = {
    title: "Certifications & Key Courses",
    // icon: HiOutlineAcademicCap,
    items: [
      "Completed <strong>Data Structures & Algorithms (DSA) Self-Paced Course</strong> by <strong>GeeksforGeeks</strong>.",
      "Completed <strong>Namaste Node.js (Backend Development)</strong> course by Akshay Saini (<strong>NamasteDev</strong>)."
    ]
  };

  const responsibilities = {
    title: "Positions of Responsibility & Leadership",
    // icon: HiOutlineUsers,
    items: [
      "<strong>Developer</strong>, <strong>IEEE Student Chapter, SVNIT</strong> (Present) – Actively contributing to chapter projects and technical workshops.",
      "<strong>Co-Head</strong>, <strong>MINDBEND 2024</strong> – Co-led operations for Gujarat's largest techno-managerial fest, coordinating multiple events and teams."
    ]
  };

  const communityInvolvement = {
    title: "Community Involvement",
    // icon: HiOutlineHeart,
    items: [
      "Contributed <strong>240+ hours</strong> as an <strong>NSS Volunteer</strong>, engaging in community service projects and social outreach programs."
      // Your "hii" item was here, you can add/remove as needed: "hii"
    ]
  };
  
  // For overall page animation
  const [pageMounted, setPageMounted] = useState(false);
  useEffect(() => {
    setPageMounted(true);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: pageMounted ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-100 min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: pageMounted ? 1 : 0, y: pageMounted ? 0 : -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-bold text-slate-800 mb-12 md:mb-16 text-center"
        >
          Achievements & Certifications
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <AchievementCard title={codingAchievements.title} items={codingAchievements.items} icon={codingAchievements.icon} delay={1} />
          <AchievementCard title={certifications.title} items={certifications.items} icon={certifications.icon} delay={2} />
          <AchievementCard title={responsibilities.title} items={responsibilities.items} icon={responsibilities.icon} delay={3} />
          <AchievementCard title={communityInvolvement.title} items={communityInvolvement.items} icon={communityInvolvement.icon} delay={4} />
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementsPage;
