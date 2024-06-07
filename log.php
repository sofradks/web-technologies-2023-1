<?php
function logRequest() {
    $logDir = 'logs';
    $logFile = $logDir . '/log.txt';
    $maxEntries = 10;

    if (!is_dir($logDir)) {
        mkdir($logDir, 0777, true);
    }

    if (!file_exists($logFile)) {
        file_put_contents($logFile, '');
    }

    $currentLogs = file($logFile, FILE_IGNORE_NEW_LINES);
    if ($currentLogs === false) {
        $currentLogs = [];
    }

    $currentLogs[] = date('Y-m-d H:i:s');

    if (count($currentLogs) > $maxEntries) {
        $logIndex = 0;
        while (file_exists("{$logDir}/log{$logIndex}.txt")) {
            $logIndex++;
        }
        rename($logFile, "{$logDir}/log{$logIndex}.txt");
        $currentLogs = [end($currentLogs)];
    }

    file_put_contents($logFile, implode(PHP_EOL, $currentLogs) . PHP_EOL);
}
?>
