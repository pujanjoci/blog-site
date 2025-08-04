import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Blog from './pages/Blog';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/Privacy';

function App() {
    return (
        <Router basename="/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/blog/:blogId" element={<Blog />} />
            </Routes>
        </Router>
    );
}

export default App;
