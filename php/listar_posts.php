<?php
require "conexao.php";
$res = $conn->query("SELECT titulo, autor, imagem, imagem_alt, conteudo, fonte_nome, fonte_url, DATE_FORMAT(criado_em, '%d/%m/%Y às %H:%i') AS data FROM posts ORDER BY criado_em ASC, id ASC");
echo json_encode($res->fetch_all(MYSQLI_ASSOC));
