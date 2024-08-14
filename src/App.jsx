import { useState } from 'react'
import './App.css'
import Navbar from './Pages/Navbar'
import CV from './Pages/CV'
import ContactMe from './Pages/ContactMe'
import AboutMe from './Pages/AboutMe'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <AboutMe />
    <CV />
    <ContactMe />
    </>
  );
}

export default App
