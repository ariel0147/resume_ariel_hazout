import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Website-content/navbar/Navbar";
import Home from "./Website-content/home/Home";
import AppAbout from "./Website-content/about/app_about/app_about";
import Skills from "./Website-content/Skills/Skills";
import Info from "./Website-content/Info/Info";
import Projects from "./Website-content/Projects/Projects";
import Contact from "./Website-content/Contact/Contact";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AppAbout />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;