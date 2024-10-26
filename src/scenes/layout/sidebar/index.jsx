

// // import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
// // import { useContext, useState } from "react";
// // import { tokens } from "../../../theme";
// // import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
// // import {
// //   BarChartOutlined,
// //   CalendarTodayOutlined,
// //   ContactsOutlined,
// //   DashboardOutlined,
// //   DonutLargeOutlined,
// //   HelpOutlineOutlined,
// //   MapOutlined,
// //   MenuOutlined,
// //   PeopleAltOutlined,
// //   PersonOutlined,
// //   ReceiptOutlined,
// //   TimelineOutlined,
// //   WavesOutlined,
// // } from "@mui/icons-material";
// // import avatar from "../../../assets/images/avatar.png";
// // import logo from "../../../assets/images/logo.png";
// // import Item from "./Item"; // Make sure this uses Link from react-router-dom
// // import { ToggledContext } from "../../../App";

// // const SideBar = () => {
// //   const [collapsed, setCollapsed] = useState(false);
// //   const { toggled, setToggled } = useContext(ToggledContext);
// //   const theme = useTheme();
// //   const colors = tokens(theme.palette.mode);

 
  
// //   return (
// //     <Sidebar
// //       backgroundColor={colors.primary[400]}
// //       rootStyles={{
// //         border: 0,
// //         height: "100%",
// //       }}
// //       collapsed={collapsed}
// //       onBackdropClick={() => setToggled(false)}
// //       toggled={toggled}
// //       breakPoint="md"
// //     >
// //       <Menu
// //         menuItemStyles={{
// //           button: { ":hover": { background: "transparent" } },
// //         }}
// //       >
// //         <MenuItem
// //           rootStyles={{
// //             margin: "10px 0 20px 0",
// //             color: colors.gray[100],
// //           }}
// //         >
// //           <Box
// //             sx={{
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "space-between",
// //             }}
// //           >
// //             {!collapsed && (
// //               <Box
// //                 display="flex"
// //                 alignItems="center"
// //                 gap="12px"
// //                 sx={{ transition: ".3s ease" }}
// //               >
// //                 <img
// //                   style={{ width: "30px", height: "30px", borderRadius: "8px" }}
// //                   src={logo}
// //                   alt="Argon"
// //                 />
// //                 <Typography
// //                   variant="h4"
// //                   fontWeight="bold"
// //                   textTransform="capitalize"
// //                   color={colors.greenAccent[500]}
// //                 >
// //                   Argon
// //                 </Typography>
// //               </Box>
// //             )}
// //             <IconButton onClick={() => setCollapsed(!collapsed)}>
// //               <MenuOutlined />
// //             </IconButton>
// //           </Box>
// //         </MenuItem>
// //       </Menu>
      
// //       {!collapsed && (
// //         <Box
// //           sx={{
// //             display: "flex",
// //             flexDirection: "column",
// //             alignItems: "center",
// //             gap: "10px",
// //             mb: "25px",
// //           }}
// //         >
// //           <Avatar
// //             alt="avatar"
// //             src={avatar}
// //             sx={{ width: "100px", height: "100px" }}
// //           />
// //           <Box sx={{ textAlign: "center" }}>
// //             <Typography variant="h3" fontWeight="bold" color={colors.gray[100]}>
// //               Tony Stark
// //             </Typography>
// //             <Typography
// //               variant="h6"
// //               fontWeight="500"
// //               color={colors.greenAccent[500]}
// //             >
// //               VP Fancy Admin
// //             </Typography>
// //           </Box>
// //         </Box>
// //       )}

// //       <Box mb={5} pl={collapsed ? undefined : "5%"}>
// //         <Menu
// //           menuItemStyles={{
// //             button: {
// //               ":hover": {
// //                 color: "#868dfb",
// //                 background: "transparent",
// //                 transition: ".4s ease",
// //               },
// //             },
// //           }}
// //         >
// //           <Item
// //             title="Dashboard"
// //             path="/dashboard" // Update the path as necessary
// //             colors={colors}
// //             icon={<DashboardOutlined />}
// //           />
// //         </Menu>
        
// //         <Typography
// //           variant="h6"
// //           color={colors.gray[300]}
// //           sx={{ m: "15px 0 5px 20px" }}
// //         >
// //           {!collapsed ? "Data" : " "}
// //         </Typography>
        
// //         <Menu
// //           menuItemStyles={{
// //             button: {
// //               ":hover": {
// //                 color: "#868dfb",
// //                 background: "transparent",
// //                 transition: ".4s ease",
// //               },
// //             },
// //           }}
// //         >
// //           <Item
// //             title="All Product"
// //             path="/team" 
// //             colors={colors}
// //             icon={<PeopleAltOutlined />}
// //           />
// //           <Item
// //             title="Create Product"
// //             path="/contacts"
// //             colors={colors}
// //             icon={<ContactsOutlined />}
// //           />
         
        
      
