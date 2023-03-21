<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require("db.php");
  $conexion = retornarConexion();
  $consulta = $conexion->prepare("select * from usuarios where username = ? and password = ?");
  $consulta->bindParam(1, $_GET['username']);
  $consulta->bindParam(2, $_GET['password']);
  $consulta->execute();
  $registros = $consulta->rowCount();
  $vec = [];
  if($registros>0){
    $vec = "true";
  }else{
    $vec = "false";
  }

  $cad=json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');
?>
