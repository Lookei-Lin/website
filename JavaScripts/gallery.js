const firebaseConfig = {
  apiKey: "AIzaSyB2ptB2M0Q4_PGhKzgtoft0Tqu0kFD_R40",
  authDomain: "image-uploads-ad290.firebaseapp.com",
  projectId: "image-uploads-ad290",
  storageBucket: "image-uploads-ad290.appspot.com", // fixed .appspot.com
  messagingSenderId: "227225473740",
  appId: "1:227225473740:web:0ddc1941af75abcaf0e869"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

function uploadImage() {
  const input = document.getElementById('imageUpload');
  const file = input.files[0];
  if (!file) return alert('Please select an image.');

  // Preview image
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = document.createElement('img');
    img.src = e.target.result;
    document.getElementById('picture-grid').appendChild(img);
  };
  reader.readAsDataURL(file);

  // Upload to Firebase Storage with timestamp to avoid overwriting
  const storageRef = storage.ref('images/' + Date.now() + '-' + file.name);
  storageRef.put(file)
    .then(snapshot => {
      console.log('Upload file successful!');
    })
    .catch(error => {
      console.error('Upload failed:', error);
    });
}