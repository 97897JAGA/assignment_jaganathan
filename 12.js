document.addEventListener('DOMContentLoaded', function() {
  const blogForm = document.getElementById('blogForm');
  const blogList = document.getElementById('blogList');

  // Fetch blogs from API
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(blogs => {
      blogs.forEach(blog => {
        createBlogItem(blog);
      });
    });

  // Add event listener for form submission
  blogForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const titleInput = document.getElementById('title');
    const bodyInput = document.getElementById('body');

    const blog = {
      title: titleInput.value,
      body: bodyInput.value
    };

    createBlogItem(blog);

    titleInput.value = '';
    bodyInput.value = '';
  });

  // Create a new blog item
  function createBlogItem(blog) {
    const blogItem = document.createElement('li');
    blogItem.className = 'blogItem';

    const titleElement = document.createElement('h3');
    titleElement.textContent = blog.title;
    blogItem.appendChild(titleElement);

    const bodyElement = document.createElement('p');
    bodyElement.textContent = blog.body;
    blogItem.appendChild(bodyElement);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      blogItem.remove();
    });
    blogItem.appendChild(deleteButton);

    blogList.appendChild(blogItem);
  }
});