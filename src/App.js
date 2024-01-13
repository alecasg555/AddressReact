import './App.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import NavBar from './components/common/NavBar.js'
function App() {

  return (
    <Router>
      <NavBar />
      <Routes >
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
