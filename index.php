<?php
require 'gallery.php';
require 'upload.php';
require 'log.php';

// Логирование запроса
logRequest();

// Обработка загрузки изображения
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    uploadImage();
}

// Отображение галереи
$imagesDir = 'images/';
$thumbnailsDir = 'thumbnails/';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Photo Gallery</title>
    <style>
        .gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .gallery a {
            display: block;
            width: 250px;
            height: 250px;
            overflow: hidden;
        }
        .gallery img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    </style>
</head>
<body>
    <h1>Галерея</h1>
    <div class="gallery">
        <?php buildGallery($imagesDir, $thumbnailsDir); ?>
    </div>
    <h2>Загрузить картинку</h2>
    <form action="index.php" method="post" enctype="multipart/form-data">
        <input type="file" name="image" accept="image/*" required>
        <input type="submit" value="Upload">
    </form>
</body>
</html>
