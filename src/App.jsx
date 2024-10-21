


// import React, { createContext, useState, useEffect } from "react";
// import { Box, CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
// import { Navbar, SideBar, Login } from "./scenes";
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
// import Dashboard from "./scenes/dashboard"; 
// import Team from "./scenes/team"; 
// import Contacts from "./scenes/contacts"; 
// import Invoices from "./scenes/invoices";
// import Form from "./scenes/form";
// import Calendar from "./scenes/calendar";
// import Faq from "./scenes/faq";
// import Bar from "./scenes/bar";
// import Pie from "./scenes/pie";
// import Line from "./scenes/line";
// import Geography from "./scenes/geography";
// import Stream from "./scenes/stream";
// import axios from 'axios';

// export const AuthContext = createContext(null);
// export const ToggledContext = createContext(null);

// function App() {
//   const [theme, colorMode] = useMode();
//   const [toggled, setToggled] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

 
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//       navigate("/login");
//     }
//   }, [navigate]);

//   const values = { toggled, setToggled };

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
//           <ToggledContext.Provider value={values}>
//             <Box sx={{ display: "flex", height: "100vh", maxWidth: "100%" }}>
//               {isAuthenticated && <SideBar />}
//               <Box
//                 sx={{
//                   flexGrow: 1,
//                   display: "flex",
//                   flexDirection: "column",
//                   height: "100%",
//                   maxWidth: "100%",
//                 }}
//               >
//                 {isAuthenticated && <Navbar />}
//                 <Box sx={{ overflowY: "auto", flex: 1, maxWidth: "100%" }}>
//                   <Routes>
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/" element={<ProtectedRoute />}>
//                       <Route index element={<Dashboard />} />
//                       <Route path="dashboard" element={<Dashboard />} />
//                       <Route path="team" element={<Team />} />
//                       <Route path="contacts" element={<Contacts />} />
//                       <Route path="invoices" element={<Invoices />} />
//                       <Route path="form" element={<Form />} />
//                       <Route path="calendar" element={<Calendar />} />
//                       <Route path="faq" element={<Faq />} />
//                       <Route path="bar" element={<Bar />} />
//                       <Route path="pie" element={<Pie />} />
//                       <Route path="line" element={<Line />} />
//                       <Route path="geography" element={<Geography />} />
//                       <Route path="stream" element={<Stream />} />
                      
//                     </Route>
//                     <Route path="*" element={<Navigate to="/" />} />
//                   </Routes>
//                 </Box>
//               </Box>
//             </Box>
//           </ToggledContext.Provider>
//         </AuthContext.Provider>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;





import React, { createContext, useState, useEffect } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Navbar, SideBar, Login } from "./scenes";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./scenes/dashboard"; 
import Team from "./scenes/team"; 
import Contacts from "./scenes/contacts"; 
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import Faq from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";
import Stream from "./scenes/stream";
import Users from "./scenes/users/user"
import UserCreate from "./scenes/userCreate/userCreate"
import axios from 'axios';

export const AuthContext = createContext(null);
export const ToggledContext = createContext(null);

function App() {
  const [theme, colorMode] = useMode();
  const [toggled, setToggled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state to prevent flickering
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      navigate("/login");
    }

    // Set loading to false once the authentication check is done
    setIsLoading(false);
  }, [navigate]);

  const values = { toggled, setToggled };

  // Display a loading screen until authentication check is complete
  if (isLoading) {
    return <div>Loading...</div>;  // You can customize this with a spinner or loader
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          <ToggledContext.Provider value={values}>
            <Box sx={{ display: "flex", height: "100vh", maxWidth: "100%" }}>
              {isAuthenticated && <SideBar />}
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  maxWidth: "100%",
                }}
              >
                {isAuthenticated && <Navbar />}
                <Box sx={{ overflowY: "auto", flex: 1, maxWidth: "100%" }}>
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<ProtectedRoute />}>
                      <Route index element={<Dashboard />} />
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="users" element={<Users />} />
                      <Route path="userCreate" element={<UserCreate />} />
                      <Route path="team" element={<Team />} />
                      <Route path="contacts" element={<Contacts />} />
                      <Route path="invoices" element={<Invoices />} />
                      <Route path="form" element={<Form />} />
                      <Route path="calendar" element={<Calendar />} />
                      <Route path="faq" element={<Faq />} />
                      <Route path="bar" element={<Bar />} />
                      <Route path="pie" element={<Pie />} />
                      <Route path="line" element={<Line />} />
                      <Route path="geography" element={<Geography />} />
                      <Route path="stream" element={<Stream />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                </Box>
              </Box>
            </Box>
          </ToggledContext.Provider>
        </AuthContext.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
