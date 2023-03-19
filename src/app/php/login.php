<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require("db.php");
  $con=retornarConexion();

  $registros=mysqli_query($con,"select * from usuarios where username='$_GET[username]'");

  if ($reg=mysqli_fetch_array($registros))
  {
    $vec[]=$reg;
  }

  $cad=json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');
?>
