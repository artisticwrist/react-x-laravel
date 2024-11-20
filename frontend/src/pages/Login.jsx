import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';

const Login = ({setToken}) => {
  // State hooks for form data and response
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');
    
    // Send login request to the API
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {

        localStorage.setItem('authToken', data.token);
        setToken(data.token)
        setResponseMessage('Login successful!');
      } else {
        // Handle login failure
        setResponseMessage(data.message || 'Invalid credentials. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      setResponseMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#FFFF',
        padding: 2,
      }}
    >
      <Paper 
        elevation={3} 
        sx={{ 
          padding: 4, 
          maxWidth: 400, 
          width: '100%', 
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          Login
        </Typography>
        <Typography variant="body1" gutterBottom align="center" color="text.secondary">
          Sign in to Your Account
        </Typography>

        {/* Form */}
        <Box 
          component="form" 
          sx={{ 
            mt: 2, 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 2 
          }}
          onSubmit={handleSubmit}
        >
          <TextField 
            label="Email Address" 
            type="email" 
            variant="outlined" 
            fullWidth 
            required 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField 
            label="Password" 
            type="password" 
            variant="outlined" 
            fullWidth 
            required 
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            fullWidth 
            sx={{ 
              mt: 2, 
              textTransform: 'none', 
              fontSize: '1rem' 
            }}
            type="submit"
            disabled={loading} // Disable while submitting
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </Box>

        {/* Response message */}
        {responseMessage && (
          <Typography 
            variant="body2" 
            sx={{ mt: 2, textAlign: 'center', color: responseMessage.includes('successful') ? 'green' : 'red' }}
          >
            {responseMessage}
          </Typography>
        )}

        {/* Sign Up Link */}
        <Typography 
          variant="body2" 
          sx={{ mt: 3, textAlign: 'center', color: 'text.secondary' }}
        >
          Don't have an account?{' '}
          <Button 
            variant="text" 
            color="primary" 
            sx={{ textTransform: 'none' }}
          >
            Sign Up
          </Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
