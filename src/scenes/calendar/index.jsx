


// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import {
// //   Box,
// //   Button,
// //   TextField,
// //   Typography,
// //   IconButton,
// //   useTheme,
// // } from "@mui/material";
// // import { Add, Remove } from "@mui/icons-material";
// // import { tokens } from "../../theme";

// // const Calendar = () => {
// //   const theme = useTheme();
// //   const colors = tokens(theme.palette.mode);

// //   const [title, setTitle] = useState("");
// //   const [intro, setIntro] = useState("");
// //   const [content, setContent] = useState("");
// //   const [image, setImage] = useState(null);
// //   const [points, setPoints] = useState([""]);

// //   useEffect(() => {
// //     const fetchBlogData = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:3000/api/auth/blog");
// //         const data = response.data;
// //         setTitle(data.title);
// //         setIntro(data.intro);
// //         setContent(data.content);
// //         setImage(data.image);
// //         setPoints(data.points || [""]);
// //       } catch (error) {
// //         console.error("Error fetching blog data:", error);
// //       }
// //     };
// //     fetchBlogData();
// //   }, []);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const blogData = { title, intro, content };
  
// //     try {
// //       const formData = new FormData();
// //       formData.append("image", image);
// //       Object.keys(blogData).forEach((key) => formData.append(key, blogData[key]));
  
// //       points.forEach((point, index) => {
// //         formData.append(`points[${index}]`, point);
// //       });
  
// //       await axios.put("http://localhost:3000/api/auth/blogs/main", formData, {
// //         headers: { "Content-Type": "multipart/form-data" },
// //       });
// //       alert("Blog updated successfully!");
// //     } catch (error) {
// //       console.error("Error updating blog:", error);
// //     }
// //   };

// //   const handleAddPoint = () => setPoints([...points, ""]);

// //   const handleRemovePoint = (index) => {
// //     setPoints(points.filter((_, i) => i !== index));
// //   };

// //   const handlePointChange = (index, value) => {
// //     const updatedPoints = points.slice();
// //     updatedPoints[index] = value;
// //     setPoints(updatedPoints);
// //   };

// //   return (
// //     <Box
// //       m="20px"
// //       p="20px"
// //       maxWidth="800px"
// //       bgcolor={colors.primary[400]}
// //       borderRadius="8px"
// //       boxShadow="0 4px 10px rgba(0,0,0,0.1)"
// //     >
// //       <Typography variant="h4" color={colors.greenAccent[500]} gutterBottom align="center">
// //         Admin Blog Editor
// //       </Typography>

// //       <form onSubmit={handleSubmit}>
// //         <TextField
// //           label="Blog Title"
// //           fullWidth
// //           variant="outlined"
// //           value={title}
// //           onChange={(e) => setTitle(e.target.value)}
// //           margin="normal"
// //         />

// //         <TextField
// //           label="Intro Paragraph"
// //           fullWidth
// //           variant="outlined"
// //           multiline
// //           value={intro}
// //           onChange={(e) => setIntro(e.target.value)}
// //           margin="normal"
// //         />

// //         <TextField
// //           label="Content"
// //           fullWidth
// //           variant="outlined"
// //           multiline
// //           rows={6}
// //           value={content}
// //           onChange={(e) => setContent(e.target.value)}
// //           margin="normal"
// //         />

// //         <Box mt={2}>
// //           <Typography variant="body1" fontWeight="bold" gutterBottom>
// //             Image
// //           </Typography>
// //           <input
// //             type="file"
// //             onChange={(e) => setImage(e.target.files[0])}
// //             style={{ marginTop: "10px" }}
// //           />
// //         </Box>

// //         <Box mt={4}>
// //           <Typography variant="body1" fontWeight="bold" gutterBottom>
// //             Key Points
// //           </Typography>
// //           {points.map((point, index) => (
// //             <Box key={index} display="flex" alignItems="center" gap="10px" mb={1}>
// //               <TextField
// //                 fullWidth
// //                 variant="outlined"
// //                 value={point}
// //                 onChange={(e) => handlePointChange(index, e.target.value)}
// //                 placeholder={`Point ${index + 1}`}
// //                 margin="dense"
// //               />
// //               <IconButton onClick={() => handleRemovePoint(index)} color="secondary">
// //                 <Remove />
// //               </IconButton>
// //             </Box>
// //           ))}
// //           <IconButton onClick={handleAddPoint} color="primary">
// //             <Add /> Add another point
// //           </IconButton>
// //         </Box>

// //         <Button
// //           type="submit"
// //           variant="contained"
// //           color="primary"
// //           fullWidth
// //           sx={{ mt: 3, bgcolor: colors.greenAccent[600] }}
// //         >
// //           Save Changes
// //         </Button>
// //       </form>
// //     </Box>
// //   );
// // };

// // export default Calendar;
























