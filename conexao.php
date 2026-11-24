<?php
$conn = new mysqli("localhost", "root", "", "atletico_maneiro");
if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["ok" => false, "erro" => "Falha na conexão com o banco"]));
}
$conn->set_charset("utf8mb4");
header("Content-Type: application/json; charset=utf-8");
