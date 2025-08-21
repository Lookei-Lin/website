document.querySelector("button").addEventListener("click", () => {
    const fileInput = document.getElementById("imageUpload");
    const file = fileInput.files[0];
    if (!file)  {
      alert("Please selecte a file first!");
      return;
    }

  const formData = new formData();
  formData.append("image", file);

  fetch("/upload", {
    method:"POST",
    body: formData

  })
  .then(res => res.text())
  .then(data => {
    alert(data);
    loadGallery();
  })
  .catch(err => {
    console.error(err);
    alert("Upload failed");
  });
});

function loadGallery() {
  fetch("gallery")
    .then(res => res.json())
    .then(images => {
      const grid = document.getElementById("picture-grid");
      grid.innerHTML = "";
      images.forEach(img => {
        const image = document.createElement("img");
        img.src= "/uploads" + img;
        grid.appendChild(image)
      });
    });

}

window.onload = loadGallery;
