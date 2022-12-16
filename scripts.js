 function printValue() {
// Get the value of the input field
const topLeftValue = document.getElementById('topLeftValue').value;

// Print the value to the textarea
document.getElementById('inputResult').innerHTML += topLeftValue + '\n';
}
