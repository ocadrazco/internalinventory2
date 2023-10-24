<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");

//$editar = "UPDATE activos SET n_id_activo='123456789', fo_marca='1',fo_tipo='2',fo_ciudad='3',n_serie='123jhgljds',fo_modelo='1',observaciones='formateo de equipo', costo='1000.000', fo_empleados='1', fo_departamento='2', cc_responsable='1143254448', fecha_de_compra='25/6/2023', fecha_de_entrega='25/6/2023' WHERE id_activos=3";

$editar = "UPDATE activos SET n_id_activos='$params->n_id_activos', fo_marca='$params->fo_marca',fo_tipo='$params->fo_tipo',fo_ciudad='$params->fo_ciudad',n_serie='$params->n_serie',fo_modelo='$params->fo_modelo',observaciones='$params->observaciones', costo='$params->costo', fo_empleados='$params->fo_empleados', fo_departamento= '$params->fo_departamento', cc_responsable='$params->cc_responsable', fecha_de_compra='$params->fecha_de_compra', fecha_de_entrega='$params->fecha_de_entrega' WHERE id_activos=$params->id_activos";


mysqli_query($conexion, $editar) or die('no edito');

Class Result {}  

$response = new Result ();
$response->resultado = 'OK';
$response->mensaje ='datos modificados ';

header('Content-Type: application/json');
echo json_encode($response);
?>