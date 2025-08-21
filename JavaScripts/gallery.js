document.getElementById("uploadBtn").addEventListener("click", () => {
    const fileInput = document.getElementById("imageUpload");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a file first!");
        return;
    }

    const formData = new FormData();
    formData.append("image", file);

    fetch("php/gallary_upload.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert("Upload successful!");
            loadGallery();
        } else {
            alert("Upload failed: " + data.error);
        }
    })
    .catch(err => {
        console.error(err);
        alert("Upload failed");
    });
});

function loadGallery() {
    fetch("php/listImages.php")
        .then(res => res.json())
        .then(images => {
            const grid = document.getElementById("picture-grid");
            grid.innerHTML = "";
            images.forEach(img => {
                const image = document.createElement("img");
                image.src = "uploads/" + img;
                grid.appendChild(image);
            });
        });
}

window.onload = loadGallery;
