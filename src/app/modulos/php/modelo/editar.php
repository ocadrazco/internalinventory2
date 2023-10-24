<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');


$params = json_decode($json);

require("../conexion.php");

//$editar = "UPDATE modelo SET nombre='junior manda' WHERE id_modelo=18";

$editar = "UPDATE modelo SET nombre='$params->nombre' WHERE id_modelo=$params->id_modelo";

mysqli_query($conexion, $editar) or die('no edito');

Class Result {}  

$response = new Result ();
$response->resultado = 'OK';
$response->mensaje ='datos modificados ';

header('Content-Type: application/json');
echo json_encode($response);
?>