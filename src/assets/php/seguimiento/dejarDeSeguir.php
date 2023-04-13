<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require("../db.php");
  $arrUsuarios = [];
  $conexion = retornarConexion();

  $consulta = $conexion->prepare("DELETE FROM seguimiento_pilotos WHERE id = ? AND username = ?");
  $consulta->bindParam(1, $_GET['idSeguimiento']);
  $consulta->bindParam(2, $_GET['username']);
  $consulta->execute();
?>
