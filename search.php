<?php
header('Content-Type: application/json');

$host = 'localhost';
$db   = 'artistas';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$pdo = new PDO($dsn, $user, $pass, $opt);

$query = $_GET['query'];
$stmt = $pdo->prepare("SELECT * FROM Artistas WHERE artist LIKE ?");
$stmt->execute(["%$query%"]);
$artists = $stmt->fetchAll();

// var_dump($artists);

echo json_encode($artists);
