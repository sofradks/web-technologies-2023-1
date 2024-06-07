<?php
function uploadImage() {
    $imagesDir = 'images/';
    $thumbnailsDir = 'thumbnails/';
    $maxFileSize = 2 * 1024 * 1024; // 2MB
    $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

    if (isset($_FILES['image'])) {
        $file = $_FILES['image'];
        $fileType = mime_content_type($file['tmp_name']);
        $fileSize = $file['size'];

        if (!in_array($fileType, $allowedTypes)) {
            echo "Unsupported file type.";
            return;
        }

        if ($fileSize > $maxFileSize) {
            echo "File is too large.";
            return;
        }

        $fileName = basename($file['name']);
        $targetFilePath = $imagesDir . $fileName;

        if (move_uploaded_file($file['tmp_name'], $targetFilePath)) {
            createThumbnail($targetFilePath, $thumbnailsDir . $fileName, 250, 250);
            echo "File uploaded successfully.";
        } else {
            echo "Error uploading file.";
        }

        header("Location: index.php");
    } else {
        echo "No file uploaded.";
    }
}

function createThumbnail($src, $dest, $desiredWidth, $desiredHeight) {
    $sourceImage = imagecreatefromstring(file_get_contents($src));
    $width = imagesx($sourceImage);
    $height = imagesy($sourceImage);

  
    $aspectRatio = min($width / $desiredWidth, $height / $desiredHeight);

    
    $newWidth = $desiredWidth * $aspectRatio;
    $newHeight = $desiredHeight * $aspectRatio;

    
    $tempImage = imagecreatetruecolor($newWidth, $newHeight);
    imagecopyresampled($tempImage, $sourceImage, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);

  
    $virtualImage = imagecreatetruecolor($desiredWidth, $desiredHeight);
    imagecopyresampled($virtualImage, $tempImage, 0, 0, ($newWidth - $desiredWidth) / 2, ($newHeight - $desiredHeight) / 2, $desiredWidth, $desiredHeight, $desiredWidth, $desiredHeight);
  
    imagejpeg($virtualImage, $dest);
    imagedestroy($sourceImage);
    imagedestroy($tempImage);
    imagedestroy($virtualImage);
}
?>
