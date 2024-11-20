// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Grow from './pages/Grow';
import Crypto from './pages/CryptoPage';
import { Typography } from '@mui/material';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('authToken'));

  const ConditionalComponents = () => {
    const location = useLocation();
    const hideComponentsFor = ['/login', '/register'];

    if (hideComponentsFor.includes(location.pathname)) {
      return null; 
    }

    return (
      <>
        <Grow path="/grow" />
        <Crypto path="/crypto" />
        <Typography
          sx={{
            textAlign: 'center',
            marginBottom: 4,
            marginTop: 6,
          }}
        >
          <p>Copyright @ AR Shakir 2022. All Rights Reserved.</p>
        </Typography>
      </>
    );
  };

  return (
    <Router>
      <Navbar token={token} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
      </Routes>
      <ConditionalComponents />
    </Router>
  );
};

export default App;
