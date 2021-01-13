import {TestBed} from '@angular/core/testing';

import {NumbersService} from './numbers.service';
import {tap} from 'rxjs/operators';

describe('NumbersService', () => {
  let service: NumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Get in array the range from 1 to 10', (done) => {

    const validator = tap((result) => {
      expect(result).toBe(50);
    });

    const operator = null;

    service.getRange(1, 10)
      .pipe(
        operator,
        validator,
        endTest(done)
      ).subscribe();

  });

  it('Get 3 array from the range from 1 to 9', (done) => {

    const validator = tap((result) => {
      expect(result).toBe([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    });

    const operator = null;

    service.getRange(1, 10)
      .pipe(
        operator,
        validator,
        endTest(done)
      ).subscribe();

  });


  it('Get first element from range 5 to 10', (done) => {

    const validator = tap((result) => {
      expect(result).toBe(5);
    });

    const operator = null;

    service.getRange(5, 10)
      .pipe(
        operator,
        validator,
        endTest(done)
      ).subscribe();

  });


  it('Get all elements divisible by 5 from 1 to 50', (done) => {

    const validator = tap((result) => {
      expect(result).toBe([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    });

    const operator = null;

    service.getRange(1, 100)
      .pipe(
        operator,
        validator,
        endTest(done)
      ).subscribe();

  });


  it('Sum all range from 1 to 10', (done) => {

    const validator = tap((result) => {
      expect(result).toBe(50);
    });

    const operator = null;

    service.getRange(1, 10)
      .pipe(
        operator,
        validator,
        endTest(done)
      ).subscribe();

  });


  it('Sum all odd and even from size 10', (done) => {

    const validator = tap((result) => {
      expect(result).toBe(100);
    });

    const operator = null;

    service.getRange(1, 10)
      .pipe(
        operator,
        validator,
        endTest(done)
      ).subscribe();

  });

});


function endTest(done: DoneFn): any {

  return tap(() => done());
}
