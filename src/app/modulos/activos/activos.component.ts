import { Component, OnInit } from '@angular/core';
import { ActivosService } from 'src/app/servicios/activos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
  styleUrls: ['./activos.component.scss']
})
export class activosComponent implements OnInit {

  // variables globales 
  verf = false;
  activos:any;
  idactivo:any;
  marca: any;
  tipo: any;
  ciudad:any;
  modelo:any;
  empleados:any;
  departamento:any
  activ={
    n_id_activo:0,
    fo_marca:0,
    fo_tipo:0,
    fo_ciudad:0,
    n_serie:"",
    fo_modelo:0,
    observaciones:"",
    costo:0,
    fo_empleados:0,
    fo_departamento:0,
    cc_responsable:0,
    fecha_de_compra:"",
    fecha_de_entrega:"",
  };

  // para validar
  validn_id_activo = true;
  validfomarca = true;
  validfotipo = true;
  validfociudad = true;
  validn_serie = true;
  validfomodelo = true;
  validobservaciones = true;
  validcosto = true;
  validfoempleados = true;
  validfodepartamento = true;
  validcc_responsable = true;
  validfecha_de_compra = true;
  validfecha_de_entrega = true;
  beditar = false;

  constructor (private sactivos: ActivosService) {}

  ngOnInit():void {
  this.consulta();
  this.consulta_marca();
  this.consulta_tipo();
  this.consulta_ciudad();
  this.consulta_modelo();
  this.consulta_empleados();
  this.consulta_departamento();  
  // this.limpiar();
 }

  // mostrar formulario
 mostrar(dato:any) {
 switch(dato){
    case 0:
     this.verf = false;
     this.beditar = false;
     this.idactivo = "";
    //  this.limpiar();
    break;
    case 1:
     this.verf=true;
     break
 }
 }

  //limpiar
  limpiar(){
    this.activ.n_id_activo=0;
    this.activ.fo_marca = 0;
    this.activ.fo_tipo = 0 ;
    this.activ.fo_ciudad =0;
    this.activ.n_serie= "";
    this.activ.fo_modelo=0;
    this.activ.observaciones="";
    this.activ.costo=0;
    this.activ.fo_empleados=0;
    this.activ.fo_departamento=0;
    this.activ.cc_responsable=0;
    this.activ.fecha_de_compra="";
    this.activ.fecha_de_entrega=""
  } 
  
  //validad
  validar(){
     if(this.activ.n_id_activo == 0){
      this.validn_id_activo = false;
     }else{
      this.validn_id_activo = true;
     }
     
     if(this.activ.fo_marca == 0){
      this.validfomarca = false;
     }else{
      this.validfomarca = true;
     }

     if(this.activ.fo_tipo == 0){
      this.validfotipo = false;
     }else{
      this.validfotipo = true;
     }

     if(this.activ.fo_ciudad == 0){
      this.validfociudad = false;
     }else{
      this.validfociudad = true;
     }

     if(this.activ.n_serie == ""){
      this.validn_serie = false;
     }else{
      this.validn_serie = true;
     }

     if(this.activ.fo_modelo == 0){
      this.validfomodelo = false;
     }else{
      this.validfomodelo = true;
     }

     if(this.activ.observaciones == ""){
      this.validobservaciones = false;
     }else{
      this.validobservaciones = true;
     }

     if(this.activ.costo == 0){
      this.validcosto = false;
     }else{
      this.validcosto = true;
     }

     if(this.activ.fo_empleados == 0){
      this.validfoempleados = false;
     }else{
      this.validfoempleados = true;
     }

     if(this.activ.fo_departamento == 0){
      this.validfodepartamento = false;
     }else{
      this.validfodepartamento = true;
     }

     if(this.activ.cc_responsable == 0){
      this.validcc_responsable = false;
     }else{
      this.validcc_responsable = true;
     }

     if(this.activ.fecha_de_compra == ""){
      this.validfecha_de_compra = false;
     }else{
      this.validfecha_de_compra = true;
     }

     if(this.activ.fecha_de_entrega == ""){
      this.validfecha_de_entrega = false;
     }else{
      this.validfecha_de_entrega = true;
     }
    
    }
 
 consulta(){
   this.sactivos.consultar().subscribe((result:any) => {
    this.activos = result;
    console.log (this.activos);
   })
 }

 consulta_marca(){
  this.sactivos.consultar_marca().subscribe((result:any) => {
   this.marca = result;
   console.log (this.activos);
   })
 }

 consulta_tipo(){
  this.sactivos.consultar_tipo().subscribe((result:any) => {
   this.tipo = result;
   console.log (this.activos);
   })
 }

 consulta_ciudad(){
  this.sactivos.consultar_ciudad().subscribe((result:any) => {
   this.ciudad = result;
   console.log (this.activos);
   })
 }

 consulta_modelo(){
  this.sactivos.consultar_modelo().subscribe((result:any) => {
   this.modelo = result;
   console.log (this.activos);
   })
 }

 consulta_empleados(){
  this.sactivos.consultar_empleados().subscribe((result:any) => {
   this.empleados = result;
   console.log (this.activos);
   })
 } 

 consulta_departamento(){
  this.sactivos.consultar_departamento().subscribe((result:any) => {
   this.departamento = result;
   console.log (this.activos);
   })
 }
 

   ingresar(){
   //cosole.log(this.cat);
   this.validar();
   let marc =Number(this.activ.fo_marca);
   this.activ.fo_marca = marc;

   this.validar();
   let tip =Number(this.activ.fo_tipo);
   this.activ.fo_tipo = tip;

   this.validar();
   let ciuda =Number(this.activ.fo_ciudad);
   this.activ.fo_ciudad = ciuda;

   this.validar();
   let model =Number(this.activ.fo_modelo);
   this.activ.fo_modelo = model;
   
   this.validar();
   let emplead =Number(this.activ.fo_empleados);
   this.activ.fo_empleados = emplead;

   this.validar();
   let departamen =Number(this.activ.fo_departamento);
   this.activ.fo_departamento = departamen;


   console.log(this.activ);

   
    if(this.validn_id_activo==true && this.validfomarca==true && this.validfotipo==true && this.validfociudad==true && this.validn_serie==true && this.validfomodelo==true && this.validobservaciones==true && this.validcosto==true && this.validfoempleados==true && this.validfodepartamento==true && this.validcc_responsable==true && this.validfecha_de_compra==true && this.validfecha_de_entrega==true ){

      this.sactivos.insertar(this.activ).subscribe((datos:any) => {
        if (datos['resultado']=='OK') {
         //alert (datos['mensaje']);
         this.consulta();
       }
     });
 
     this.mostrar(0);
     this.limpiar();
 
    }
  }

}

