import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import CV from './Components/CV'
import ContactMe from './Components/ContactMe'
import AboutMe from './Components/AboutMe'


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
