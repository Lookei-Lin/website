<?php
header('Content-Type: application/json');

$dir = "../uploads/";
$files = array_diff(scandir($dir), array('.', '..')); // remove . and ..
echo json_encode(array_values($files));
?>