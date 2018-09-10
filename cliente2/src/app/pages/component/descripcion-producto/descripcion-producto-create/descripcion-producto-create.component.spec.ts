import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionProductoCreateComponent } from './descripcion-producto-create.component';

describe('DescripcionProductoCreateComponent', () => {
  let component: DescripcionProductoCreateComponent;
  let fixture: ComponentFixture<DescripcionProductoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionProductoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionProductoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
