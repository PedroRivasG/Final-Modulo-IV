import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { empleado } from 'src/app/entidades/empleado';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  employee:empleado= {} as empleado;
  employees:any;

  constructor(private http:HttpClient) { 
    http.get('https://morning-meadow-78028.herokuapp.com/empleados')
    .subscribe(response => {
      this.employees=response;
      console.log(response);
    });
  }

  enviarPos(): void {
    this.http.post<empleado>('https://morning-meadow-78028.herokuapp.com/empleados',this.employee)
    .subscribe(response =>{
      console.log(response);
      this.employee = {} as empleado
    })
  }

  editar(_id:string):void{
    
    this.http.get<empleado>('https://morning-meadow-78028.herokuapp.com/empleados/uno/'+_id)
    .subscribe(Response => {
     this.employee=Response;
    });
  }

  eliminar(_id:string){
    this.http.delete<empleado>('https://morning-meadow-78028.herokuapp.com/empleados/'+_id)
    .subscribe(Response =>{
      alert("Usuario Eliminado");
      window.location.reload();

    })
  }
  ngOnInit(): void {
    
  }

}
