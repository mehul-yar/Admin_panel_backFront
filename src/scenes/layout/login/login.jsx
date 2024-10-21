



import React, { useContext, useState } from "react";
import { Box, Button, TextField, Typography, Link, Grid, Paper, InputAdornment } from "@mui/material";
import { AuthContext } from "../../../App"; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import wall from "../../../../src/assets/images/wallp.jpg"
import '../login/logcss.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password }, { withCredentials: true });
      
      
      localStorage.setItem('token', response.data.token);
      
      setIsAuthenticated(true);
      
      navigate('/dashboard');
      
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || error.message);
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }} className="login">
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4 }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
          <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center' }}>
            <span role="img" aria-label="Logo" style={{ marginRight: 8 }}>🐦</span>
            Admin Panel
          </Box>
        </Typography>

        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            LOGIN
          </Button>
          <Grid container>
            <Grid item xs>
              
              <Link href="#" variant="body2" sx={{ color: 'white' }}>
  Forgot password?
</Link>

            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
              
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
            
      <Grid
        item
        xs={false}
        sm={6}
        md={6}
        sx={{
            backgroundImage: `url(${wall})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',

          border: "2px solid #ccc",  
        }} 
      />
    </Grid>
    
  );
};

export default Login;
