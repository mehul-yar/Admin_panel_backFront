


// import React, { useEffect, useState } from 'react';
// import {
//     Box,
//     Typography,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper,
//     CircularProgress,
//     IconButton,
//     Button,
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogTitle,
//     TextField,
// } from '@mui/material';
// import { Edit, Delete } from '@mui/icons-material';

// function LatestPost() {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [open, setOpen] = useState(false); // State to manage dialog visibility
//     const [newPost, setNewPost] = useState({
//         title: '',
//         description: '',
//         author: '',
//         image: null,
//     });

//     useEffect(() => {
//         async function fetchPosts() {
//             try {
//                 const response = await fetch('http://localhost:3000/api/auth/posts'); 
//                 if (!response.ok) {
//                     throw new Error(`Server error: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setPosts(data);
//             } catch (err) {
//                 console.error("Failed to fetch posts:", err);
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         fetchPosts();
//     }, []);

//     const handleDelete = async (id) => {
//         try {
//             await fetch(`http://localhost:3000/api/auth/posts/${id}`, { method: 'DELETE' });
//             setPosts(posts.filter(post => post._id !== id));
//         } catch (err) {
//             console.error("Failed to delete post:", err);
//             setError("Could not delete the post.");
//         }
//     };

//     const handleOpen = () => setOpen(true);
//     const handleClose = () => {
//         setOpen(false);
//         setNewPost({ title: '', description: '', author: '', image: null });
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewPost(prevState => ({ ...prevState, [name]: value }));
//     };

//     const handleImageChange = (e) => {
//         setNewPost(prevState => ({ ...prevState, image: e.target.files[0] }));
//     };

//     const handleCreatePost = async () => {
//         const formData = new FormData();
//         formData.append('title', newPost.title);
//         formData.append('description', newPost.description);
//         formData.append('author', newPost.author);
//         if (newPost.image) formData.append('image', newPost.image);

//         try {
//             const response = await fetch('http://localhost:3000/api/auth/posts', {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (!response.ok) {
//                 throw new Error(`Failed to create post: ${response.status}`);
//             }

//             const createdPost = await response.json();
//             setPosts([...posts, createdPost]);
//             handleClose();
//         } catch (err) {
//             console.error("Failed to create post:", err);
//             setError("Could not create the post.");
//         }
//     };

//     return (
//         <Box m="20px">
//             <Typography variant="h4" gutterBottom>
//                 Manage Latest Posts
//             </Typography>

//             {loading ? (
//                 <Box display="flex" justifyContent="center" mt="20px">
//                     <CircularProgress />
//                 </Box>
//             ) : error ? (
//                 <Typography color="error" variant="body1">
//                     {error}
//                 </Typography>
//             ) : (
//                 <TableContainer component={Paper}>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell>Title</TableCell>
//                                 <TableCell>Description</TableCell>
//                                 <TableCell>Author</TableCell>
//                                 <TableCell>Date</TableCell>
//                                 <TableCell>Actions</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {posts.map((post, index) => (
//                                 <TableRow key={index}>
//                                     <TableCell>{post.title}</TableCell>
//                                     <TableCell>{post.description}</TableCell>
//                                     <TableCell>{post.author}</TableCell>
//                                     <TableCell>{new Date(post.date).toLocaleDateString()}</TableCell>
//                                     <TableCell>
//                                         <IconButton color="primary" onClick={() => console.log("Edit post", post.id)}>
//                                             <Edit />
//                                         </IconButton>
//                                         <IconButton color="secondary" onClick={() => handleDelete(post._id)}>
//                                             <Delete />
//                                         </IconButton>
//                                     </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             )}

//             <Box mt="20px">
//                 <Button variant="contained" color="primary" onClick={handleOpen}>
//                     Add New Post
//                 </Button>
//             </Box>

//             {/* Dialog for Creating New Post */}
//             <Dialog open={open} onClose={handleClose}>
//                 <DialogTitle>Create New Post</DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         margin="dense"
//                         label="Title"
//                         type="text"
//                         fullWidth
//                         name="title"
//                         value={newPost.title}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         label="Description"
//                         type="text"
//                         fullWidth
//                         name="description"
//                         value={newPost.description}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         label="Author"
//                         type="text"
//                         fullWidth
//                         name="author"
//                         value={newPost.author}
//                         onChange={handleChange}
//                     />
//                     <Button variant="contained" component="label" sx={{ mt: 2 }}>
//                         Upload Image
//                         <input type="file" hidden onChange={handleImageChange} />
//                     </Button>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClose} color="secondary">
//                         Cancel
//                     </Button>
//                     <Button onClick={handleCreatePost} color="primary">
//                         Submit
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </Box>
//     );
// }

