<?php
  function retornarConexion() {
    $options = [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ];

    $conexion = new PDO("mysql:host=localhost;dbname=id20011369_multi21", "id20011369_root", "X3chv2!MO[[-g3te", $options);
    if($conexion->errorCode()){
        echo "Error en la conexion";
    }else{
        return $conexion;
    }
  }
?>
