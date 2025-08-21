<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$target_dir = $_SERVER['DOCUMENT_ROOT'] . "/uploads/"; // absolute path

// Check if file was uploaded
if(!isset($_FILES["fileToUpload"]) || $_FILES["fileToUpload"]["error"] !== 0) {
    die("? No file uploaded or upload error.");
}

// Ensure uploads folder exists
if(!is_dir($target_dir)) {
    if(!mkdir($target_dir, 0755, true)) {
        die("? Failed to create uploads directory.");
    }
}

// Sanitize filename
$originalName = basename($_FILES["fileToUpload"]["name"]);
$originalName = preg_replace("/[^A-Za-z0-9\-_\.]/", "_", $originalName);

// Check file extension
$imageFileType = strtolower(pathinfo($originalName, PATHINFO_EXTENSION));
$allowedTypes = ['jpg','jpeg','png','gif','webp'];
if(!in_array($imageFileType, $allowedTypes)) {
    die("? Invalid filetype: '$imageFileType'. Allowed: " . implode(", ", $allowedTypes));
}

// Check if file is an image
$check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
if($check === false) {
    die("? File is not a valid image.");
}

// Limit file size (5MB)
if ($_FILES["fileToUpload"]["size"] > 5000000) {
    die("? File too large. Max 5MB.");
}

// Avoid overwriting existing files
$target_file = $target_dir . $originalName;
$counter = 1;
while(file_exists($target_file)) {
    $target_file = $target_dir . pathinfo($originalName, PATHINFO_FILENAME) . "_$counter." . $imageFileType;
    $counter++;
}

// Move uploaded file
if(move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo "? Upload successful: " . htmlspecialchars($originalName);
} else {
    die("? Failed to move uploaded file.");
}
?>
