// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <About />
                <Projects />
                <Contact />
            </main>
        </div>
    );
};

export default App;

