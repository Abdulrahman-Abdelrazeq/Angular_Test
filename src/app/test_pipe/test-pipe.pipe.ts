import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'halfNumber',
  standalone: true
})
export class HalfNumberPipe implements PipeTransform {

  transform(value: number): number {
    return value / 2;
  }

}