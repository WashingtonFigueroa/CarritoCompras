import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosIndexComponent } from './articulos-index.component';

describe('ArticulosIndexComponent', () => {
  let component: ArticulosIndexComponent;
  let fixture: ComponentFixture<ArticulosIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
