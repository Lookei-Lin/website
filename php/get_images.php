<?php
$upload_dir = $_SERVER['DOCUMENT_ROOT'] . "/uploads/";
$base_url = "/uploads/";

if(!is_dir($upload_dir)) {
    echo json_encode([]);
    exit();
}

$images = array_filter(scandir($upload_dir), function($file) {
    $allowedTypes = ['jpg','jpeg','png','gif','webp'];
    $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
    return in_array($ext, $allowedTypes);
});

$image_urls = array_map(fn($file) => "/uploads/" . $file, array_values($images));
echo json_encode($image_urls);
?>
