import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionProductoEditComponent } from './descripcion-producto-edit.component';

describe('DescripcionProductoEditComponent', () => {
  let component: DescripcionProductoEditComponent;
  let fixture: ComponentFixture<DescripcionProductoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionProductoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionProductoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
