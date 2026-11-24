<?php
require "conexao.php";

$nome     = trim($_POST["nome"] ?? "");
$email    = trim($_POST["email"] ?? "");
$telefone = trim($_POST["telefone"] ?? "");
$mensagem = trim($_POST["mensagem"] ?? "");

if ($nome === "" || $email === "" || $mensagem === "") {
    echo json_encode(["ok" => false, "erro" => "Preencha nome, e-mail e mensagem."]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO contatos (nome, email, telefone, mensagem) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $nome, $email, $telefone, $mensagem);
echo json_encode(["ok" => $stmt->execute()]);
