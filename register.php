<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = trim($_POST['nome']);
    $email = trim($_POST['email']);
    $senha = trim($_POST['senha']);

    if (empty($nome) || empty($email) || empty($senha)) {
        echo "<script>alert('Preencha todos os campos!'); window.history.back();</script>";
        exit();
    }

    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

    $sql = "INSERT INTO parkon (nome, email, senha) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        die("Erro no prepare: " . $conn->error);
    }

    $stmt->bind_param("sss", $nome, $email, $senhaHash);

    if ($stmt->execute()) {
        echo "<script>alert('Usuário registrado com sucesso!'); window.location.href='../html/login.html';</script>";
    } else {
        echo "<script>alert('Erro ao registrar: " . $stmt->error . "'); window.history.back();</script>";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Método inválido.";
}
?>