import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  useTheme,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import { Add, Remove, Edit, Delete } from "@mui/icons-material";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [points, setPoints] = useState([""]);
  const [editMode, setEditMode] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(null);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/auth/blog");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchAllBlogs();
  }, []);

  const resetForm = () => {
    setTitle("");
    setIntro("");
    setContent("");
    setImage(null);
    setPoints([""]);
    setEditMode(false);
    setCurrentBlogId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = { title, intro, content };

    try {
      const formData = new FormData();
      formData.append("image", image);
      Object.keys(blogData).forEach((key) => formData.append(key, blogData[key]));

      points.forEach((point, index) => {
        formData.append(`points[${index}]`, point);
      });

      if (editMode) {
        await axios.put(`http://localhost:3000/api/auth/blog/${currentBlogId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Blog updated successfully!");
      } else {
        await axios.post("http://localhost:3000/api/auth/blog", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Blog created successfully!");
      }

      resetForm();
      const response = await axios.get("http://localhost:3000/api/auth/blog");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  

  const handleEditBlog = (blog) => {
    setTitle(blog.title);
    setIntro(blog.intro);
    setContent(blog.content.replace(/<br \/>/g, "\n"));
    setPoints(blog.points || [""]);
    setCurrentBlogId(blog._id);
    setEditMode(true);
  };

  const handleDeleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/auth/blog/${id}`);
      alert("Blog deleted successfully!");
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleAddPoint = () => setPoints([...points, ""]);

  const handleRemovePoint = (index) => {
    setPoints(points.filter((_, i) => i !== index));
  };

  const handlePointChange = (index, value) => {
    const updatedPoints = points.slice();
    updatedPoints[index] = value;
    setPoints(updatedPoints);
  };

  // const [intro, setIntro] = useState('');

  // const handleIntroChange = (e) => {
  //   const value = e.target.value;
  //   const wordCount = value.split(/\s+/).filter(Boolean).length; // Count words

  //   if (wordCount <= 20) {
  //     setIntro(value);
  //   }
  // };

  return (
    <Box
      m="20px"
      p="20px"
      maxWidth="800px"
      bgcolor={colors.primary[400]}
      borderRadius="8px"
      boxShadow="0 4px 10px rgba(0,0,0,0.1)"
    >
      <Typography variant="h4" color={colors.greenAccent[500]} gutterBottom align="center">
        {editMode ? "Edit Blog" : "Create Blog"}
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Blog Title"
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />

        <TextField
          label="Intro Paragraph"
          fullWidth
          variant="outlined"
          multiline
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
          margin="normal"
        />
         {/* <TextField
      label="Intro Paragraph"
      fullWidth
      variant="outlined"
      multiline
      value={intro}
      onChange={handleIntroChange}
      margin="normal"
      helperText={`${intro.split(/\s+/).filter(Boolean).length}/20 words`}  // Display word count
    /> */}

        <TextField
          label="Content"
          fullWidth
          variant="outlined"
          multiline
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          margin="normal"
        />

        <Box mt={2}>
          <Typography variant="body1" fontWeight="bold" gutterBottom>
            Image
          </Typography>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            style={{ marginTop: "10px" }}
          />
        </Box>

        <Box mt={4}>
          <Typography variant="body1" fontWeight="bold" gutterBottom>
            Key Points
          </Typography>
          {points.map((point, index) => (
            <Box key={index} display="flex" alignItems="center" gap="10px" mb={1}>
              <TextField
                fullWidth
                variant="outlined"
                value={point}
                onChange={(e) => handlePointChange(index, e.target.value)}
                placeholder={`Point ${index + 1}`}
                margin="dense"
              />
              <IconButton onClick={() => handleRemovePoint(index)} color="secondary">
                <Remove />
              </IconButton>
            </Box>
          ))}
          <IconButton onClick={handleAddPoint} color="primary">
            <Add /> Add another point
          </IconButton>
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, bgcolor: colors.greenAccent[600] }}
        >
          {editMode ? "Update Blog" : "Create Blog"}
        </Button>
      </form>

      <Typography variant="h5" mt={4} mb={2}>
        Blog List
      </Typography>
      <List>
        {blogs.map((blog) => (
          <ListItem key={blog._id} divider>
            <ListItemText primary={blog.title} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleEditBlog(blog)} color="primary">
                <Edit />
              </IconButton>
              <IconButton onClick={() => handleDeleteBlog(blog._id)} color="secondary">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Calendar;























// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   IconButton,
//   useTheme,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction,
// } from "@mui/material";
// import { Add, Remove, Edit, Delete } from "@mui/icons-material";
// import { tokens } from "../../theme";

// const Calendar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const [blogs, setBlogs] = useState([]);
//   const [title, setTitle] = useState("");
//   const [intro, setIntro] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null);
//   const [points, setPoints] = useState([""]);
//   const [editMode, setEditMode] = useState(false);
//   const [currentBlogId, setCurrentBlogId] = useState(null);

//   useEffect(() => {
//     fetchAllBlogs();
//   }, []);

//   const fetchAllBlogs = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/api/auth/blog");
//       setBlogs(response.data);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     }
//   };

//   const resetForm = () => {
//     setTitle("");
//     setIntro("");
//     setContent("");
//     setImage(null);
//     setPoints([""]);
//     setEditMode(false);
//     setCurrentBlogId(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const blogData = { title, intro, content };

//     try {
//       const formData = new FormData();
//       if (image) formData.append("image", image);
//       Object.keys(blogData).forEach((key) => formData.append(key, blogData[key]));
//       points.forEach((point, index) => formData.append(`points[${index}]`, point));

//       if (editMode) {
//         await axios.put(`http://localhost:3000/api/auth/blog/${currentBlogId}`, formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         alert("Blog updated successfully!");
//       } else {
//         await axios.post("http://localhost:3000/api/auth/blog", formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         alert("Blog created successfully!");
//       }

//       resetForm();
//       fetchAllBlogs();
//     } catch (error) {
//       console.error("Error submitting blog:", error);
//     }
//   };

//   const handleEditBlog = (blog) => {
//     setTitle(blog.title);
//     setIntro(blog.intro);
//     setContent(blog.content.replace(/<br \/>/g, "\n"));
//     setPoints(blog.points || [""]);
//     setCurrentBlogId(blog._id);
//     setEditMode(true);
//   };

//   const handleDeleteBlog = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/api/auth/blog/${id}`);
//       alert("Blog deleted successfully!");
//       setBlogs(blogs.filter((blog) => blog._id !== id));
//     } catch (error) {
//       console.error("Error deleting blog:", error);
//     }
//   };

//   const handleAddPoint = () => setPoints([...points, ""]);
//   const handleRemovePoint = (index) => setPoints(points.filter((_, i) => i !== index));
//   const handlePointChange = (index, value) => {
//     const updatedPoints = points.slice();
//     updatedPoints[index] = value;
//     setPoints(updatedPoints);
//   };

//   return (
//     <Box
//       m="20px"
//       p="20px"
//       maxWidth="800px"
//       bgcolor={colors.primary[400]}
//       borderRadius="8px"
//       boxShadow="0 4px 10px rgba(0,0,0,0.1)"
//     >
//       <Typography variant="h4" color={colors.greenAccent[500]} gutterBottom align="center">
//         {editMode ? "Edit Blog" : "Create Blog"}
//       </Typography>

//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Blog Title"
//           fullWidth
//           variant="outlined"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           margin="normal"
//         />

//         <TextField
//           label="Intro Paragraph"
//           fullWidth
//           variant="outlined"
//           multiline
//           value={intro}
//           onChange={(e) => setIntro(e.target.value)}
//           margin="normal"
//         />

//         <TextField
//           label="Content"
//           fullWidth
//           variant="outlined"
//           multiline
//           rows={6}
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           margin="normal"
//         />

//         <Box mt={2}>
//           <Typography variant="body1" fontWeight="bold" gutterBottom>
//             Image
//           </Typography>
//           <input
//             type="file"
//             onChange={(e) => setImage(e.target.files[0])}
//             style={{ marginTop: "10px" }}
//           />
//         </Box>

//         <Box mt={4}>
//           <Typography variant="body1" fontWeight="bold" gutterBottom>
//             Key Points
//           </Typography>
//           {points.map((point, index) => (
//             <Box key={index} display="flex" alignItems="center" gap="10px" mb={1}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 value={point}
//                 onChange={(e) => handlePointChange(index, e.target.value)}
//                 placeholder={`Point ${index + 1}`}
//                 margin="dense"
//               />
//               <IconButton onClick={() => handleRemovePoint(index)} color="secondary">
//                 <Remove />
//               </IconButton>
//             </Box>
//           ))}
//           <IconButton onClick={handleAddPoint} color="primary">
//             <Add /> Add another point
//           </IconButton>
//         </Box>

//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           sx={{ mt: 3, bgcolor: colors.greenAccent[600] }}
//         >
//           {editMode ? "Update Blog" : "Create Blog"}
//         </Button>
//       </form>

//       <Typography variant="h5" mt={4} mb={2}>
//         Blog List
//       </Typography>
//       <List>
//         {blogs.map((blog) => (
//           <ListItem key={blog._id} divider>
//             <ListItemText primary={blog.title} />
//             <ListItemSecondaryAction>
//               <IconButton onClick={() => handleEditBlog(blog)} color="primary">
//                 <Edit />
//               </IconButton>
//               <IconButton onClick={() => handleDeleteBlog(blog._id)} color="secondary">
//                 <Delete />
//               </IconButton>
//             </ListItemSecondaryAction>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default Calendar;
