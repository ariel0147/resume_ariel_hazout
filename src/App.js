import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AnimatedSection from './components/AnimatedSection';
import Info from './Website-content/Info/Info';
import Projects from './Website-content/Projects/Projects';
import Contact from './Website-content/Contact/Contact';




function App() {
    return (
        <div className="App">

            <Navbar />




            <AnimatedSection id="info">
                <Info />
            </AnimatedSection>

            <AnimatedSection id="projects">
                <Projects />
            </AnimatedSection>

            <AnimatedSection id="contact">
                <Contact />
            </AnimatedSection>

        </div>
    );
}

export default App;