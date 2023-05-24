const express = require('express');
   const mongoose = require('mongoose');

   const app = express();
   const port = 3000;

   // Connect to MongoDB
   mongoose.connect('mongodb://localhost/blog-app', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   })
     .then(() => console.log('Connected to MongoDB'))
     .catch((error) => console.error('MongoDB connection error:', error));

   // Set up middleware
   app.use(express.json());

   // Define routes
   // ...

   // Start the server
   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });
   

3. Define the blog schema and model using Mongoose:
   javascript
   const mongoose = require('mongoose');

   const blogSchema = new mongoose.Schema({
     title: {
       type: String,
       required: true,
     },
     content: {
       type: String,
       required: true,
     },
   });

   const Blog = mongoose.model('Blog', blogSchema);

   module.exports = Blog;
   

4. Define the routes for CRUD operations:
   - Add blog:
   javascript
   app.post('/blogs', async (req, res) => {
     try {
       const { title, content } = req.body;
       const newBlog = await Blog.create({ title, content });
       res.status(201).json(newBlog);
     } catch (error) {
       console.error('Failed to add blog:', error);
       res.status(500).json({ error: 'Failed to add blog' });
     }
   });
   

   - Delete blog:
   javascript
   app.delete('/blogs/:id', async (req, res) => {
     try {
       const { id } = req.params;
       await Blog.findByIdAndDelete(id);
       res.sendStatus(204);
     } catch (error) {
       console.error('Failed to delete blog:', error);
       res.status(500).json({ error: 'Failed to delete blog' });
     }
   });
   

   - Update blog:
   javascript
   app.put('/blogs/:id', async (req, res) => {
     try {
       const { id } = req.params;
       const { title, content } = req.body;
       const updatedBlog = await Blog.findByIdAndUpdate(id, { title, content }, { new: true });
       res.json(updatedBlog);
     } catch (error) {
       console.error('Failed to update blog:', error);
       res.status(500).json({ error: 'Failed to update blog' });
     }
   });
   

   - Replace blog:
   ```javascript
   app.patch('/blogs/:id', async (req, res) => {
     try {
       const { id } = req.params;
       const { title, content } = req.body;
       const blog = await Blog.findById(id);
       blog.title = title;
       blog.content = content;
       const updatedBlog = await blog.save();
       res.json(updatedBlog);
     } catch (error) {
       console.error('Failed to replace blog:', error);
       res.status(500).json