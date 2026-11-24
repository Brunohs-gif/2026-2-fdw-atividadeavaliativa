<?php
require "conexao.php";
$res = $conn->query("SELECT nome, perfil, foto, texto, DATE_FORMAT(criado_em, '%d/%m/%Y') AS data FROM depoimentos ORDER BY criado_em DESC, id DESC");
echo json_encode($res->fetch_all(MYSQLI_ASSOC));
