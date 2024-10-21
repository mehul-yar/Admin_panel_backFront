// import { Box, Typography, useTheme } from "@mui/material";
// import { Header } from "../../components";
// import { DataGrid } from "@mui/x-data-grid";
// import { mockDataInvoices } from "../../data/mockData";
// import { tokens } from "../../theme";

// const Invoices = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const columns = [
//     { field: "id", headerName: "ID" },
//     {
//       field: "name",
//       headerName: "Name",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "phone",
//       headerName: "Phone Number",
//       flex: 1,
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },
//     {
//       field: "cost",
//       headerName: "Cost",
//       flex: 1,
//       renderCell: (params) => (
//         <Typography color={colors.greenAccent[500]}>
//           ${params.row.cost}
//         </Typography>
//       ),
//     },
//     {
//       field: "date",
//       headerName: "Date",
//       flex: 1,
//     },
//   ];
//   return (
//     <Box m="20px">
//       <Header title="INVOICES" subtitle="List of Invoice Balances" />
//       <Box
//         mt="40px"
//         height="75vh"
//         maxWidth="100%"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             border: "none",
//           },
//           "& .name-column--cell": {
//             color: colors.greenAccent[300],
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: colors.blueAccent[700],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: colors.primary[400],
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             backgroundColor: colors.blueAccent[700],
//           },
//           "& .MuiCheckbox-root": {
//             color: `${colors.greenAccent[200]} !important`,
//           },
//           "& .MuiDataGrid-iconSeparator": {
//             color: colors.primary[100],
//           },
//         }}
//       >
//         <DataGrid
//           rows={mockDataInvoices}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: {
//                 pageSize: 10,
//               },
//             },
//           }}
//           checkboxSelection
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Invoices;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const Invoices = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const navigate = useNavigate();

    const [productData, setProductData] = useState({
        name: '',
        price: '',
        company: '',
        rating: ''
    });

    // Fetch the existing product data on component mount
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.put(`http://localhost:3000/api/auth/product/${id}`);
                setProductData(response.data.data); // Set the product data
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/product/${id}`, productData);
            console.log('Product updated successfully:', response.data);
            navigate('/products'); // Redirect to the products page after successful update
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <Box m="20px">
            <Typography variant="h4" gutterBottom>
                Update Product
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                        label="Name"
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
                    <Button type="submit" variant="contained" color="primary">
                        Update Product
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default Invoices;
