

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

function ManageTestimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);  // This error state is for the modal
    const [open, setOpen] = useState(false);
    const [newTestimonial, setNewTestimonial] = useState({
        name: '',
        role: '',
        content: '',
        image: null,
    });
    const [editingTestimonialId, setEditingTestimonialId] = useState(null);

    // Fetch testimonials on component mount
    useEffect(() => {
        async function fetchTestimonials() {
            try {
                const response = await fetch('http://localhost:3000/api/auth/testi');
                if (!response.ok) {
                    throw new Error(`Server error: ${response.status}`);
                }
                const data = await response.json();
                setTestimonials(data.data);
            } catch (err) {
                console.error("Failed to fetch testimonials:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchTestimonials();
    }, []);

    // Handle testimonial deletion
    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3000/api/auth/testi/${id}`, { method: 'DELETE' });
            setTestimonials(testimonials.filter(testimonial => testimonial._id !== id));
        } catch (err) {
            console.error("Failed to delete testimonial:", err);
            setError("Could not delete the testimonial.");
        }
    };

    // Open the dialog to create or edit a testimonial
    const handleOpen = (testimonial = null) => {
        if (testimonial) {
            setNewTestimonial({
                name: testimonial.name,
                role: testimonial.role,
                content: testimonial.content,
                image: null,
            });
            setEditingTestimonialId(testimonial._id);
        } else {
            setNewTestimonial({ name: '', role: '', content: '', image: null });
            setEditingTestimonialId(null);
        }
        setError(null);  // Clear any previous error when opening the dialog
        setOpen(true);
    };

    // Close the dialog and reset form if necessary
    const handleClose = () => {
        setOpen(false);
        setError(null); // Clear error when closing
        setEditingTestimonialId(null);
        if (!editingTestimonialId) {
            setNewTestimonial({ name: '', role: '', content: '', image: null }); // Reset only if adding a new testimonial
        }
    };

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTestimonial(prevState => ({ ...prevState, [name]: value }));
    };

    // Handle image selection for the testimonial
    const handleImageChange = (e) => {
        setNewTestimonial(prevState => ({ ...prevState, image: e.target.files[0] }));
    };

    // Create or update the testimonial
    const handleCreateOrUpdateTestimonial = async () => {
        // Check if all required fields are filled
        if (!newTestimonial.name || !newTestimonial.role || !newTestimonial.content || !newTestimonial.image) {
            setError("All fields are required.");  // Show error if not all fields are filled
            return;
        }

        const formData = new FormData();
        formData.append('name', newTestimonial.name);
        formData.append('role', newTestimonial.role);
        formData.append('content', newTestimonial.content);
        formData.append('image', newTestimonial.image);

        console.log("Form Data before sending:");
        formData.forEach((value, key) => {
            console.log(key, value);
        });

        try {
            const url = editingTestimonialId
                ? `http://localhost:3000/api/auth/testi/${editingTestimonialId}`
                : 'http://localhost:3000/api/auth/testi';
            const method = editingTestimonialId ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                body: formData,
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`Error response: ${errorText}`);
                throw new Error(`Failed to ${editingTestimonialId ? 'update' : 'create'} testimonial.`);
            }

            const updatedTestimonial = await response.json();
            setTestimonials(editingTestimonialId
                ? testimonials.map((testimonial) =>
                    testimonial._id === editingTestimonialId ? updatedTestimonial.data : testimonial
                )
                : [...testimonials, updatedTestimonial.data]
            );

            // Clear form data after successful submission
            handleClose();
        } catch (err) {
            console.error("Error in create/update:", err);
            setError(`Could not ${editingTestimonialId ? 'update' : 'create'} the testimonial.`);
        }
    };

    return (
        <Box m="20px">
            <Typography variant="h4" gutterBottom>
                Manage Testimonials
            </Typography>

            {loading ? (
                <Box display="flex" justifyContent="center" mt="20px">
                    <CircularProgress />
                </Box>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Role</TableCell>
                                <TableCell>Content</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {testimonials.map((testimonial) => (
                                <TableRow key={testimonial._id}>
                                    <TableCell>{testimonial.name}</TableCell>
                                    <TableCell>{testimonial.role}</TableCell>
                                    <TableCell>{testimonial.content}</TableCell>
                                    <TableCell>
                                        <IconButton color="danger" onClick={() => handleOpen(testimonial)}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton color="secondary" onClick={() => handleDelete(testimonial._id)}>
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
                    Add New Testimonial
                </Button>
            </Box>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{editingTestimonialId ? 'Edit Testimonial' : 'Create New Testimonial'}</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Name"
                        type="text"
                        fullWidth
                        name="name"
                        value={newTestimonial.name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        label="Role"
                        type="text"
                        fullWidth
                        name="role"
                        value={newTestimonial.role}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        label="Content"
                        type="text"
                        fullWidth
                        name="content"
                        value={newTestimonial.content}
                        onChange={handleChange}
                    />
                    <Button variant="contained" component="label" sx={{ mt: 2 }}>
                        Upload Image
                        <input type="file" hidden onChange={handleImageChange} />
                    </Button>

                    {/* Show error message below submit button if form is incomplete */}
                    {error && (
                        <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                            {error}
                        </Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleCreateOrUpdateTestimonial} color="primary">
                        {editingTestimonialId ? 'Update' : 'Submit'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default ManageTestimonials;
