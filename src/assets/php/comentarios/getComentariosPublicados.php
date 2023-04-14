<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require("../db.php");
  $arrComentarios = [];
  $conexion = retornarConexion();
  $registros = $conexion->query("SELECT * FROM comentarios_temporada_curso WHERE eliminado = 0");
  while($comentario = $registros->fetch()){
    $arrComentarios[] = $comentario;
  }


  $cad = json_encode($arrComentarios);
  echo $cad;
  header('Content-Type: application/json');
?>
