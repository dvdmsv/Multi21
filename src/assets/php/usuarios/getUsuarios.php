<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require("../db.php");
  $arrUsuarios = [];
  $conexion = retornarConexion();
  $registros = $conexion->query("SELECT * FROM usuarios");
  while($usuario = $registros->fetch()){
    $arrUsuarios[] = $usuario;
  }


  $cad = json_encode($arrUsuarios);
  echo $cad;
  header('Content-Type: application/json');
?>
