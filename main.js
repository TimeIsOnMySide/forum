// Posts array that will contain the post objects
let posts = [];


// Listen for a click on the 'post' button
document.getElementById('submit').addEventListener('click', function() {
  // Create a string variable to store the text from both text firelds.
  let name = document.getElementById('name').value;
  let message = document.getElementById('message').value;
  // Create new post object for this post
  let post = {
    name: name,
    message: message,
    upvotes: 0,
    downvotes: 0
  }
  // Add this new post object to the posts array
  posts.push(post);
  // Clear the text boxes for the next entry
  document.getElementById('name').value = '';
  document.getElementById('message').value = '';
  // Re-render the posts
  renderPosts();
});

const renderPosts = function() {
  // Sort the posts array based on the number of upvotes in descending order
  posts.sort((a, b) => b.upvotes - a.upvotes);
  // Get the posts container element
  let postsContainer = document.querySelector('.posts');
  // Clear the posts container
  postsContainer.innerHTML = '';
  // Loop through the posts array and generate HTML for each post
  posts.forEach(post => {
    // Create the post element
    let postElement = document.createElement('div');
    postElement.innerHTML = `
      <div>
        ${post.message} 
        <br> 
        Posted By: <b>${post.name}</b>
        <br>
        Upvotes: <span id="upvotes-${post.name}">${post.upvotes}</span>
        Downvotes: <span id="downvotes-${post.name}">${post.downvotes}</span>
        <button onclick="upvotePost('${post.name}')">Upvote</button>
        <button onclick="downvotePost('${post.name}')">Downvote</button>
        <br>
        <button onclick="deletePost('${post.name}')">Delete</button>
      </div>
      <hr>
    `;
    // Append the post element to the posts container
    postsContainer.appendChild(postElement);
  });
}

const upvotePost = function(name) {
  // Find the post name in the array of posts
  let post = posts.find(post => post.name === name);
  // Add one to the count
  post.upvotes++;
  // Update the Dom with the new count
  let upvotesElement = document.getElementById(`upvotes-${name}`);
  upvotesElement.textContent = post.upvotes.toString();
  // Re-render the posts
  renderPosts();
}

const downvotePost = function(name) {
  // Find the post name in the array of posts
  let post = posts.find(post => post.name === name);
  // Add one to the count
  post.downvotes++;
  // Update the Dom with the new count
  let downvotesElement = document.getElementById(`downvotes-${name}`);
  downvotesElement.textContent = post.downvotes.toString();
  // Re-render the posts
  renderPosts();
}

const deletePost = function(name) {
  // Find the post name in the array of posts
  let post = posts.find(post => post.name === name);
  // Find index of this post
  let postIndex = posts.indexOf(post);
  // Remove that item from the array
  posts.splice(postIndex, 1);
  // Re-render the posts
  renderPosts();
}