// //           {/* <Item
// //             title="Update Product"
// //             path="/invoices"
// //             colors={colors}
// //             icon={<ReceiptOutlined />}
// //           /> */}
// //         </Menu>
        
// //         <Typography
// //           variant="h6"
// //           color={colors.gray[300]}
// //           sx={{ m: "15px 0 5px 20px" }}
// //         >
// //           {!collapsed ? "Pages" : " "}
// //         </Typography>
        
// //         <Menu
// //           menuItemStyles={{
// //             button: {
// //               ":hover": {
// //                 color: "#868dfb",
// //                 background: "transparent",
// //                 transition: ".4s ease",
// //               },
// //             },
// //           }}
// //         >
// //           <Item
// //             title="Profile Form"
// //             path="/form" // Ensure paths are correct
// //             colors={colors}
// //             icon={<PersonOutlined />}
// //           />
// //           <Item
// //             title="Calendar"
// //             path="/calendar"
// //             colors={colors}
// //             icon={<CalendarTodayOutlined />}
// //           />
// //           <Item
// //             title="FAQ Page"
// //             path="/faq"
// //             colors={colors}
// //             icon={<HelpOutlineOutlined />}
// //           />
// //         </Menu>
        
// //         <Typography
// //           variant="h6"
// //           color={colors.gray[300]}
// //           sx={{ m: "15px 0 5px 20px" }}
// //         >
// //           {!collapsed ? "Charts" : " "}
// //         </Typography>
        
// //         <Menu
// //           menuItemStyles={{
// //             button: {
// //               ":hover": {
// //                 color: "#868dfb",
// //                 background: "transparent",
// //                 transition: ".4s ease",
// //               },
// //             },
// //           }}
// //         >
// //           <Item
// //             title="Bar Chart"
// //             path="/bar"
// //             colors={colors}
// //             icon={<BarChartOutlined />}
// //           />
// //           <Item
// //             title="Pie Chart"
// //             path="/pie"
// //             colors={colors}
// //             icon={<DonutLargeOutlined />}
// //           />
// //           <Item
// //             title="Line Chart"
// //             path="/line"
// //             colors={colors}
// //             icon={<TimelineOutlined />}
// //           />
// //           <Item
// //             title="Geography Chart"
// //             path="/geography"
// //             colors={colors}
// //             icon={<MapOutlined />}
// //           />
// //           <Item
// //             title="Stream Chart"
// //             path="/stream"
// //             colors={colors}
// //             icon={<WavesOutlined />}
// //           />
// //         </Menu>
// //       </Box>
// //     </Sidebar>
// //   );
// // };

// // export default SideBar;



















import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { tokens } from "../../../theme";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar"; // Import SubMenu for dropdown functionality
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  DashboardOutlined,
  DonutLargeOutlined,
  HelpOutlineOutlined,
  MapOutlined,
  MenuOutlined,
  PeopleAltOutlined,
  PersonOutlined,
  ReceiptOutlined,
  TimelineOutlined,
  WavesOutlined,
} from "@mui/icons-material";
import avatar from "../../../assets/images/avatar.png";
import logo from "../../../assets/images/logo.png";
import Item from "./Item"; 
import { ToggledContext } from "../../../App";



