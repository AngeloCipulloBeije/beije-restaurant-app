import { Pipe } from '@angular/core';

@Pipe({
  name: 'joinArray',
  standalone: true
})
export class JoinArrayPipe {

  transform(value: string[], separator: string = ', '): string {
    if (!Array.isArray(value)) {
      return "No Toppings";
    }
    return value.join(separator);
  }

}
