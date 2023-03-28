<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require("../db.php");
  $arrUsuarios = [];
  $conexion = retornarConexion();

  $consulta = $conexion->prepare("UPDATE comentarios_temporada_curso SET texto = 'El usuario eliminó el comentario' WHERE id = ?;");
  $consulta->bindParam(1, $_GET['id']);
  $consulta->execute();
?>
