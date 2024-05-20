
const container = document.getElementById('container');
let isDragging = false;
let lastX = 0;
let lastY = 0;
// const distanceThreshold = 15; // Minimum distance to move before adding a new image

const distanceThreshold = 120; // Minimum distance to move before adding a new image
const images = [
    // 'https://place-hold.it/600x400/ff0000/000.png/', // Red
    // 'https://place-hold.it/200x400/00ff00/000.png/', // Green
    // 'https://place-hold.it/600x400/0000ff/000.png/', // Blue
    // 'https://place-hold.it/200x400/ffff00/000.png/', // Yellow
    // 'https://place-hold.it/300x400/ff00ff/000.png/', // Magenta
    // 'https://place-hold.it/400x600/00ffff/000.png/', // Cyan
    // 'https://place-hold.it/200x400/000000/fff.png/', // Black
    // 'https://place-hold.it/400x400/ffffff/000.png/',  // White
    './images/background5.png',
    './images/compass.png',
    './images/transparency1.png',
    './images/incubator-4.png',
    './images/frost-2.jpg',
    './images/illo-2.jpg',
    './images/digital-self-4.jpg'
];
let currentImageIndex = 0;

container.addEventListener('mousedown', function(event) {
    isDragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
    container.addEventListener('mousemove', handleDrag);
});

document.addEventListener('mouseup', function() {
    if (isDragging) {
        isDragging = false;
        container.removeEventListener('mousemove', handleDrag);
    }
});

function handleDrag(event) {
    if (!isDragging) return;

    const deltaX = event.clientX - lastX;
    const deltaY = event.clientY - lastY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance >= distanceThreshold) {
        addImage(event.clientX, event.clientY);
        lastX = event.clientX;
        lastY = event.clientY;
    }
}

function addImage(x, y) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('image');
    newDiv.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;

    const rect = container.getBoundingClientRect();
    const randomOffsetX = Math.floor(Math.random() * 10) - 5; // Random offset between -20 and 20
    const randomOffsetY = Math.floor(Math.random() * 10) - 5; // Random offset between -20 and 20
    const offsetX = x - rect.left - 180 + randomOffsetX; // Adjusted to center the smaller image with randomness
    const offsetY = y - rect.top - 180 + randomOffsetY;  // Adjusted to center the smaller image with randomness
    newDiv.style.left = `${offsetX}px`;
    newDiv.style.top = `${offsetY}px`;

    newDiv.style.opacity = 0;
    container.appendChild(newDiv);

    setTimeout(() => {
        newDiv.style.opacity = 1;
    }, 10);

    // if (container.children.length > 20) {
    //     container.removeChild(container.firstChild);
    // }

    if (container.children.length > 7) {
        container.removeChild(container.firstChild);
    }
}