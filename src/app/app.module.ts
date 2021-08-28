import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmpleadosModule } from './empleados/empleados.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmpleadosModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
