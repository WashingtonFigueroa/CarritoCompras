import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteComprasComponent } from './cliente-compras.component';

describe('ClienteComprasComponent', () => {
  let component: ClienteComprasComponent;
  let fixture: ComponentFixture<ClienteComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
