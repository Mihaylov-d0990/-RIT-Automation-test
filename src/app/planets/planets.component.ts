import { HttpClient } from '@angular/common/http';
import { Component,  OnInit } from '@angular/core';

interface IResult {
  count: number,
  results: any[]
}

export interface IPlanet {
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  url: string
}

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets: IPlanet[] = []

  constructor(private http: HttpClient) {}

  //  Fetching data from API

  ngOnInit(): void {
    this.http.get<IResult>('https://swapi.dev/api/planets/')
    .subscribe(res => {
      this.planets =  res.results
      this.planets.forEach(planet => {
        planet.url = planet.url.replace(/[^\d]/g, '')
      })
    })
  }
}
