import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Books from './pages/Books';
import AddBooks from './pages/AddBooks';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/AddBooks" element={<AddBooks />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
