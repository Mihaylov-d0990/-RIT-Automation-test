import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

interface IFilm {
  title: string
}

export interface IPerson {
  name: string,
	height: string,
	mass: string,
	hair_color: string,
	skin_color: string,
	eye_color: string,
	birth_year: string,
	gender: string,
  show: boolean
}

interface IPlanet {
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  url: string,
  residents: IPerson[],
  residentLinks: string[],
  films: string[]
}

@Component({
  selector: 'app-current-planet',
  templateUrl: './current-planet.component.html',
  styleUrls: ['./current-planet.component.scss']
})
export class CurrentPlanetComponent implements OnInit {
  planet: IPlanet = {
    name: "",
    climate: "",
    diameter: "",
    gravity: "",
    orbital_period: "",
    population: "",
    rotation_period: "",
    surface_water: "",
    terrain: "",
    url: "",
    residents: [{
      name: "",
      height: "",
      mass: "",
      hair_color: "",
      skin_color: "",
      eye_color: "",
      birth_year: "",
      gender: "",
      show: false
    }],
    films: [],
    residentLinks: []
  }

  currentSex: string = ''

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  //  Change visibility of the resident

  showResident(person: IPerson) {
    person.show = !person.show
  }

  //  Change type of the filter

  changeSex(sex: string) {
    this.currentSex = sex
  }

  //  Fetching data from API

  ngOnInit(): void {
    this.http.get<IPlanet>(`https://swapi.dev/api/planets/${this.route.snapshot.paramMap.get('url')}`)
    .subscribe(res => {
      this.planet = res
      Object.keys(res).forEach(key => {
        if (key === "films") {
          let filmTitles: string[]  = []
          let films: (string | IPerson)[] = [...res[key as keyof IPlanet]]
          films.forEach((film: any) => {
            this.http.get<IFilm>(film)
            .subscribe(res => { filmTitles.push(res.title)})
          })
          this.planet.films = filmTitles
        }
        if (key === "residents") {
          let people: IPerson[] = []
          let peopleLinks: (string | IPerson)[] = [...res[key as keyof IPlanet]]
          peopleLinks.forEach((person: any) => {
            this.http.get<IPerson>(person)
            .subscribe(res => { people.push({...res, show: false})})
          })
          this.planet.residents = people
        }
      })
    })
  }

}
