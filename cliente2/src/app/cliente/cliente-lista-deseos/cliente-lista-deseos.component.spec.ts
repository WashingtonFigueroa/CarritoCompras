import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListaDeseosComponent } from './cliente-lista-deseos.component';

describe('ClienteListaDeseosComponent', () => {
  let component: ClienteListaDeseosComponent;
  let fixture: ComponentFixture<ClienteListaDeseosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteListaDeseosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteListaDeseosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
