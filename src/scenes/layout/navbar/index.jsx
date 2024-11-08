// // // import {
// // //   Box,
// // //   IconButton,
// // //   InputBase,
// // //   useMediaQuery,
// // //   useTheme,
// // // } from "@mui/material";
// // // import { tokens, ColorModeContext } from "../../../theme";
// // // import { useContext } from "react";
// // // import {
// // //   DarkModeOutlined,
// // //   LightModeOutlined,
// // //   MenuOutlined,
// // //   NotificationsOutlined,
// // //   PersonOutlined,
// // //   SearchOutlined,
// // //   SettingsOutlined,
// // // } from "@mui/icons-material";
// // // import { ToggledContext } from "../../../App";
// // // const Navbar = () => {
// // //   const theme = useTheme();
// // //   const colorMode = useContext(ColorModeContext);
// // //   const { toggled, setToggled } = useContext(ToggledContext);
// // //   const isMdDevices = useMediaQuery("(max-width:768px)");
// // //   const isXsDevices = useMediaQuery("(max-width:466px)");
// // //   const colors = tokens(theme.palette.mode);
// // //   return (
// // //     <Box
// // //       display="flex"
// // //       alignItems="center"
// // //       justifyContent="space-between"
// // //       p={2}
// // //     >
// // //       <Box display="flex" alignItems="center" gap={2}>
// // //         <IconButton
// // //           sx={{ display: `${isMdDevices ? "flex" : "none"}` }}
// // //           onClick={() => setToggled(!toggled)}
// // //         >
// // //           <MenuOutlined />
// // //         </IconButton>
// // //         <Box
// // //           display="flex"
// // //           alignItems="center"
// // //           bgcolor={colors.primary[400]}
// // //           borderRadius="3px"
// // //           sx={{ display: `${isXsDevices ? "none" : "flex"}` }}
// // //         >
// // //           <InputBase placeholder="Search" sx={{ ml: 2, flex: 1 }} />
// // //           <IconButton type="button" sx={{ p: 1 }}>
// // //             <SearchOutlined />
// // //           </IconButton>
// // //         </Box>
// // //       </Box>

// // //       <Box>
// // //         <IconButton onClick={colorMode.toggleColorMode}>
// // //           {theme.palette.mode === "dark" ? (
// // //             <LightModeOutlined />
// // //           ) : (
// // //             <DarkModeOutlined />
// // //           )}
// // //         </IconButton>
// // //         <IconButton>
// // //           <NotificationsOutlined />
// // //         </IconButton>
// // //         <IconButton>
// // //           <SettingsOutlined />
// // //         </IconButton>
// // //         <IconButton>
// // //           <PersonOutlined />
// // //         </IconButton>
// // //       </Box>
// // //     </Box>
// // //   );
// // // };

// // // export default Navbar;




// // import {
// //   Box,
// //   IconButton,
// //   InputBase,
// //   useMediaQuery,
// //   useTheme,
// //   Popover,
// //   Typography,
// //   Divider,
// //   Button,
// //   Avatar
// // } from "@mui/material";
// // import { tokens, ColorModeContext } from "../../../theme";
// // import { useContext, useState } from "react";
// // import {
// //   DarkModeOutlined,
// //   LightModeOutlined,
// //   MenuOutlined,
// //   NotificationsOutlined,
// //   PersonOutlined,
// //   SearchOutlined,
// //   SettingsOutlined,
// // } from "@mui/icons-material";
// // import { ToggledContext } from "../../../App";
// // import avatar from "../../../assets/images/avatar.png";
// // import login from "../login/login"

// // const Navbar = () => {
// //   const theme = useTheme();
// //   const colorMode = useContext(ColorModeContext);
// //   const { toggled, setToggled } = useContext(ToggledContext);
// //   const isMdDevices = useMediaQuery("(max-width:768px)");
// //   const isXsDevices = useMediaQuery("(max-width:466px)");
// //   const colors = tokens(theme.palette.mode);

// //   const [anchorEl, setAnchorEl] = useState(null);

// //   // Handle popover open
// //   const handleProfileClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   // Handle popover close
// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };

// //   const open = Boolean(anchorEl);
// //   const id = open ? "simple-popover" : undefined;

// //   return (
// //     <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
// //       <Box display="flex" alignItems="center" gap={2}>
// //         <IconButton
// //           sx={{ display: `${isMdDevices ? "flex" : "none"}` }}
// //           onClick={() => setToggled(!toggled)}
// //         >
// //           <MenuOutlined />
// //         </IconButton>
// //         <Box
// //           display="flex"
// //           alignItems="center"
// //           bgcolor={colors.primary[400]}
// //           borderRadius="3px"
// //           sx={{ display: `${isXsDevices ? "none" : "flex"}` }}
// //         >
// //           <InputBase placeholder="Search" sx={{ ml: 2, flex: 1 }} />
// //           <IconButton type="button" sx={{ p: 1 }}>
// //             <SearchOutlined />
// //           </IconButton>
// //         </Box>
// //       </Box>

