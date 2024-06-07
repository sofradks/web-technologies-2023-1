<?php
$title = 'lesson16';
$content_h1 = "Время";

function getCorrectTime($current_time): string
{
    $current_hour = $current_time['tm_hour'];
    $current_min = $current_time['tm_min'];

    if ($current_hour > 4 && $current_hour < 21 || $current_hour == 0) {
        $hour_ps = 'часов';
    } elseif ($current_hour % 10 == 1) {
        $hour_ps = 'час';
    } else {
        $hour_ps = 'часа';
    }

    if (($current_min > 4 && $current_min < 21) || $current_min % 10 == 0 || $current_min % 10 > 4) {
        $min_ps = 'минут';
    } elseif ($current_min % 10 == 1) {
        $min_ps = 'минута';
    } else {
        $min_ps = 'минуты';
    }

    return sprintf("%d %s %d %s", $current_hour, $hour_ps, $current_min, $min_ps);
}

$current_time = localtime(time(), true);
$result = getCorrectTime($current_time);
$time1 = localtime(62100, true);
$result2 = getCorrectTime($time1);
$time2 = localtime(60180, true);
$result3 = getCorrectTime($time2);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?= $title ?></title>
</head>
<body>
    <h1><?= $content_h1 ?></h1>
    <h2><?= $result ?></h2>
    <h2><?= $result2 ?></h2>
    <h2><?= $result3 ?></h2>
</body>
</html>
