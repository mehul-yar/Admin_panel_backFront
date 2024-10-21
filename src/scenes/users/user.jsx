// // import { Box, Typography, useTheme, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
// // import { Header } from "../../components";
// // import { DataGrid } from "@mui/x-data-grid";
// // import { useState, useEffect } from "react";
// // import axios from "axios"; 
// // import { tokens } from "../../theme";

// // const Users = () => {
// //   const theme = useTheme();
// //   const colors = tokens(theme.palette.mode);
  
// //   // State to store users
// //   const [users, setUsers] = useState([]);
// //   const [open, setOpen] = useState(false); // State for modal
// //   const [selectedUser, setSelectedUser] = useState(null); // State for selected user

// //   // Fetch users from API
// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:3000/api/auth/users');
// //         setUsers(response.data); // Assuming the API sends the users directly in response.data
// //       } catch (error) {
// //         console.error("Error fetching users:", error);
// //       }
// //     };

// //     fetchUsers();
// //   }, []);

// //   const handleOpen = (user) => {
// //     setSelectedUser(user); // Set selected user data
// //     setOpen(true); // Open modal
// //   };

// //   const handleClose = () => {
// //     setOpen(false); // Close modal
// //     setSelectedUser(null); // Clear selected user
// //   };

// //   const handleUpdate = async () => {
// //     if (!selectedUser) return;

// //     try {
// //       const response = await axios.put(`http://localhost:3000/api/auth/user/${selectedUser._id}`, selectedUser);
// //       console.log('User updated successfully:', response.data);

// //       // Fetch updated users
// //       const updatedUsers = users.map(user =>
// //         user._id === selectedUser._id ? response.data : user
// //       );
// //       setUsers(updatedUsers); // Update users in state

// //       handleClose(); // Close modal
// //     } catch (error) {
// //       console.error('Error updating user:', error);
// //     }
// //   };

// //   const columns = [
// //     { field: "_id", headerName: "ID", width: 250 },
// //     {
// //       field: "username",
// //       headerName: "Username",
// //       flex: 1,
// //       cellClassName: "name-column--cell",
// //     },
// //     {
// //       field: "email",
// //       headerName: "Email",
// //       flex: 1,
// //     },
// //     { field: "createdAt", headerName: "Created Date", flex: 1 },
// //     {
// //       field: "action",
// //       headerName: "Actions",
// //       width: 150,
// //       renderCell: (params) => (
// //         <Button variant="contained" color="primary" onClick={() => handleOpen(params.row)}>
// //           Edit
// //         </Button>
// //       )
// //     },
// //   ];

// //   return (
// //     <Box m="20px">
// //       <Header title="USERS" subtitle="All Users" />
// //       <Box
// //         mt="40px"
// //         height="75vh"
// //         flex={1}
// //         sx={{
// //           "& .MuiDataGrid-root": {
// //             border: "none",
// //           },
// //           "& .MuiDataGrid-cell": {
// //             border: "none",
// //           },
// //           "& .name-column--cell": {
// //             color: colors.greenAccent[300],
// //           },
// //           "& .MuiDataGrid-columnHeaders": {
// //             backgroundColor: colors.blueAccent[700],
// //             borderBottom: "none",
// //           },
// //           "& .MuiDataGrid-virtualScroller": {
// //             backgroundColor: colors.primary[400],
// //           },
// //           "& .MuiDataGrid-footerContainer": {
// //             borderTop: "none",
// //             backgroundColor: colors.blueAccent[700],
// //           },
// //           "& .MuiCheckbox-root": {
// //             color: `${colors.greenAccent[200]} !important`,
// //           },
// //           "& .MuiDataGrid-iconSeparator": {
// //             color: colors.primary[100],
// //           },
// //         }}
// //       >
// //         <DataGrid
// //           rows={users} 
// //           columns={columns}
// //           getRowId={(row) => row._id} 
// //           initialState={{
// //             pagination: {
// //               paginationModel: {
// //                 pageSize: 10,
// //               },
// //             },
// //           }}
// //           checkboxSelection
// //         />
// //       </Box>

// //       {/* Update User Modal */}
// //       <Dialog open={open} onClose={handleClose}>
// //         <DialogTitle>Update User</DialogTitle>
// //         <DialogContent>
// //           <TextField
// //             autoFocus
// //             margin="dense"
// //             label="Username"
// //             type="text"
// //             fullWidth
// //             variant="standard"
// //             value={selectedUser ? selectedUser.username : ''}
// //             onChange={(e) => setSelectedUser({ ...selectedUser, username: e.target.value })}
// //           />
// //           <TextField
// //             margin="dense"
// //             label="Email"
// //             type="email"
// //             fullWidth
// //             variant="standard"
// //             value={selectedUser ? selectedUser.email : ''}
// //             onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleClose} color="primary">
// //             Cancel
// //           </Button>
// //           <Button onClick={handleUpdate} color="primary">
// //             Update
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //     </Box>
// //   );
// // };

