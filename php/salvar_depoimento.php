<?php
require "conexao.php";

$nome   = trim($_POST["nome"] ?? "");
$perfil = trim($_POST["perfil"] ?? "");
$texto  = trim($_POST["texto"] ?? "");

if ($nome === "" || $perfil === "" || $texto === "") {
    echo json_encode(["ok" => false, "erro" => "Preencha todos os campos."]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO depoimentos (nome, perfil, texto) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $nome, $perfil, $texto);
echo json_encode(["ok" => $stmt->execute()]);
