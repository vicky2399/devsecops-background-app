const colors = ['blue', 'green', 'red', 'purple', 'orange', 'teal'];
let currentColorIndex = 0;

function changeColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    const newColor = colors[currentColorIndex];
    document.body.style.backgroundColor = newColor;
    document.querySelector('p').textContent = `Current background color: ${newColor.charAt(0).toUpperCase() + newColor.slice(1)}`;
}
