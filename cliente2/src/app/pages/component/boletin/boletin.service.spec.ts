import { TestBed, inject } from '@angular/core/testing';

import { BoletinService } from './boletin.service';

describe('BoletinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoletinService]
    });
  });

  it('should be created', inject([BoletinService], (service: BoletinService) => {
    expect(service).toBeTruthy();
  }));
});
