import { TestBed, inject } from '@angular/core/testing';

import { CamisaService } from './camisa.service';

describe('CamisaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CamisaService]
    });
  });

  it('should be created', inject([CamisaService], (service: CamisaService) => {
    expect(service).toBeTruthy();
  }));
});
