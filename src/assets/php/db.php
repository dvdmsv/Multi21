<?php
  function retornarConexion() {
    $options = [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ];

    $conexion = new PDO("mysql:host=localhost;dbname=id20705264_multi21", "id20705264_root", "ProyectoTFG2023@", $options);
    if($conexion->errorCode()){
        echo "Error en la conexion";
    }else{
        return $conexion;
    }
  }
?>
