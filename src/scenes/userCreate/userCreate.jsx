import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { tokens } from "../../theme";



const CreateUserForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  
  const [message, setMessage] = useState("");

  
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 

   
    if (userData.password !== userData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      
      const response = await axios.post("http://localhost:3000/api/auth/register", userData);

     
      setMessage("User registered successfully!");

      
      setUserData({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error("Error creating user:", error);
      setMessage("Failed to register user. Please try again.");
    }
  };

  
  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        Register New User
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Username"
            variant="outlined"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            name="confirmPassword"
            type="password"
            value={userData.confirmPassword}
            onChange={handleChange}
            required
          />
          {/* <Button type="submit" variant="contained" color="primary">
            Register User
          </Button> */}
          <Button 
      type="submit" 
      variant="contained" 
      sx={{ backgroundColor: colors.greenAccent[500], "&:hover": { backgroundColor: colors.greenAccent[600] } }}
    >
      Register User
    </Button>
         
        </Box>
      </form>

      {message && (
        <Typography
          color={message.includes("successfully") ? "green" : "red"}
          mt={2}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default CreateUserForm;


