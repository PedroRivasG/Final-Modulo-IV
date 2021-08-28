import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { empleado } from '../../entidades/empleado';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  employee: empleado={} as empleado;
  employees: any;


  constructor(private http:HttpClient) {
    
    http.get('https://morning-meadow-78028.herokuapp.com/empleados')
    .subscribe(response=>{
      this.employees=response;
    });
  }

  

  create():void{
    this.http.post<empleado>('https://morning-meadow-78028.herokuapp.com/empleados',this.employee)
    .subscribe(response =>{
      console.log(response);
      this.employee = {} as empleado;
      window.location.reload();
    });
  }

  ngOnInit(): void {
  }
 

}
