//your JS code here. If required.
// Function to handle button click
document.getElementById("btn").addEventListener("click", async function() {
  // Get input values
  const text = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value);

  // Validate input values
  if (!text || isNaN(delay)) {
    alert("Please fill in all fields and provide a valid delay.");
    return;
  }

  // Introduce delay using async/await
  await delayFunction(delay);

  // Display text on the webpage
  document.getElementById("output").innerText = text;
});

// Function to introduce delay using setTimeout wrapped in a promise
function delayFunction(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}
