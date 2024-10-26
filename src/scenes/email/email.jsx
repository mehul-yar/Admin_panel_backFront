

// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   CircularProgress
// } from '@mui/material';

// function Email() {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchMessages() {
//       try {
//         const response = await fetch('/api/getMessages');

//         // Check if the response is successful
//         if (!response.ok) {
//           throw new Error(`Server error: ${response.status}`);
//         }

//         // Check if the response is JSON
//         const contentType = response.headers.get("content-type");
//         if (contentType && contentType.includes("application/json")) {
//           const data = await response.json();
//           setMessages(data);
//         } else {
//           throw new Error("Received non-JSON response from the server");
//         }
//       } catch (err) {
//         console.error("Failed to fetch messages:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchMessages();
//   }, []);

//   return (
//     <Box m="20px">
//       <Typography variant="h4" gutterBottom>
//         User Messages
//       </Typography>
      
//       {loading ? (
//         <Box display="flex" justifyContent="center" mt="20px">
//           <CircularProgress />
//         </Box>
//       ) : error ? (
//         <Typography color="error" variant="body1">
//           {error}
//         </Typography>
//       ) : (
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Message</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {messages.map((msg, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{msg.name}</TableCell>
//                   <TableCell>{msg.email}</TableCell>
//                   <TableCell>{msg.message}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </Box>
//   );
// }

// export default Email;














import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress
} from '@mui/material';

function Email() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await fetch('http://localhost:3000/api/auth/getMessages');

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        setMessages(data);
      } catch (err) {
        console.error("Failed to fetch messages:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMessages();
  }, []);

  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        User Messages
      </Typography>
      
      {loading ? (
        <Box display="flex" justifyContent="center" mt="20px">
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" variant="body1">
          {error}
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {messages.map((msg, index) => (
                <TableRow key={index}>
                  <TableCell>{msg.name}</TableCell>
                  <TableCell>{msg.email}</TableCell>
                  <TableCell>{msg.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default Email;
