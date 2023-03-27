<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require("../db.php");
  $arrComentarios = [];
  $conexion = retornarConexion();
  $consulta = $conexion->prepare("SELECT * FROM comentarios_temporada_curso WHERE carrera = ?");
  $consulta->bindParam(1, $_GET['carrera']);
  $consulta->execute();
  while($comentario = $consulta->fetch()){
    $arrComentarios[] = $comentario;
  }


  $cad = json_encode($arrComentarios);
  echo $cad;
  header('Content-Type: application/json');
?>
