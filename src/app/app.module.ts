import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatitasComponent } from './patitas/patitas.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { TitulopagComponent } from './titulopag/titulopag.component';
import { ArticulosComponent } from './articulos/articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    PatitasComponent,
    CarruselComponent,
    TitulopagComponent,
    ArticulosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
