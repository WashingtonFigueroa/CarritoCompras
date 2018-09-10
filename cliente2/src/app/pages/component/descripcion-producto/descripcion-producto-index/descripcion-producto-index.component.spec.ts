import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionProductoIndexComponent } from './descripcion-producto-index.component';

describe('DescripcionProductoIndexComponent', () => {
  let component: DescripcionProductoIndexComponent;
  let fixture: ComponentFixture<DescripcionProductoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionProductoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionProductoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
