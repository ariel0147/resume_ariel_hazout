import React from 'react';
import './App.css';

// ייבוא רכיב האנימציה שיצרנו
import AnimatedSection from './components/AnimatedSection';

// ייבוא ה-Navbar
import Navbar from './Website-content/navbar/Navbar';

// ייבוא שאר חלקי האתר מהנתיבים שלהם
import Home from './Website-content/home/Home';
// הייבוא החדש של אזור האודות:
import AppAbout from './Website-content/about/app_about/app_about';
import Info from './Website-content/Info/Info';
import Skills from './Website-content/Skills/Skills';
import Projects from './Website-content/Projects/Projects';
import Contact from './Website-content/Contact/Contact';

function App() {
    return (
        <div className="App">

            <Navbar />

            <AnimatedSection id="home">
                <Home />
            </AnimatedSection>


            <AnimatedSection id="about">
                <AppAbout />
            </AnimatedSection>

            <AnimatedSection id="skills">
                <Skills />
            </AnimatedSection>

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