import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';

const Register = ({setToken}) => {
  // Define state for form data and other variables
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    // Simple validation
    if (formData.password !== formData.password_confirmation) {
      setResponseMessage('Passwords do not match');
      setLoading(false);
      return;
    }

    console.log(formData)

    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // After successful registration, automatically log the user in
        localStorage.setItem('authToken', data.token); // assuming the API returns a token
        setToken(data.token)
        setLoading(false);
        console.log(data);
        setResponseMessage('Registration successful. You are now logged in!');
      } else {
        setLoading(false);
        setResponseMessage(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      setResponseMessage('Registration failed, please try again');
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#FFFF', padding: 2 }}>
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, width: '100%', borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          Register
        </Typography>
        <Typography variant="body1" gutterBottom align="center" color="text.secondary">
          Create your account and get started
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Full Name" variant="outlined" fullWidth required name="fullName" value={formData.fullName} onChange={handleChange} />
          <TextField label="Email Address" type="email" variant="outlined" fullWidth required name="email" value={formData.email} onChange={handleChange} />
          <TextField label="Password" type="password" variant="outlined" fullWidth required name="password" value={formData.password} onChange={handleChange} />
          <TextField label="Confirm Password" type="password" variant="outlined" fullWidth required name="password_confirmation" value={formData.confirmPassword} onChange={handleChange} />
          <Button type="submit" variant="contained" color="primary" size="large" fullWidth sx={{ mt: 2, textTransform: 'none', fontSize: '1rem' }} disabled={loading}>
            {loading ? 'Submitting...' : 'Sign Up'}
          </Button>
        </Box>
        {responseMessage && (
          <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', color: responseMessage.includes('successful') ? 'green' : 'red' }}>
            {responseMessage}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default Register;
