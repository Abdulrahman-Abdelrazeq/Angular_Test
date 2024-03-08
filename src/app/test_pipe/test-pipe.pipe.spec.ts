import { TestBed } from '@angular/core/testing';
import { HalfNumberPipe } from './half-number.pipe';

describe('HalfNumberPipe', () => {
  let pipe: HalfNumberPipe;

  beforeEach(() => {
    

    pipe = new HalfNumberPipe();
  });

  it('should return half of the number', () => {
    expect(pipe.transform(10)).toEqual(5);
   
  });

  
});