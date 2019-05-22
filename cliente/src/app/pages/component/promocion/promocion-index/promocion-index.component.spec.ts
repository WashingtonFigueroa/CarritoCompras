import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionIndexComponent } from './promocion-index.component';

describe('PromocionIndexComponent', () => {
  let component: PromocionIndexComponent;
  let fixture: ComponentFixture<PromocionIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocionIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