const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { toggled, setToggled } = useContext(ToggledContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Sidebar
      backgroundColor={colors.primary[400]}
      rootStyles={{
        border: 0,
        height: "100%",
      }}
      collapsed={collapsed}
      onBackdropClick={() => setToggled(false)}
      toggled={toggled}
      breakPoint="md"
    >
      <Menu
        menuItemStyles={{
          button: { ":hover": { background: "transparent" } },
        }}
      >
        <MenuItem
          rootStyles={{
            margin: "10px 0 20px 0",
            color: colors.gray[100],
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                alignItems="center"
                gap="12px"
                sx={{ transition: ".3s ease" }}
              >
                <img
                  style={{ width: "30px", height: "30px", borderRadius: "8px" }}
                  src={logo}
                  alt="Argon"
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  textTransform="capitalize"
                  color={colors.greenAccent[500]}
                >
                  Argon
                </Typography>
              </Box>
            )}
            <IconButton onClick={() => setCollapsed(!collapsed)}>
              <MenuOutlined />
            </IconButton>
          </Box>
        </MenuItem>
      </Menu>

      {!collapsed && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            mb: "25px",
          }}
        >
          <Avatar
            alt="avatar"
            src={avatar}
            sx={{ width: "100px", height: "100px" }}
          />
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h3" fontWeight="bold" color={colors.gray[100]}>
              Admin Panel
            </Typography>
            {/* <Typography
              variant="h6"
              fontWeight="500"
              color={colors.greenAccent[500]}
            >
              VP Fancy Admin
            </Typography> */}
          </Box>
        </Box>
      )}

      <Box mb={5} pl={collapsed ? undefined : "5%"}>
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item
            title="Dashboard"
            path="/dashboard" 
            colors={colors}
            icon={<DashboardOutlined />}
          />
        </Menu>

        <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          {!collapsed ? "Data" : " "}
        </Typography>


        {/* <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item
            title="Users"
            path="/users" 
            colors={colors}
            icon={<DashboardOutlined />}
          />
        </Menu>

        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item
            title="UserCreate"
            path="/userCreate" 
            colors={colors}
            icon={<DashboardOutlined />}
          />
        </Menu> */}



        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          
          <SubMenu
  label="User"
  icon={<PeopleAltOutlined />}
  rootStyles={{
    button: {
      backgroundColor: colors.gray[100], 
      ":hover": { backgroundColor: colors.primary[500] }, 
    },
    subMenuContent: {
      backgroundColor: colors.gray[100], 
    },
  }}
  
>
  <MenuItem
    rootStyles={{
      backgroundColor: colors.primary[400],
      button: {
        backgroundColor: colors.gray[100], 
        ":hover": { backgroundColor: colors.primary[500] }, 
      },
    }}
  >
    <Item
      title="Users"
      path="/users"
      colors={colors}
      icon={<PeopleAltOutlined />}
    />
  </MenuItem>
  <MenuItem
    rootStyles={{
      backgroundColor: colors.primary[400],
      button: {
        backgroundColor: colors.gray[100], 
        ":hover": { backgroundColor: colors.primary[500] }, 
      },
    }}
    
  >
    <Item
      title="Create user"
      path="/userCreate"
      colors={colors}
      icon={<ContactsOutlined />}
    />
  </MenuItem>
</SubMenu>

        </Menu>


        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          
          <SubMenu
  label="Product"
  icon={<PeopleAltOutlined />}
  rootStyles={{
    button: {
      backgroundColor: colors.gray[100], 
      ":hover": { backgroundColor: colors.primary[500] }, 
    },
    subMenuContent: {
      backgroundColor: colors.gray[100], 
    },
  }}
  
>
  <MenuItem
    rootStyles={{
      backgroundColor: colors.primary[400],
      button: {
        backgroundColor: colors.gray[100], 
        ":hover": { backgroundColor: colors.primary[500] }, 
      },
    }}
  >
    <Item
      title="All Product"
      path="/team"
      colors={colors}
      icon={<PeopleAltOutlined />}
    />
  </MenuItem>
  <MenuItem
    rootStyles={{
      backgroundColor: colors.primary[400],
      button: {
        backgroundColor: colors.gray[100], 
        ":hover": { backgroundColor: colors.primary[500] }, 
      },
    }}
    
  >
    <Item
      title="Create Product"
      path="/contacts"
      colors={colors}
      icon={<ContactsOutlined />}
    />
  </MenuItem>
</SubMenu>

        </Menu>

        <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          {!collapsed ? "Pages" : " "}
        </Typography>

        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item
            title="Profile Form"
            path="/form" 
            colors={colors}
            icon={<PersonOutlined />}
          />
          <Item
            title="Blog"
            path="/calendar"
            colors={colors}
            icon={<CalendarTodayOutlined />}
          />

<Item
            title="Contact"
            path="/Email"
            colors={colors}
            icon={<CalendarTodayOutlined />}
          />

          <Item
            title="FAQ Page"
            path="/faq"
            colors={colors}
            icon={<HelpOutlineOutlined />}
          />
        </Menu>

        <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          {!collapsed ? "Charts" : " "}
        </Typography>

        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item
            title="Bar Chart"
            path="/bar"
            colors={colors}
            icon={<BarChartOutlined />}
          />
          <Item
            title="Pie Chart"
            path="/pie"
            colors={colors}
            icon={<DonutLargeOutlined />}
          />
          <Item
            title="Line Chart"
            path="/line"
            colors={colors}
            icon={<TimelineOutlined />}
          />
          <Item
            title="Geography Chart"
            path="/geography"
            colors={colors}
            icon={<MapOutlined />}
          />
          <Item
            title="Stream Chart"
            path="/stream"
            colors={colors}
            icon={<WavesOutlined />}
          />
        </Menu>
      </Box>
    </Sidebar>
  );
};

export default SideBar;
















