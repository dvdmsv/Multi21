<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require("../db.php");

  $conexion = retornarConexion();
  $consulta = $conexion->prepare('INSERT INTO comentarios_temporada_curso(id, username, carrera, texto, fecha) VALUES (null, ?, ?, ?, ?)');
  $consulta->bindParam(1, $_GET['username']);
  $consulta->bindParam(2, $_GET['carrera']);
  $consulta->bindParam(3, $_GET['texto']);
  $consulta->bindParam(4, $_GET['fecha']);
  $consulta->execute();
?>
