<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","","multi22");
  return $con;
}
?>
