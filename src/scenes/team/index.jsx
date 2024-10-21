
// import { Box, Typography, useTheme, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
// import { Header } from "../../components";
// import { DataGrid } from "@mui/x-data-grid";
// import { useState, useEffect } from "react";
// import axios from "axios"; 
// import { tokens } from "../../theme";

// const Team = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
  
//   // State to store products
//   const [products, setProducts] = useState([]);
//   const [open, setOpen] = useState(false); // State for modal
//   const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product

//   // Fetch products from API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/auth/products');
//         // setProducts(response.data.data); 

//         const sortedUsers = response.data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//         setProducts(sortedUsers); // Set sorted users in state
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleOpen = (product) => {
//     setSelectedProduct(product); // Set selected product data
//     setOpen(true); 
//   };

//   const handleClose = () => {
//     setOpen(false); // Close modal
//     setSelectedProduct(null); // Clear selected product
//   };

//   const handleUpdate = async () => {
//     if (!selectedProduct) return;

//     try {
//       const response = await axios.put(`http://localhost:3000/api/auth/product/${selectedProduct._id}`, selectedProduct);
//       console.log('Product updated successfully:', response.data);

//       // Fetch updated products
//       const updatedProducts = products.map(product =>
//         product._id === selectedProduct._id ? response.data.data : product
//       );
//       setProducts(updatedProducts); // Update products in state

//       handleClose(); // Close modal
//     } catch (error) {
//       console.error('Error updating product:', error);
//     }
//   };

//   const columns = [
//     { field: "_id", headerName: "ID", width: 220 }, 
//     {
//       field: "name",
//       headerName: "Name",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "price",
//       headerName: "Price",
//       type: "number",
//       headerAlign: "left",
//       align: "left",
//     },
//     { field: "createdAt", headerName: "Created Date", flex: 1 },
//     { field: "rating", headerName: "Rating", flex: 1 },
//     {
//       field: "company",
//       headerName: "Company",
//       flex: 1,
//     },
//     {
//       field: "action",
//       headerName: "Actions",
//       width: 150,
//       renderCell: (params) => (
//         <Button variant="contained" color="primary" onClick={() => handleOpen(params.row)}>
//           Edit
//         </Button>
//       )
//     },
//   ];

//   return (
//     <Box m="20px">
//       <Header title="PRODUCT" subtitle="All Products" />
//       <Box
//         mt="40px"
//         height="75vh"
//         flex={1}
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
//           rows={products} 
//           columns={columns}
//           getRowId={(row) => row._id} 
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

//       {/* Update Product Modal */}
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Update Product</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Name"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={selectedProduct ? selectedProduct.name : ''}
//             onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Price"
//             type="number"
//             fullWidth
//             variant="standard"
//             value={selectedProduct ? selectedProduct.price : ''}
//             onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Company"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={selectedProduct ? selectedProduct.company : ''}
//             onChange={(e) => setSelectedProduct({ ...selectedProduct, company: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Rating"
//             type="number"
//             fullWidth
//             variant="standard"
//             value={selectedProduct ? selectedProduct.rating : ''}
//             onChange={(e) => setSelectedProduct({ ...selectedProduct, rating: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleUpdate} color="primary">
//             Update
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default Team;




import { Box, Typography, useTheme, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { Header } from "../../components";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios"; 
import { tokens } from "../../theme";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
 
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false); 
  const [selectedProduct, setSelectedProduct] = useState(null); 

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/auth/products');
        const sortedUsers = response.data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setProducts(sortedUsers); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleOpen = (product) => {
    setSelectedProduct(product); 
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false); 
    setSelectedProduct(null); 
  };

  const handleUpdate = async () => {
    if (!selectedProduct) return;

    try {
      const response = await axios.put(`http://localhost:3000/api/auth/product/${selectedProduct._id}`, selectedProduct);
      console.log('Product updated successfully:', response.data);

     
      const updatedProducts = products.map(product =>
        product._id === selectedProduct._id ? response.data.data : product
      );
      setProducts(updatedProducts); 

      handleClose(); 
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/api/auth/product/${productId}`);
      
      setProducts(products.filter(product => product._id !== productId));
      console.log('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const columns = [
    // { field: "_id", headerName: "ID", width: 220 }, 
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "createdAt", headerName: "Created Date", flex: 1 },
    { field: "rating", headerName: "Rating", flex: 1 },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 250, 
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleOpen(params.row)}
            style={{ marginRight: "10px" }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDelete(params.row._id)} 
          >
            Delete
          </Button>
        </>
      )
    },
  ];

  return (
    <Box m="20px">
      <Header title="PRODUCT" subtitle="All Products" />
      <Box
        mt="40px"
        height="75vh"
        flex={1}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            border: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-iconSeparator": {
            color: colors.primary[100],
          },
        }}
      >
        <DataGrid
          rows={products} 
          columns={columns}
          getRowId={(row) => row._id} 
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          checkboxSelection
        />
      </Box>

     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Product</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={selectedProduct ? selectedProduct.name : ''}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Price"
            type="number"
            fullWidth
            variant="standard"
            value={selectedProduct ? selectedProduct.price : ''}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Company"
            type="text"
            fullWidth
            variant="standard"
            value={selectedProduct ? selectedProduct.company : ''}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, company: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Rating"
            type="number"
            fullWidth
            variant="standard"
            value={selectedProduct ? selectedProduct.rating : ''}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, rating: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Team;
