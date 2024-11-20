import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
} from '@mui/material';

const Navbar = ({ token }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [productMenuAnchor, setProductMenuAnchor] = useState(null);
  const [templateMenuAnchor, setTemplateMenuAnchor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      fetch('http://127.0.0.1:8000/api/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data?.email) {
            setUserEmail(data.email);
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          setUserEmail(null);
        });
    } else {
      setUserEmail(null);
    }
  }, [token]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('authToken');
    setUserEmail(null);
    navigate('/login');
  }, [navigate]);

  const handleProductMenuClick = (event) => {
    setProductMenuAnchor(event.currentTarget);
  };

  const handleTemplateMenuClick = (event) => {
    setTemplateMenuAnchor(event.currentTarget);
  };

  const handleProductMenuClose = () => {
    setProductMenuAnchor(null);
  };

  const handleTemplateMenuClose = () => {
    setTemplateMenuAnchor(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFF', color: '#000', boxShadow: 'none' }}>
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', cursor: 'pointer' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
              AR SHAKIR
            </Link>
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
            <Button sx={{ color: '#000', fontSize: '13px' }} onClick={handleProductMenuClick}>
              Product
            </Button>
            <Menu
              anchorEl={productMenuAnchor}
              open={Boolean(productMenuAnchor)}
              onClose={handleProductMenuClose}
            >
              <MenuItem onClick={handleProductMenuClose}>
                <Link to="/product/feature1" style={{ textDecoration: 'none', color: '#000' }}>
                  Feature 1
                </Link>
              </MenuItem>
              <MenuItem onClick={handleProductMenuClose}>
                <Link to="/product/feature2" style={{ textDecoration: 'none', color: '#000' }}>
                  Feature 2
                </Link>
              </MenuItem>
              <MenuItem onClick={handleProductMenuClose}>
                <Link to="/product/feature3" style={{ textDecoration: 'none', color: '#000' }}>
                  Feature 3
                </Link>
              </MenuItem>
            </Menu>

            <Button sx={{ color: '#000', fontSize: '13px' }} onClick={handleTemplateMenuClick}>
              Template
            </Button>
            <Menu
              anchorEl={templateMenuAnchor}
              open={Boolean(templateMenuAnchor)}
              onClose={handleTemplateMenuClose}
            >
              <MenuItem onClick={handleTemplateMenuClose}>
                <Link to="/template/template1" style={{ textDecoration: 'none', color: '#000' }}>
                  Template 1
                </Link>
              </MenuItem>
              <MenuItem onClick={handleTemplateMenuClose}>
                <Link to="/template/template2" style={{ textDecoration: 'none', color: '#000' }}>
                  Template 2
                </Link>
              </MenuItem>
              <MenuItem onClick={handleTemplateMenuClose}>
                <Link to="/template/template3" style={{ textDecoration: 'none', color: '#000' }}>
                  Template 3
                </Link>
              </MenuItem>
            </Menu>

            <Button component={Link} to="/blog" sx={{ color: '#000', fontSize: '13px' }}>
              Blog
            </Button>
            <Button component={Link} to="/contact" sx={{ color: '#000', fontSize: '13px' }}>
              Pricing
            </Button>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {userEmail ? (
              <>
                <Typography variant="body1" sx={{ marginRight: 2 }}>
                  {userEmail}
                </Typography>
                <Button sx={{ fontSize: '13px', color: '#000' }} onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button sx={{ fontSize: '13px', color: '#000' }} component={Link} to="/login">
                  Sign In
                </Button>
                <Button
                  sx={{
                    fontSize: '13px',
                    backgroundColor: '#4F46BA',
                    borderRadius: '0px',
                    marginLeft: '20px',
                  }}
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/register"
                >
                  Start Free
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
