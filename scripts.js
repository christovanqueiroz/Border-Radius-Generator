const topLeft = document.querySelector('#topLeft');
const topRight = document.querySelector('#topRight');
const bottomRight = document.querySelector('#bottomRight');
const bottomLeft = document.querySelector('#bottomLeft');

const box = document.querySelector('.box');

topLeft.addEventListener('input', function() {
    // Get the value of the input element
    let topLeftValue = topLeft.value;
  
    // Set the value of the border-radius
    box.style.borderTopLeftRadius = topLeftValue + "px";
})

topRight.addEventListener('input', function() {
    let topRightValue = topRight.value;
    box.style.borderTopRightRadius = topRightValue + "px";
})

bottomRight.addEventListener('input', function() {
    let bottomRightValue = bottomRight.value;
    box.style.borderBottomRightRadius = bottomRightValue + "px";
})

bottomLeft.addEventListener('input', function() {
    let bottomLeftValue = bottomLeft.value;
    box.style.borderBottomLeftRadius = bottomLeftValue + "px";
})

function outputBorderRadius() {
    let boxStyle = window.getComputedStyle(box);
    let boxBorderRadius = boxStyle.getPropertyValue("border-radius")

    document.getElementById("inputResult").value = boxBorderRadius;
}

outputBorderRadius()