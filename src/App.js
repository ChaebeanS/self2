import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

import './App.css';
import Slide from './comp/Slide';
import Header from './comp/Header';
import Profile from './comp/Profile';
import Sign from './comp/Sign';


function App() {
  return (
    <Router>
      <header className="header">
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Slide/>} />        
          <Route path="/profile" element={<Profile/>} />        
          <Route path="/sign" element={<Sign/>} />        
        </Routes>
      </main>
    </Router>
  );
}

export default App;
