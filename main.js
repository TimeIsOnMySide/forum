
// Listen for a click on the 'post' button
document.getElementById('submit').addEventListener('click', function() {
  // Create a string variable to store the text from both text firelds.
  let name = document.getElementById('name').value;
  let message = document.getElementById('message').value;

  let upvotes = 0;
  let downvotes = 0;

  //add info to the .posts div
  document.querySelector('.posts').innerHTML +=
   `<div>
      ${message} 
      <br> 
      Posted By: <b>${name}</b>
    </div>
    <hr>`;
});

