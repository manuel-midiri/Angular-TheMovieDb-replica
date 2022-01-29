/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetailBSService } from './detailBS.service';

describe('Service: DetailBS', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailBSService]
    });
  });

  it('should ...', inject([DetailBSService], (service: DetailBSService) => {
    expect(service).toBeTruthy();
  }));
});
