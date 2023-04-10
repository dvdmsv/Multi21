<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require("../db.php");
  $arrPilotos = [];
  $conexion = retornarConexion();
  $consulta = $conexion->prepare("SELECT * FROM seguimiento_pilotos WHERE username = ?");
  $consulta->bindParam(1, $_GET['username']);
  $consulta->execute();
  while($piloto = $consulta->fetch()){
    $arrPilotos[] = $piloto;
  }


  $cad = json_encode($arrPilotos);
  echo $cad;
  header('Content-Type: application/json');
?>
