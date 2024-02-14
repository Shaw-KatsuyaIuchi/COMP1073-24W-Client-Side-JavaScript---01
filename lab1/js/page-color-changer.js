document.addEventListener("DOMContentLoaded", function() {

  // Function to update the background color based on slider values
  function changeColor() {
      // Get slider values for red, green, and blue
      const red = document.getElementById('red').value;
      const green = document.getElementById('green').value;
      const blue = document.getElementById('blue').value;

      // Set the background color
      var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
      
      // Update the background color of the body element
      document.body.style.backgroundColor = color;
  }

  // Add 'input' event listeners to the red, green, and blue sliders
  document.getElementById('red').addEventListener('input', changeColor);
  document.getElementById('green').addEventListener('input', changeColor);
  document.getElementById('blue').addEventListener('input', changeColor);

  // Call the 'changeColor' function initially to set the initial background color
  changeColor();
});
