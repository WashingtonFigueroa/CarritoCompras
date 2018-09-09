import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasIndexComponent } from './categorias-index.component';

describe('CategoriasIndexComponent', () => {
  let component: CategoriasIndexComponent;
  let fixture: ComponentFixture<CategoriasIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
