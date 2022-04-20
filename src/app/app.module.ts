import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlanetComponent } from './planet/planet.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanetsComponent } from './planets/planets.component';
import { CurrentPlanetComponent } from './current-planet/current-planet.component';
import { SexPipePipe } from './pipes/sex-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    PlanetsComponent,
    CurrentPlanetComponent,
    SexPipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
