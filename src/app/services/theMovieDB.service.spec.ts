/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TheMovieDBService } from './theMovieDB.service';

describe('Service: TheMovieDB', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheMovieDBService]
    });
  });

  it('should ...', inject([TheMovieDBService], (service: TheMovieDBService) => {
    expect(service).toBeTruthy();
  }));
});
