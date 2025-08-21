<?php
header('Content-Type: application/json');

$targetDir = "../uploads/";

if (!empty($_FILES['image']['name'])) {
    // Sanitize filename
    $filename = preg_replace("/[^a-zA-Z0-9\._-]/", "_", basename($_FILES['image']['name']));
    $targetFile = $targetDir . $filename;

    if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
        echo json_encode(["success" => true, "filename" => $filename]);
    } else {
        echo json_encode(["success" => false, "error" => "Upload failed. Check folder permissions."]);
    }
} else {
    echo json_encode(["success" => false, "error" => "No file selected"]);
}
?>
