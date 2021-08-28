import { Component, Input, OnInit } from '@angular/core';
import { empleado } from 'src/app/entidades/empleado';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @Input() employee:empleado= {} as empleado;
  employees:any;
  registro='create';
  _id: string | any;
  

  constructor(private http:HttpClient, private aRouter: ActivatedRoute) {
    this._id= this.aRouter.snapshot.paramMap.get('_id');
    http.get('https://morning-meadow-78028.herokuapp.com/empleados')
    .subscribe(response => {
      this.employees=response;
      console.log(response);
    });
   }
   

   editar():void{
     if (this._id === null) { 
      this.registro='create'
     } else {
      this.registro='editar'
     }
     console.log("El id es igual a =" + this._id);
      this.http.get<empleado>('https://morning-meadow-78028.herokuapp.com/empleados/uno/'+this._id)
      .subscribe(Response => {
       this.employee=Response;
     console.log(Response);
      },error =>{
        console.log(error)
      });
  }

  create():void{
    this.http.put<empleado>('https://morning-meadow-78028.herokuapp.com/empleados/'+this._id,this.employee)
    .subscribe(response =>{
      console.log(response);
      this.employee = {} as empleado;
      window.location.reload();
    });
  }
  ngOnInit(): void {
    this.editar();
  }

}
