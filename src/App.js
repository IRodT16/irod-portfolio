import React, { useState } from 'react';
import './App.css';
import Nav from './components/Navigation';
import MainBody from './components/MainBody';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [path, setPath] = useState('main');

  return (
    <div className="App">
      <header className="App-header">
        <Nav setPath={setPath} path={path} />
      </header>
      {path === 'main' && <MainBody />}
      {path === 'about' && <About />}
      {path === 'projects' && <Projects />}
      {path === 'skills' && <Skills />}
      {path === 'contact' && <Contact />}
    </div>
  );
}

export default App;
