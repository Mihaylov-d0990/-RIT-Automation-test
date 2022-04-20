import { NgModule } from '@angular/core'
import { RouterModule, Routes} from '@angular/router'
import { CurrentPlanetComponent } from './current-planet/current-planet.component'
import { PlanetsComponent } from './planets/planets.component'

const routes: Routes = [
  {path: 'planet/:url', component: CurrentPlanetComponent},
  {path: '', component: PlanetsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
