<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header("Location: ../html/login.html");
    exit();
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Painel - ParkOn</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body class="login-page">
  <div class="login-container">
    <h2>Bem-vindo, <?php echo $_SESSION['usuario']; ?>!</h2>
    <p>Você está logado no sistema ParkOn 🚗</p>
    <a href="../html/index.html" class="btn">Sair</a>
  </div>
</body>
</html>
