
// Listen for a click on the 'post' button
document.getElementById('submit').addEventListener('click', function() {
  // Create a string variable to store the text from both text firelds.
  let name = document.getElementById('name').value;
  let message = document.getElementById('message').value;

  //add info to the .posts div
  document.querySelector('.posts').innerHTML = `${message} <br> Posted By: ${name}`;
});