import React from 'react'
// COMPONENTS
import Preloader from './components/Preloader';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Noteables from './pages/Notables';
import Contact from './pages/Contact';

const App = () => {
  React.useEffect(() => {
    console.clear();
  }, [])
  return (
    <div className="w-screen bg-black min-h-screen font-primary overflow-clip">
      <Preloader />
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto px-6">
        <Home />
        <About />
        <Projects />
        <Noteables />
        <Contact />
      </main>
      <footer className='relative'>
        <Footer />
      </footer>
    </div>
  )
}

export default App