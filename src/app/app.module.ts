import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatitasComponent } from './patitas/patitas.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { TitulopagComponent } from './titulopag/titulopag.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { SeccionunoComponent } from './seccionuno/seccionuno.component';
import { FooterComponent } from './footer/footer.component';
import { MapaComponent } from './mapa/mapa.component';


@NgModule({
  declarations: [
    AppComponent,
    PatitasComponent,
    CarruselComponent,
    TitulopagComponent,
    ArticulosComponent,
    SeccionunoComponent,
    FooterComponent,
    MapaComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
