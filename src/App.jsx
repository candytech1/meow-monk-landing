import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MeowMonk from './MeowMonk';
import Stickers from './Stickers';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MeowMonk />} />
        <Route path="/stickers" element={<Stickers />} />
      </Routes>
    </Router>
  );
}

export default App;

