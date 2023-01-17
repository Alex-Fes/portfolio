import React from 'react'

import './App.css'

import Contacts from './contacts/Contacts'
import Footer from './footer/Footer'
import Header from './header/Header'
import Hire from './hire/Hire'
import Main from './mainBlock/Main'
import Projects from './propjects/Projects'
import Skills from './skills/Skills'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Hire />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
