import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      fetch('http://127.0.0.1:8000/api/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && data.user) {
            setUserEmail(data.user.email); // Update the userEmail state
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          setUserEmail(null); // In case of an error, clear the email state
        });
    } else {
      setUserEmail(null); // No token, clear the email state
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('authToken');
    setUserEmail(null);
  };

  return (
    <AuthContext.Provider value={{ userEmail, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
