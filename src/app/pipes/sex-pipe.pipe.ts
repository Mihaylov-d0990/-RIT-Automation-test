import { Pipe, PipeTransform } from '@angular/core';
import { IPerson } from '../current-planet/current-planet.component';

@Pipe({
  name: 'sexPipe',
  pure: false
})
export class SexPipePipe implements PipeTransform {

  transform(value: IPerson[], ...args: unknown[]): IPerson[] | null {
    if (args[0] === "") {
      return value
    } else {
      return value.filter((person: IPerson) => person.gender === args[0])
    }
  }
}
