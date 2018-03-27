import { TestBed, inject } from '@angular/core/testing';

import { BuslistService } from './buslist.service';

describe('BuslistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuslistService]
    });
  });

  it('should be created', inject([BuslistService], (service: BuslistService) => {
    expect(service).toBeTruthy();
  }));
});
