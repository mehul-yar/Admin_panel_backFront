

import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { tokens } from "../../theme";

const CreateProductForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // State to manage form data
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    company: "",
    rating: ""
  });

  // State to handle success or error messages
  const [message, setMessage] = useState("");

  // Handle input change for form fields
  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear message before making request

    try {
      // Send a POST request to create the product
      const response = await axios.post("http://localhost:3000/api/auth/product", productData);

      // Set success message
      setMessage("Product created successfully!");

      // Clear the form data after successful creation
      setProductData({
        name: "",
        price: "",
        company: "",
        rating: ""
      });
    } catch (error) {
     
      console.error("Error creating product:", error);
      setMessage("Failed to create product. Please try again.");
    }
  };

  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        Create New Product
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Product Name"
            variant="outlined"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Price"
            variant="outlined"
            name="price"
            type="number"
            value={productData.price}
            onChange={handleChange}
            required
          />
          <TextField
            label="Company"
            variant="outlined"
            name="company"
            value={productData.company}
            onChange={handleChange}
            required
          />
          <TextField
            label="Rating"
            variant="outlined"
            name="rating"
            type="number"
            value={productData.rating}
            onChange={handleChange}
          />
          {/* <Button type="submit" variant="contained" color="primary">
            Create Product
          </Button> */}
          <Button 
      type="submit" 
      variant="contained" 
      sx={{ backgroundColor: colors.greenAccent[500], "&:hover": { backgroundColor: colors.greenAccent[600] } }}
    >
      Create Product
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

export default CreateProductForm;
