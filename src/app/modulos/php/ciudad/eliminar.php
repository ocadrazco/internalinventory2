<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("../conexion.php" );

$del = "DELETE FROM ciudad WHERE id_ciudad=" .$_GET['id'];
mysqli_query($conexion,$del) or die ("no elimino");

class Result {}

$response = new Result ();
$response->resultado = 'OK';
$response->mensaje ='usuario borrado';

header('Content-Type: application/json');
echo json_encode($response);
?>