// // export default Users;










// import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
// import { Header } from "../../components";
// import { DataGrid } from "@mui/x-data-grid";
// import { useState, useEffect } from "react";
// import axios from "axios"; 
// import { useTheme } from "@mui/material/styles"; // Ensure this is imported
// import { tokens } from "../../theme";

// const Users = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
  
//   // State to store users
//   const [users, setUsers] = useState([]);
//   const [open, setOpen] = useState(false); // State for modal
//   const [selectedUser, setSelectedUser] = useState(null); // State for selected user

//   // Fetch users from API
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const token = localStorage.getItem('token'); // Assuming token is stored in localStorage after login
//         const response = await axios.get('http://localhost:3000/api/auth/users', {
//           headers: {
//             Authorization: `Bearer ${token}` // Add the token to the request headers
//           }
//         });
//         setUsers(response.data); // Assuming the API sends the users directly in response.data
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleOpen = (user) => {
//     setSelectedUser(user); // Set selected user data
//     setOpen(true); // Open modal
//   };

//   const handleClose = () => {
//     setOpen(false); // Close modal
//     setSelectedUser(null); // Clear selected user
//   };

//   const handleUpdate = async () => {
//     if (!selectedUser) return;

//     try {
//       const response = await axios.put(`http://localhost:3000/api/auth/user/${selectedUser._id}`, selectedUser);
//       console.log('User updated successfully:', response.data);

//       // Fetch updated users
//       const updatedUsers = users.map(user =>
//         user._id === selectedUser._id ? response.data : user
//       );
//       setUsers(updatedUsers); // Update users in state

//       handleClose(); // Close modal
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   };

//   const columns = [
//     { field: "_id", headerName: "ID", width: 250 },
//     {
//       field: "username",
//       headerName: "Username",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },
//     { field: "createdAt", headerName: "Created Date", flex: 1 },
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
//       <Header title="USERS" subtitle="All Users" />
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
//           rows={users} 
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

//       {/* Update User Modal */}
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Update User</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Username"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={selectedUser ? selectedUser.username : ''}
//             onChange={(e) => setSelectedUser({ ...selectedUser, username: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Email"
//             type="email"
//             fullWidth
//             variant="standard"
//             value={selectedUser ? selectedUser.email : ''}
//             onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
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

// export default Users;














import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { Header } from "../../components";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios"; 
import { useTheme } from "@mui/material/styles"; 
import { tokens } from "../../theme";

const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false); 
  const [selectedUser, setSelectedUser] = useState(null); 

  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get('http://localhost:3000/api/auth/users', {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });

        
        const sortedUsers = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setUsers(sortedUsers); 
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleOpen = (user) => {
    setSelectedUser(user); 
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false); 
    setSelectedUser(null); 
  };

  const handleUpdate = async () => {
    if (!selectedUser) return;

    try {
      const response = await axios.put(`http://localhost:3000/api/auth/user/${selectedUser._id}`, selectedUser);
      console.log('User updated successfully:', response.data);

     
      const updatedUsers = users.map(user =>
        user._id === selectedUser._id ? response.data : user
      );

      
      const sortedUsers = updatedUsers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setUsers(sortedUsers); 

      handleClose();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const columns = [
    
    // {
    //   field: "s_no",
    //   headerName: "S.No.",
    //   width: 100,
    //   valueGetter: (params) => `${params.api.getRowIndex(params.id) + 1}`,
    // }
    
    // ,
    
    {
      field: "username",
      headerName: "Username",
      flex: 1,
      cellClassName: "name-column--cell",
      
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      width: 150,
    },
    { field: "createdAt", headerName: "Created Date", flex: 1 },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Button variant="contained" color="primary" onClick={() => handleOpen(params.row)}>
          Edit
        </Button>
      )
    },
  ];

  return (
    <Box m="20px">
      <Header title="USERS" subtitle="All Users" />
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
          rows={users} 
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

      {/* Update User Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            value={selectedUser ? selectedUser.username : ''}
            onChange={(e) => setSelectedUser({ ...selectedUser, username: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={selectedUser ? selectedUser.email : ''}
            onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
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

export default Users;
