import { TestBed, inject } from '@angular/core/testing';

import { TipousuarioService } from './tipousuario.service';

describe('TipousuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipousuarioService]
    });
  });

  it('should be created', inject([TipousuarioService], (service: TipousuarioService) => {
    expect(service).toBeTruthy();
  }));
});
