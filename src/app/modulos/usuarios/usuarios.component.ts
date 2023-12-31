import { Component, OnInit } from '@angular/core';
import { identity } from 'rxjs';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent implements OnInit{

  // variables globales 
  verf = false;
  usuario:any;
  iduser:any;
  user={
    nombre:"",
    usuario:"",
    clave:"",
    tipo:""
  };

  // para validad
  validnombre = true;
  validusuario = true;
  validclave = true;
  validtipo = true;
  beditar = false;

  constructor (private suser: UsuariosService) {}

  ngOnInit():void {
  this.consulta();
  this.limpiar();
 }

  // mostrar formulario
 mostrar(dato:any) {
 switch(dato){
    case 0:
     this.verf = false;
     this.beditar = false;
     this.iduser = "";
     this.limpiar();
    break;
    case 1:
     this.verf=true;
     break
 }
 }

 //limpiar
 limpiar(){
  this.user.nombre ="";
  this.user.usuario ="";
  this.user.clave ="";
  this.user.tipo ="";
 }

 //validad
 validar(){
   if(this.user.nombre==""){
    this.validnombre = false;
   }else{
    this.validnombre = true;
   }

   if(this.user.usuario==""){
    this.validusuario = false;
   }else{
    this.validusuario = true;
   }

   if(this.user.clave==""){
    this.validclave = false;
   }else{
    this.validclave = true;
   }

   if(this.user.tipo==""){
    this.validtipo = false;
   }else{
    this.validtipo = true;
   }
  }

 consulta(){
 this.suser.consultar().subscribe((result:any) => {
    this.usuario = result;
    console.log (this.usuario);
  })
  }

  ingresar(){
   //cosole.log(this.cat);
   this.validar();
    if(this.validnombre==true && this.validusuario==true && this.validclave==true && this.validtipo==true){

      this.suser.insertar(this.user).subscribe((datos:any) => {
        if (datos['resultado']=='OK') {
         //alert (datos['mensaje']);
         this.consulta();
       }
     });
 
     this.mostrar(0);
     this.limpiar();
 
    }
  }
      
  pregunta(id: any,nombre: any ){
    console.log("entro con el usuario "+ id);
    Swal.fire({
      title: 'Esta seguro de eliminar el usuario ' + nombre +'?',
      text: "El proceso no podra ser revertido!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.borrarusuario(id);
        Swal.fire({
          title: "Eliminado",
          text: "El usuario ha sido eliminado.",
          icon: "success"
        });
      }
    });
  }

  borrarusuario(id:any){
    console.log(id);

    this.suser.eliminar(id).subscribe((datos:any) =>{ 
      if(datos['resultados']=='ok'){
        this.consulta();
      }
    });
  }
cargardatos(datos:any, id:number){
  //console.log(datos)
  this.user.nombre = datos.nombre;
  this.user.usuario = datos.usuario;
  this.user.clave = datos.clave;
  this.user.tipo = datos.tipo;
  this.iduser = id;
  this.mostrar(1);
  this.beditar=true;
}

editar(){
  // console.log(this.user);
  this.validar();
  if(this.validnombre==true && this.validusuario==true && this.validclave==true && this.validtipo==true){

    this.suser.edit(this.user,this.iduser).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
       //alert (datos['mensaje']);
       this.consulta();
     }
   });

   this.mostrar(0);

  }
}
}

