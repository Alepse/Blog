import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Week1 from './pages/Week1';
import Week2 from './pages/Week2';

const App = () => {
  return (
    <div>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/week1" element={<Week1 />} />
              <Route path="/week2" element={<Week2 />} />
            </Routes>
          </Router>
    </div>
  )
}

export default App