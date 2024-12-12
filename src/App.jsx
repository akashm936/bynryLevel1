import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="flex justify-between mb-6">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/admin" className="text-blue-500 hover:underline">Admin</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
