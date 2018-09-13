import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionCreateComponent } from './promocion-create.component';

describe('PromocionCreateComponent', () => {
  let component: PromocionCreateComponent;
  let fixture: ComponentFixture<PromocionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
