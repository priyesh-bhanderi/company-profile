import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    Box,
    Chip,
    Stack,
    InputLabel,
    MenuItem
} from '@mui/material';
import { Code } from '@mui/icons-material';
import { apiFunctions } from '../../Api/ApiFunction';
import { toast } from 'react-toastify';
import API from '../../Api/Apis';

const AddProject = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        image: null,
        description: '',
        tools: '',
        link: ''
    });

    const { apiPost } = apiFunctions();
    const { addProject } = API

    const categories = [
        "All",
        "Web Development",
        "Mobile Development",
        "UI/UX Design",
    ];

    const [toolList, setToolList] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({ ...prev, image: file }));
        }
    };

    const handleAddTool = () => {
        if (formData.tools && !toolList.includes(formData.tools)) {
            setToolList([...toolList, formData.tools]);
            setFormData(prev => ({ ...prev, tools: '' }));
        }
    };

    const handleRemoveTool = (toolToRemove) => {
        setToolList(toolList.filter(tool => tool !== toolToRemove));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const project = {
            title: formData.title,
            category: formData.category,
            image: formData.image,
            description: formData.description,
            icon: Code,
            tools: toolList,
            link: formData.link
        };

        console.log("Project submitted:", project);


        try {
            const response = await apiPost(addProject, project)
            if (response) {
                toast.success("Project Add successfully")
            } else {
                toast.error("Project api error")
            }
        } catch (error) {
            console.log("error", error);

        }

    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, mx: 'auto', mt: 4, p: 3, boxShadow: 2, borderRadius: 2 }}>
            <Typography variant="h5" mb={2}>Add New Project</Typography>

            <TextField
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />

            <TextField
                select
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            >
                {categories.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>

            <InputLabel sx={{ mt: 2 }}>Upload Image</InputLabel>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ marginTop: '8px', marginBottom: '16px' }}
            />
            {imagePreview && (
                <Box sx={{ mt: 1, mb: 2 }}>
                    <img src={imagePreview} alt="Preview" width="100%" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                </Box>
            )}

            <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={3}
                required
            />
            <div className='border border-gray-400 p-4 rounded'>
                <TextField
                    label="Tool (Add one at a time)"
                    name="tools"
                    value={formData.tools}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button onClick={handleAddTool} variant="outlined" sx={{ mt: 1, mb: 2 }}>Add Tool</Button>

                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                    {toolList.map(tool => (
                        <Chip key={tool} label={tool} onDelete={() => handleRemoveTool(tool)} />
                    ))}
                </Stack>
            </div>


            <TextField
                label="Link"
                name="link"
                value={formData.link}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Submit Project
            </Button>
        </Box>
    );
};

export default AddProject;
