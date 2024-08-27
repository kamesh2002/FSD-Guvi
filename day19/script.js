// app.js

// Function to fetch and display posts
async function fetchAndDisplayPosts() {
   try {
       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
       if (!response.ok) {
           throw new Error('Network response was not ok ' + response.statusText);
       }
       const posts = await response.json();
       
       // Get the container where posts will be displayed
       const container = document.getElementById('posts-container');
       
       // Loop through each post and create HTML for it
       posts.forEach(post => {
           // Create elements for post title and body
           const postDiv = document.createElement('div');
           postDiv.className = 'post';
           
           const title = document.createElement('h2');
           title.textContent = post.title;
           
           const body = document.createElement('p');
           body.textContent = post.body;
           
           // Append title and body to the postDiv
           postDiv.appendChild(title);
           postDiv.appendChild(body);
           
           // Append the postDiv to the container
           container.appendChild(postDiv);
       });
   } catch (error) {
       console.error('There was a problem with the fetch operation:', error);
   }
}

// Call the function to fetch and display posts
fetchAndDisplayPosts();
