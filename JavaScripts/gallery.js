window.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('picture-grid');

    // Fetch list of uploaded images from PHP
    fetch('php/list_images.php')
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                const imgElem = document.createElement('img');
                imgElem.src = 'uploads/' + image;
                imgElem.alt = "Meme";
                grid.appendChild(imgElem);
            });
        })
        .catch(err => {
            console.error("Error loading images:", err);
        });
});