// //       <Box>
// //         <IconButton onClick={colorMode.toggleColorMode}>
// //           {theme.palette.mode === "dark" ? (
// //             <LightModeOutlined />
// //           ) : (
// //             <DarkModeOutlined />
// //           )}
// //         </IconButton>
// //         <IconButton>
// //           <NotificationsOutlined />
// //         </IconButton>
// //         <IconButton>
// //           <SettingsOutlined />
// //         </IconButton>
// //         <IconButton onClick={handleProfileClick}>
// //           <PersonOutlined />
// //         </IconButton>

// //         {/* User Profile Popover */}
// //         <Popover
// //           id={id}
// //           open={open}
// //           anchorEl={anchorEl}
// //           onClose={handleClose}
// //           anchorOrigin={{
// //             vertical: "bottom",
// //             horizontal: "right",
// //           }}
// //         >
// //           <Box p={2} sx={{ width: 250 }}>
// //             {/* User Profile Image */}
// //             <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
// //               {/* <img
// //                 src="/mnt/data/user.png"
// //                 alt="Profile"
// //                 style={{ borderRadius: "50%", width: 60, height: 60 }}
// //               /> */}
// //               <Avatar
// //             alt="avatar"
// //             src={avatar}
// //             sx={{ width: "50px", height: "50px" }}
// //           />
// //             </Box>

// //             {/* User Information */}
// //             <Typography variant="h6" align="center">
// //               Michael Roberts
              
// //             </Typography>
// //             <Typography variant="body2" color="textSecondary" align="center">
// //               Administrator
// //             </Typography>
// //             <Typography variant="body2" color="textSecondary" align="center">
// //               info@shop.com
// //             </Typography>

// //             <Divider sx={{ my: 2 }} />

// //             {/* Profile Actions */}
// //             <Box display="flex" flexDirection="column" gap={1}>
// //               <Button
// //                 variant="contained"
// //                 startIcon={<PersonOutlined />}
// //                 fullWidth
// //               >
// //                 My Profile
// //               </Button>
// //               <Button variant="contained" startIcon={<NotificationsOutlined />} fullWidth>
// //                 My Inbox
// //               </Button>
// //               <Button variant="contained" startIcon={<SettingsOutlined />} fullWidth>
// //                 My Tasks
// //               </Button>
// //             </Box>

// //             {/* Logout Button */}
// //             <Button
// //               variant="contained"
// //               color="error"
// //               fullWidth
// //               sx={{ mt: 2 }}
// //             >
// //               Logout
// //             </Button>
// //           </Box>
// //         </Popover>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Navbar;


// ////////////////////////////////////////////////////


// import {
//   Box,
//   IconButton,
//   InputBase,
//   useMediaQuery,
//   useTheme,
//   Popover,
//   Typography,
//   Divider,
//   Button,
//   Avatar
// } from "@mui/material";
// import { tokens, ColorModeContext } from "../../../theme";
// import { useContext, useState } from "react";
// import {
//   DarkModeOutlined,
//   LightModeOutlined,
//   MenuOutlined,
//   NotificationsOutlined,
//   PersonOutlined,
//   SearchOutlined,
//   SettingsOutlined,
// } from "@mui/icons-material";
// import { ToggledContext } from "../../../App";
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import avatar from "../../../assets/images/avatar.png";

// const Navbar = () => {
//   const theme = useTheme();
//   const colorMode = useContext(ColorModeContext);
//   const { toggled, setToggled } = useContext(ToggledContext);
//   const isMdDevices = useMediaQuery("(max-width:768px)");
//   const isXsDevices = useMediaQuery("(max-width:466px)");
//   const colors = tokens(theme.palette.mode);
//   const navigate = useNavigate(); // Initialize navigate

//   const [anchorEl, setAnchorEl] = useState(null);

//   // Handle popover open
//   const handleProfileClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   // Handle popover close
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   // Handle logout
//   const handleLogout = () => {
//     // Clear any authentication tokens, local storage, etc.
//     localStorage.clear();

//     // Navigate to the login page
//     navigate("/login"); // Adjust the path based on your routing
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;

//   return (
//     <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
//       <Box display="flex" alignItems="center" gap={2}>
//         <IconButton
//           sx={{ display: `${isMdDevices ? "flex" : "none"}` }}
//           onClick={() => setToggled(!toggled)}
//         >
//           <MenuOutlined />
//         </IconButton>
//         <Box
//           display="flex"
//           alignItems="center"
//           bgcolor={colors.primary[400]}
//           borderRadius="3px"
//           sx={{ display: `${isXsDevices ? "none" : "flex"}` }}
//         >
//           <InputBase placeholder="Search" sx={{ ml: 2, flex: 1 }} />
//           <IconButton type="button" sx={{ p: 1 }}>
//             <SearchOutlined />
//           </IconButton>
//         </Box>
//       </Box>

