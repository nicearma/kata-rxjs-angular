import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  constructor() {
  }


  getNumbersEvens(size: number): Observable<number[]> {

    const evens = [];

    for (let i = 0; i < size; i++) {
      evens.push(i * 2);
    }

    return from(evens);

  }

  getNumbersOdds(size: number): Observable<number[]> {

    const odds  = [];

    for (let i = 0; i < size; i++) {
      odds.push((i * 2) - 1 as number);
    }

    return from(odds);
  }


  getRange(init: number, end: number): Observable<number> {

    const numbers = [];

    for (let i = init; i < end; i++) {
      numbers.push(i);
    }

    return numbers;
  }

}
