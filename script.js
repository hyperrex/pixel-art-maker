let penColor = 'black';

function setPenColor(paintColor) {
    penColor = paintColor;
    document.getElementById("selectedColor").style.backgroundColor = paintColor;
}

function setPixelColor(pixel) {
    pixel.style.backgroundColor = penColor;
} 