<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require ("../conexion.php");

$con = "SELECT a.n_id_activo,m.nombre AS nmarca,t.nombre AS ntipo,c.nombre AS nciudad,a.n_serie,o.nombre AS  nmodelo,a.observaciones,a.costo,e.nombres as nempleados,d.nombre AS ndepartamento,a.cc_responsable,a.fecha_de_compra,a.fecha_de_entrega
from activos a 
INNER JOIN marca m ON a.fo_marca =m.id_marca 
INNER JOIN tipo t ON a.fo_tipo = t.id_tipo
INNER JOIN ciudad C ON a.fo_ciudad = c.id_ciudad
INNER JOIN modelo o ON a.fo_modelo = o.id_modelo
INNER JOIN empleados e ON a.fo_empleados = e.id_empleados
INNER JOIN departamento d ON a.fo_departamento = d.id_departamento
ORDER BY m.nombre,t.nombre,c.nombre,o.nombre,e.nombres,d.nombre";
$res=mysqli_query($conexion,$con) or die ('no consulto activos');


$vec=[];
while ($reg=mysqli_fetch_array($res))
{
    $vec[]=$reg;
}

$cad=json_encode($vec);
echo $cad;
header('content-type: application/json');
?>
