import React, { useEffect, useState } from 'react'
import Hero from './Components/Hero'
import './Styles/App.css'
import Nav from './Components/Nav'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Components/Loader'
import Aniskills from './Components/Aniskills'
import AchievementsPage from './Components/AchievementsPage'

const App = () => {

  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2800);
  }, []);

  return (
    <>
     {screenLoading ? (
        <Loader />
      ) : (
      <>
      <Nav />
      <Hero />
      <About />
      {/* <Skills/> */}
      <Aniskills />
      <Projects />
      <AchievementsPage />
      <Contacts />
      {/* <CursorComponent /> */}
      <ToastContainer />
      </>
      )}
    </>
  )
}

export default App
