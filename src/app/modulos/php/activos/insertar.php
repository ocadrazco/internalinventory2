<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");

$ins = "insert into activos(n_id_activo,fo_marca,fo_tipo,fo_ciudad,n_serie,fo_modelo,observaciones,costo,fo_empleados,fo_departamento,cc_responsable,fecha_de_compra,fecha_de_entrega) values('111111111', '2','1','3','prueba','2','prueba','prueba','1','2','prueba','prueba','prueba')";


$ins = "insert into activos (n_id_activo,fo_marca,fo_tipo,fo_ciudad,n_serie,fo_modelo,observaciones,costo,fo_empleados,fo_departamento,cc_responsable,fecha_de_compra,fecha_de_entrega) values('$params->n_id_activo','$params->fo_marca','$params->fo_tipo','$params->fo_ciudad','$params->n_serie','$params->fo_modelo','$params->observaciones','$params->costo','$params->fo_empleado','$params->fo_departamento','$params->cc_responsable','$params->fecha_de_compra','$params->fecha_de_entrega')";

mysqli_query($conexion, $ins) or die('no inserto');

Class Result {}  

$response = new Result ();
$response->resultado = 'OK';
$response->mensaje ='datos grabados';

header('Content-Type: application/json');
echo json_encode($response);
?>