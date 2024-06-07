<?php
// Задание 1
$a = 4;
$b = -7;

function calculate($a, $b) {
    if ($a >= 0 && $b >= 0) {
        return $a - $b;
    } elseif ($a < 0 && $b < 0) {
        return $a * $b;
    } else {
        return $a + $b;
    }
}

$result1 = calculate($a, $b);
echo ("<p><b>Задание 1</b></p>" . "<p>Результат = " . $result1 . "</p>");

// Задание 2
$a = rand(0, 15); 
$result2 = "";

switch ($a) {
    case 0:
        $result2 .= "0, ";
    case 1:
        $result2 .= "1, ";
    case 2:
        $result2 .= "2, ";
    case 3:
        $result2 .= "3, ";
    case 4:
        $result2 .= "4, ";
    case 5:
        $result2 .= "5, ";
    case 6:
        $result2 .= "6, ";
    case 7:
        $result2 .= "7, ";
    case 8:
        $result2 .= "8, ";
    case 9:
        $result2 .= "9, ";
    case 10:
        $result2 .= "10, ";
    case 11:
        $result2 .= "11, ";
    case 12:
        $result2 .= "12, ";
    case 13:
        $result2 .= "13, ";
    case 14:
        $result2 .= "14, ";
    case 15:
        $result2 .= "15, ";
}

$result2 = rtrim($result2, ", ");
echo ("<p><b>Задание 2</b></p>" . "<p>Результат = " . $result2 . "</p>");


//Задание 3
function plus($a, $b) {
    return $a + $b;
}

function umn($a, $b) {
    return $a * $b;
}

function minus($a, $b) {
    return $a - $b;
}

function del($a, $b) {
    return $a / $b;
}

echo ("<p><b>Задание 3</b></p>" .
"<p>4 + 7 = " . plus(4, 7) . "</p>" .
"<p>4 - 7 = " . minus(4, 7) . "</p>" .
"<p>4 * 7 = " . umn(4, 7) . "</p>" .
"<p>4 / 7 = " . del(4, 7) . "</p>");

//Задание 4
function mathOperation($arg1, $arg2, $operation) {
    switch ($operation) {
        case '+':
            return plus($arg1, $arg2);
        case '-':
            return minus($arg1, $arg2);
        case '*':
            return umn($arg1, $arg2);
        case '/':
            return del($arg1, $arg2);
        default:
            return 0;
    }
}
echo ("<p><b>Задание 4</b></p>" .
"<p>Сумма чисел 4 и 7 = " . mathOperation(4, 7, "+") . "</p>");

//Задание 6
function power($val, $pow) {
    if ($pow == 0) {
        return 1;
    } elseif ($pow < 0) {
        return 1 / power($val, -$pow);
    } else {
        return $val * power($val, $pow - 1);
    }
}
echo ("<p><b>Задание 6</b></p>" .
"<p>Число 4 в 7 степени = " . power(4, 7) . "</p>");
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>lesson17</title>
</head>
<body>

</body>
</html>
