<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require("../db.php");
  $arrUsuarios = [];
  $conexion = retornarConexion();

  $consulta = $conexion->prepare("DELETE FROM comentarios_temporada_curso WHERE id = ?");
  $consulta->bindParam(1, $_GET['id']);
  $consulta->execute();
?>
