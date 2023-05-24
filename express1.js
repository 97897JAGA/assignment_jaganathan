const express = require('express');
const app = express();

// Endpoint to send 20 posts
app.get('/post', (req, res) => {
  // Assuming you have an array of posts from your backend
  const posts = [
    { id: 1, title: 'Post 1', content: 'This is the content of Post 1' },
    { id: 2, title: 'Post 2', content: 'This is the content of Post 2' },
    // ... Add more posts as needed
  ];

  res.json(posts.slice(0, 20)); // Send the first 20 posts as JSON
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});