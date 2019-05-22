import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFacturacionComponent } from './cliente-facturacion.component';

describe('ClienteFacturacionComponent', () => {
  let component: ClienteFacturacionComponent;
  let fixture: ComponentFixture<ClienteFacturacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteFacturacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
