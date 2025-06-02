// Change text content and modify CSS styles
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = 'The text has been changed dynamically! ';
    dynamicText.style.color = 'red';  // Change text color to blue
    dynamicText.style.fontWeight = 'bold'; // Make it bold
    dynamicText.style.fontSize = '1.5rem'; // Increase font size
});

// Add or remove an element when button clicked
const toggleBtn = document.getElementById('toggle-element-btn');
const container = document.getElementById('element-container');

let elementAdded = false;

toggleBtn.addEventListener('click', () => {
    if (!elementAdded) {
        const newElement = document.createElement('p');
        newElement.id = 'added-element';
        newElement.textContent = 'This element was added dynamically!';
        newElement.style.color = 'blue';
        newElement.style.fontStyle = 'italic';
        container.appendChild(newElement);
        elementAdded = true;
        toggleBtn.textContent = 'Remove Element';
    } else {
        const elementToRemove = document.getElementById('added-element');
        if (elementToRemove) {
            container.removeChild(elementToRemove);
        }
        elementAdded = false;
        toggleBtn.textContent = 'Add Element';
    }
});
