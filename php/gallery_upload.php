<?php
$targetDir = "uploads/"; 
if (!empty($_FILES['file']['name'])) {
    $targetFile = $targetDir . basename($_FILES['file']['name']);
    if (move_uploaded_file($_FILES['file']['tmp_name'], $targetFile)) {
        echo "Upload successful!";
    } else {
        echo "Upload failed!";
    }
} else {
    echo "No file selected.";
}
?>