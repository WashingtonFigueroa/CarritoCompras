import { TestBed, inject } from '@angular/core/testing';

import { ClienteListaDeseosService } from './cliente-lista-deseos.service';

describe('ClienteListaDeseosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClienteListaDeseosService]
    });
  });

  it('should be created', inject([ClienteListaDeseosService], (service: ClienteListaDeseosService) => {
    expect(service).toBeTruthy();
  }));
});
