import { Component, Input, OnInit } from '@angular/core';
import { IPlanet } from '../planets/planets.component';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  @Input() planet: IPlanet = {
    name: "",
    climate: "",
    diameter: "",
    gravity: "",
    orbital_period: "",
    population: "",
    rotation_period: "",
    surface_water: "",
    terrain: "",
    url: ""
  }

  constructor() {}

  ngOnInit(): void {}
}
