import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Website-content/navbar/Navbar";
import Home from "./Website-content/home/Home";
import App_about from "./Website-content/about/app_about/app_about";
import Skills from "./Website-content/Skills/Skills";
import Info from "./Website-content/Info/Info";
import Projects from "./Website-content/Projects/Projects";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<App_about />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
