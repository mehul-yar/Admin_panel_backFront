


import { Box, Button, TextField, Typography, useTheme, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
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
    rating: "",
    size: "",
    productDetails: "",
    image: null
  });

  // State to handle success or error messages
  const [message, setMessage] = useState("");

  // Handle input change for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      image: e.target.files[0], // Store the selected file
    }));
  };

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setMessage(""); // Clear message before making request

  //   try {
  //     // Send a POST request to create the product
  //     const response = await axios.post("http://localhost:3000/api/auth/product", productData);

  //     // Set success message
  //     setMessage("Product created successfully!");

  //     // Clear the form data after successful creation
  //     setProductData({
  //       name: "",
  //       price: "",
  //       company: "",
  //       rating: "",
  //       size: "",
  //       productDetails: "",
  //       image: null
  //     });
  //   } catch (error) {
  //     console.error("Error creating product:", error);
  //     setMessage("Failed to create product. Please try again.");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear message before making request

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("price", productData.price);
    formData.append("company", productData.company);
    formData.append("rating", productData.rating);
    formData.append("size", productData.size);
    formData.append("productDetails", productData.productDetails);
    if (productData.image) {
        formData.append("image", productData.image);
    }

    try {
        // Send a POST request to create the product with the image
        const response = await axios.post("http://localhost:3000/api/auth/product", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        // Set success message
        setMessage("Product created successfully!");

        // Clear the form data after successful creation
        setProductData({
            name: "",
            price: "",
            company: "",
            rating: "",
            size: "",
            productDetails: "",
            image: null
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
          <Button variant="contained" component="label">
            Upload Image
            <input
              type="file"
              hidden
              onChange={handleImageChange}
              accept="image/*"
            />
          </Button>
         
          {/* <TextField
            label="Company"
            variant="outlined"
            name="company"
            value={productData.company}
            onChange={handleChange}
            required
          /> */}
          <TextField
            label="Rating"
            variant="outlined"
            name="rating"
            type="number"
            value={productData.rating}
            onChange={handleChange}
          />

          {/* Size dropdown */}
          <FormControl variant="outlined" required>
            <InputLabel>Size</InputLabel>
            <Select
              name="size"
              value={productData.size}
              onChange={handleChange}
              label="Size"
            >
              <MenuItem value="small">Small</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="large">Large</MenuItem>
            </Select>
          </FormControl>

          {/* Product Details Text Field */}
          <TextField
            label="Product Details"
            variant="outlined"
            name="productDetails"
            value={productData.productDetails}
            onChange={handleChange}
            multiline
            rows={4}
          />

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












