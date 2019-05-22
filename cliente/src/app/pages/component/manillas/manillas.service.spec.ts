import { TestBed, inject } from '@angular/core/testing';

import { ManillasService } from './manillas.service';

describe('ManillasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManillasService]
    });
  });

  it('should be created', inject([ManillasService], (service: ManillasService) => {
    expect(service).toBeTruthy();
  }));
});
