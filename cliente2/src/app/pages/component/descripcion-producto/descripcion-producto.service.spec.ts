import { TestBed, inject } from '@angular/core/testing';

import { DescripcionProductoService } from './descripcion-producto.service';

describe('DescripcionProductoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DescripcionProductoService]
    });
  });

  it('should be created', inject([DescripcionProductoService], (service: DescripcionProductoService) => {
    expect(service).toBeTruthy();
  }));
});
