import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosCreateComponent } from './articulos-create.component';

describe('ArticulosCreateComponent', () => {
  let component: ArticulosCreateComponent;
  let fixture: ComponentFixture<ArticulosCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
