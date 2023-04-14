<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require("../db.php");

  $conexion = retornarConexion();
  $consulta = $conexion->prepare('INSERT INTO seguimiento_pilotos(id, username, piloto, nombre_piloto) VALUES (null, ?, ?, ?)');
  $consulta->bindParam(1, $_GET['username']);
  $consulta->bindParam(2, $_GET['pilotoId']);
  $consulta->bindParam(3, $_GET['nombrePiloto']);
  $consulta->execute();
?>