//       <Box>
//         <IconButton onClick={colorMode.toggleColorMode}>
//           {theme.palette.mode === "dark" ? (
//             <LightModeOutlined />
//           ) : (
//             <DarkModeOutlined />
//           )}
//         </IconButton>
//         <IconButton>
//           <NotificationsOutlined />
//         </IconButton>
//         <IconButton>
//           <SettingsOutlined />
//         </IconButton>
//         <IconButton onClick={handleProfileClick}>
//           <PersonOutlined />
//         </IconButton>

//         {/* User Profile Popover */}
//         <Popover
//           id={id}
//           open={open}
//           anchorEl={anchorEl}
//           onClose={handleClose}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "right",
//           }}
//         >
//           <Box p={2} sx={{ width: 250 }}>
//             {/* User Profile Image */}
//             <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
//               <Avatar
//                 alt="avatar"
//                 src={avatar}
//                 sx={{ width: "50px", height: "50px" }}
//               />
//             </Box>

//             {/* User Information */}
//             <Typography variant="h6" align="center">
//               Michael Roberts
//             </Typography>
//             <Typography variant="body2" color="textSecondary" align="center">
//               Administrator
//             </Typography>
//             <Typography variant="body2" color="textSecondary" align="center">
//               info@shop.com
//             </Typography>

//             <Divider sx={{ my: 2 }} />

//             {/* Profile Actions */}
//             <Box display="flex" flexDirection="column" gap={1}>
//               <Button
//                 variant="contained"
//                 startIcon={<PersonOutlined />}
//                 fullWidth
//               >
//                 My Profile
//               </Button>
//               <Button variant="contained" startIcon={<NotificationsOutlined />} fullWidth>
//                 My Inbox
//               </Button>
//               <Button variant="contained" startIcon={<SettingsOutlined />} fullWidth>
//                 My Tasks
//               </Button>
//             </Box>

//             {/* Logout Button */}
//             <Button
//               variant="contained"
//               color="error"
//               fullWidth
//               sx={{ mt: 2 }}
//               onClick={handleLogout} // Trigger logout
//             >
//               Logout
//             </Button>
//           </Box>
//         </Popover>
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;



////////////////////////////////////



import {
  Box,
  IconButton,
  InputBase,
  useMediaQuery,
  useTheme,
  Popover,
  Typography,
  Divider,
  Button,
  Avatar
} from "@mui/material";
import { tokens, ColorModeContext } from "../../../theme";
import { useContext, useState } from "react";
import {
  DarkModeOutlined,
  LightModeOutlined,
  MenuOutlined,
  NotificationsOutlined,
  PersonOutlined,
  SearchOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { ToggledContext } from "../../../App";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import avatar from "../../../assets/images/avatar.png";

const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { toggled, setToggled } = useContext(ToggledContext);
  const isMdDevices = useMediaQuery("(max-width:768px)");
  const isXsDevices = useMediaQuery("(max-width:466px)");
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate(); // Initialize navigate

  const [anchorEl, setAnchorEl] = useState(null);

  // Handle popover open
  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle popover close
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle logout
  const handleLogout = () => {
    // Clear any authentication tokens, local storage, etc.
    localStorage.clear();

    // Navigate to the login page
    navigate("/login"); // Adjust the path based on your routing
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
      <Box display="flex" alignItems="center" gap={2}>
        <IconButton
          sx={{ display: `${isMdDevices ? "flex" : "none"}` }}
          onClick={() => setToggled(!toggled)}
        >
          <MenuOutlined />
        </IconButton>
        <Box
          display="flex"
          alignItems="center"
          bgcolor={colors.primary[400]}
          borderRadius="3px"
          sx={{ display: `${isXsDevices ? "none" : "flex"}` }}
        >
          <InputBase placeholder="Search" sx={{ ml: 2, flex: 1 }} />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchOutlined />
          </IconButton>
        </Box>
      </Box>

      <Box>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton onClick={handleProfileClick}>
          <PersonOutlined />
        </IconButton>

        {/* User Profile Popover */}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Box p={2} sx={{ width: 250 }}>
            
            <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
              <Avatar
                alt="avatar"
                src={avatar}
                sx={{ width: "50px", height: "50px" }}
              />
            </Box>

            {/* User Information */}
            <Typography variant="h6" align="center">
              Michael Roberts
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              Administrator
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              info@shop.com
            </Typography>

            <Divider sx={{ my: 2 }} />

            {/* Profile Actions */}
            <Box display="flex" flexDirection="column" gap={1}>
              <Button
                variant="contained"
                startIcon={<PersonOutlined />}
                fullWidth
              >
                My Profile
              </Button>
              <Button variant="contained" startIcon={<NotificationsOutlined />} fullWidth>
                My Inbox
              </Button>
              <Button variant="contained" startIcon={<SettingsOutlined />} fullWidth>
                My Tasks
              </Button>
            </Box>

            {/* Logout Button */}
            <Button
              variant="contained"
              color="error"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleLogout} // Trigger logout
            >
              Logout
            </Button>
          </Box>
        </Popover>
      </Box>
    </Box>
  );
};

export default Navbar;
