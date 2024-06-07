<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>lesson18</title>
</head>
<body>
<?php
// Функция для вывода чисел с указанием их типа
function showInterval($startValue, $endValue)
{
    if ($startValue > $endValue)
        exit("Неправильный интервал!");
    do {
        $type = ($startValue == 0) ? "это ноль" : (($startValue % 2 == 0) ? "четное число" : "нечетное число");
        echo "<p>$startValue –  $type.</p>";
        $startValue++;
    } while ($startValue <= $endValue);
}

echo "<h2>Задание 1</h2>";
showInterval(0, 10);

echo "<h2>Задание 2</h2>";
$localities = [
    'Московская область' => ['Москва', 'Зеленоград', 'Клин'],
    'Ленинградская область' => ['Санкт-Петербург', 'Всеволожск', 'Павловск', 'Кронштадт'],
    'Рязанская область' => ['Рязань', 'Касимов', 'Шацк', 'Ряжск']
];
foreach ($localities as $region => $cities) {
    echo "<p>$region:</p>";
    echo "<p>" . implode(', ', $cities) . "</p>";
}

echo "<h2>Задание 3</h2>";
function transliterate($string)
{
    $translit = [
        'а' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd', 'е' => 'e', 'ё' => 'yo',
        'ж' => 'zh', 'з' => 'z', 'и' => 'i', 'й' => 'y', 'к' => 'k', 'л' => 'l', 'м' => 'm',
        'н' => 'n', 'о' => 'o', 'п' => 'p', 'р' => 'r', 'с' => 's', 'т' => 't', 'у' => 'u',
        'ф' => 'f', 'х' => 'kh', 'ц' => 'ts', 'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sch', 'ъ' => '',
        'ы' => 'y', 'ь' => '', 'э' => 'e', 'ю' => 'yu', 'я' => 'ya'
    ];
    $transliterated = '';
    $string = mb_strtolower($string, 'UTF-8');
    for ($i = 0; $i < mb_strlen($string, 'UTF-8'); $i++) {
        $symbol = mb_substr($string, $i, 1, 'UTF-8');
        if (array_key_exists($symbol, $translit)) {
            $transliterated .= $translit[$symbol];
        } else {
            $transliterated .= $symbol;
        }
    }
    return $transliterated;
}

$russian_word = "вставить текст - текст";
$translit_result = transliterate($russian_word);
echo "<p>$translit_result</p>";

echo "<h2>Задание 4</h2>";
function renderMenu($menu)
{
    $output = '<ul>';
    foreach ($menu as $item) {
        $output .= '<li>' . $item['name'];
        if ($item['hasChildren']) {
            $output .= renderMenu($item['items']);
        }
        $output .= '</li>';
    }
    $output .= '</ul>';
    return $output;
}

$menu = [
    ['name' => 'Уровни меню', 'hasChildren' => true, 'items' => [
        ['name' => 'Первый уровень', 'hasChildren' => true, 'items' => [
            ['name' => 'Второй уровень', 'hasChildren' => false, 'items' => []],
            ['name' => 'Второй уровень', 'hasChildren' => true, 'items' => [
                ['name' => 'Третий уровень', 'hasChildren' => false, 'items' => []],
                ['name' => 'Третий уровень', 'hasChildren' => false, 'items' => []]
            ]]
        ]],
        ['name' => 'Первый уровень', 'hasChildren' => false, 'items' => []]
    ]]
];
echo renderMenu($menu);

echo "<h2>Задание 6</h2>";
foreach ($localities as $region => $cities) {
    $citiesWithK = array_filter($cities, function ($city) {
        return mb_substr(mb_strtolower($city), 0, 1) === 'к';
    });
    if (!empty($citiesWithK)) {
        echo "<p>$region:</p>";
        echo "<p>" . implode(', ', $citiesWithK) . "</p>";
    }
}
?>
</body>
</html>
