/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateBSMovieService } from './updateBSMovie.service';

describe('Service: UpdateBSMovie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateBSMovieService]
    });
  });

  it('should ...', inject([UpdateBSMovieService], (service: UpdateBSMovieService) => {
    expect(service).toBeTruthy();
  }));
});