// export default LatestPost;





















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
    CircularProgress,
    IconButton,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

function LatestPost() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false); // State to manage dialog visibility
    const [newPost, setNewPost] = useState({
        title: '',
        description: '',
        author: '',
        image: null,
    });
    const [editingPostId, setEditingPostId] = useState(null); // For editing post

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('http://localhost:3000/api/auth/posts'); 
                if (!response.ok) {
                    throw new Error(`Server error: ${response.status}`);
                }
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                console.error("Failed to fetch posts:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3000/api/auth/posts/${id}`, { method: 'DELETE' });
            setPosts(posts.filter(post => post._id !== id));
        } catch (err) {
            console.error("Failed to delete post:", err);
            setError("Could not delete the post.");
        }
    };

    const handleOpen = (post = null) => {
        if (post) {
            // Editing an existing post
            setNewPost({
                title: post.title,
                description: post.description,
                author: post.author,
                image: null, // Keep the current image, or allow the user to update it
            });
            setEditingPostId(post._id);
        } else {
            // Creating a new post
            setNewPost({
                title: '',
                description: '',
                author: '',
                image: null,
            });
            setEditingPostId(null);
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setNewPost({ title: '', description: '', author: '', image: null });
        setEditingPostId(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPost(prevState => ({ ...prevState, [name]: value }));
    };

    const handleImageChange = (e) => {
        setNewPost(prevState => ({ ...prevState, image: e.target.files[0] }));
    };

    const handleCreateOrUpdatePost = async () => {
        const formData = new FormData();
        formData.append('title', newPost.title);
        formData.append('description', newPost.description);
        formData.append('author', newPost.author);
        if (newPost.image) formData.append('image', newPost.image);

        try {
            let response;
            if (editingPostId) {
                // Update post
                response = await fetch(`http://localhost:3000/api/auth/posts/${editingPostId}`, {
                    method: 'PUT',
                    body: formData,
                });
            } else {
                // Create new post
                response = await fetch('http://localhost:3000/api/auth/posts', {
                    method: 'POST',
                    body: formData,
                });
            }

            if (!response.ok) {
                throw new Error(`Failed to ${editingPostId ? 'update' : 'create'} post: ${response.status}`);
            }

            const updatedPost = await response.json();
            if (editingPostId) {
                setPosts(posts.map(post => (post._id === editingPostId ? updatedPost : post)));
            } else {
                setPosts([...posts, updatedPost]);
            }
            handleClose();
        } catch (err) {
            console.error("Failed to create/update post:", err);
            setError(`Could not ${editingPostId ? 'update' : 'create'} the post.`);
        }
    };

    return (
        <Box m="20px">
            <Typography variant="h4" gutterBottom>
                Manage Latest Posts
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
                                <TableCell>Title</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Author</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {posts.map((post) => (
                                <TableRow key={post._id}>
                                    <TableCell>{post.title}</TableCell>
                                    <TableCell>{post.description}</TableCell>
                                    <TableCell>{post.author}</TableCell>
                                    <TableCell>{new Date(post.date).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <IconButton color="primary" onClick={() => handleOpen(post)}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton color="secondary" onClick={() => handleDelete(post._id)}>
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            <Box mt="20px">
                <Button variant="contained" color="primary" onClick={() => handleOpen()}>
                    Add New Post
                </Button>
            </Box>

            {/* Dialog for Creating or Updating Post */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{editingPostId ? 'Edit Post' : 'Create New Post'}</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Title"
                        type="text"
                        fullWidth
                        name="title"
                        value={newPost.title}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        label="Description"
                        type="text"
                        fullWidth
                        name="description"
                        value={newPost.description}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        label="Author"
                        type="text"
                        fullWidth
                        name="author"
                        value={newPost.author}
                        onChange={handleChange}
                    />
                    <Button variant="contained" component="label" sx={{ mt: 2 }}>
                        Upload Image
                        <input type="file" hidden onChange={handleImageChange} />
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleCreateOrUpdatePost} color="primary">
                        {editingPostId ? 'Update' : 'Submit'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default LatestPost;
